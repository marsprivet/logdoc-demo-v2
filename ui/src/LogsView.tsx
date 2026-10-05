import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactElement } from "react";
import { Button } from "@ds/components/button";
import { Callout } from "@ds/components/callout";
import { Checkbox } from "@ds/components/checkbox";
import { Input } from "@ds/components/input";
import { Pill } from "@ds/components/pill";
import { Slider } from "@ds/components/slider";
import { ToggleGroup } from "@ds/components/toggle-group";
import { ArrowUp, Download, Minus, Play, Plus, Settings2, Square } from "@ds/icons";
import LevelBadge, { LEVELS } from "./components/LevelBadge";
import SearchInput from "./components/SearchInput";
import "./LogsView.css";

type Entry = {
  ts: string;
  app?: string;
  src?: string;
  lvl: string;
  pid?: string;
  msg: string;
  fields?: Record<string, string>;
};

// LogsRequest lets other views (topology) open the log view pre-filtered.
export type LogsRequest = {
  app: string; // comma-separated app filter
  tail: boolean; // true = start live tail, false = run a search
  id: number; // monotonically increasing, so repeated requests re-trigger
};

// A click-added filter, the v1 "flap": app, source or an exact field match.
type Chip = { kind: "app" | "src" | "field"; key?: string; value: string };

type Density = "full" | "compact";

type ViewConfig = {
  showTime: boolean;
  showApp: boolean;
  showSrc: boolean;
  showFields: boolean;
  density: Density;
  fontSize: number; // px for the mono log text
};

const MAX_TAIL_ROWS = 500;
const MAX_LOADED_ROWS = 3000;
const BATCH = 200;

const PERIODS: { id: string; label: string; minutes: number | null }[] = [
  { id: "15m", label: "15m", minutes: 15 },
  { id: "1h", label: "1h", minutes: 60 },
  { id: "24h", label: "24h", minutes: 24 * 60 },
  { id: "7d", label: "7d", minutes: 7 * 24 * 60 },
  { id: "all", label: "all", minutes: null },
];

const DEFAULT_VIEW: ViewConfig = {
  showTime: true,
  showApp: true,
  showSrc: true,
  showFields: true,
  density: "full",
  fontSize: 13,
};

function loadView(): ViewConfig {
  try {
    return { ...DEFAULT_VIEW, ...JSON.parse(localStorage.getItem("logdoc_view") ?? "{}") };
  } catch {
    return DEFAULT_VIEW;
  }
}

function chipLabel(c: Chip): string {
  if (c.kind === "field") return `${c.key}=${c.value}`;
  return `${c.kind}:${c.value}`;
}

function sameChip(a: Chip, b: Chip): boolean {
  return a.kind === b.kind && a.key === b.key && a.value === b.value;
}

export default function LogsView({ request }: { request: LogsRequest | null }) {
  const [app, setApp] = useState("");
  const [lvl, setLvl] = useState<string[]>([]);
  const [q, setQ] = useState("");
  const [chips, setChips] = useState<Chip[]>([]);
  const [period, setPeriod] = useState("24h");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [tookMs, setTookMs] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tailing, setTailing] = useState(false);
  const [exhausted, setExhausted] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [newCount, setNewCount] = useState(0);
  const [view, setView] = useState<ViewConfig>(loadView);
  const [showView, setShowView] = useState(false);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const wsRef = useRef<WebSocket | null>(null);
  const pausedRef = useRef<Entry[]>([]);
  const atTopRef = useRef(true);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef(false);

  useEffect(() => {
    localStorage.setItem("logdoc_view", JSON.stringify(view));
  }, [view]);

  const buildParams = useCallback(
    (opts: { appOverride?: string; chipsOverride?: Chip[]; limit: number; before?: string }) => {
      const p = new URLSearchParams();
      const cs = opts.chipsOverride ?? chips;
      const apps = new Set(
        (opts.appOverride ?? app)
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      );
      cs.filter((c) => c.kind === "app").forEach((c) => apps.add(c.value));
      apps.forEach((a) => p.append("app", a));
      cs.filter((c) => c.kind === "src").forEach((c) => p.append("src", c.value));
      cs.filter((c) => c.kind === "field").forEach((c) => p.set(`field.${c.key}`, c.value));
      if (lvl.length > 0) p.set("lvl", lvl.join(","));
      if (q) p.set("q", q);
      if (opts.limit) p.set("limit", String(opts.limit));

      // Time window: an explicit "before" cursor (older pages) narrows "to".
      const preset = PERIODS.find((x) => x.id === period);
      if (period === "custom") {
        if (customFrom) p.set("from", new Date(customFrom).toISOString());
        if (customTo && !opts.before) p.set("to", new Date(customTo).toISOString());
      } else if (preset?.minutes) {
        p.set("from", new Date(Date.now() - preset.minutes * 60_000).toISOString());
      }
      if (opts.before) p.set("to", opts.before);

      const key = localStorage.getItem("logdoc_api_key");
      if (key) p.set("api_key", key);
      return p;
    },
    [app, chips, lvl, q, period, customFrom, customTo],
  );

  const search = useCallback(
    async (appOverride?: string, chipsOverride?: Chip[]) => {
      stopTail();
      setError(null);
      setExpanded(new Set());
      try {
        const params = buildParams({ appOverride, chipsOverride, limit: BATCH });
        const res = await fetch(`/api/v1/query?${params}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const got: Entry[] = data.entries ?? [];
        setEntries(got);
        setTookMs(data.took_ms ?? null);
        setExhausted(got.length < BATCH);
      } catch (e) {
        setError(String(e));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [buildParams],
  );

  // Older page: everything strictly before the oldest loaded timestamp.
  const loadMore = useCallback(async () => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    setLoadingMore(true);
    try {
      const oldest = entries[entries.length - 1];
      if (!oldest) return;
      const before = new Date(new Date(oldest.ts).getTime() - 1).toISOString();
      const res = await fetch(`/api/v1/query?${buildParams({ limit: BATCH, before })}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const got: Entry[] = data.entries ?? [];
      setEntries((prev) => [...prev, ...got].slice(0, MAX_LOADED_ROWS));
      if (got.length < BATCH || entries.length + got.length >= MAX_LOADED_ROWS) setExhausted(true);
    } catch (e) {
      setError(String(e));
    } finally {
      loadingRef.current = false;
      setLoadingMore(false);
    }
  }, [entries, buildParams]);

  // Infinite scroll: fetch older logs when the sentinel under the table shows up.
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || tailing || exhausted) return;
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting) void loadMore();
    });
    io.observe(el);
    return () => io.disconnect();
  }, [tailing, exhausted, loadMore]);

  function stopTail() {
    wsRef.current?.close();
    wsRef.current = null;
    pausedRef.current = [];
    setNewCount(0);
    setTailing(false);
  }

  const startTail = useCallback(
    (appOverride?: string, chipsOverride?: Chip[]) => {
      stopTail();
      setError(null);
      setEntries([]);
      setTookMs(null);
      setExhausted(true);
      setExpanded(new Set());
      const proto = location.protocol === "https:" ? "wss" : "ws";
      const params = buildParams({ appOverride, chipsOverride, limit: 0 });
      params.delete("from");
      params.delete("to");
      const ws = new WebSocket(`${proto}://${location.host}/api/v1/tail?${params}`);
      ws.onmessage = (ev) => {
        const e: Entry = JSON.parse(ev.data);
        if (atTopRef.current) {
          setEntries((prev) => [e, ...prev].slice(0, MAX_TAIL_ROWS));
        } else {
          // The reader has scrolled down: hold new entries so rows don't move.
          pausedRef.current.push(e);
          setNewCount(pausedRef.current.length);
        }
      };
      ws.onerror = () => setError("WebSocket: connection error");
      ws.onclose = () => setTailing(false);
      wsRef.current = ws;
      setTailing(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [buildParams],
  );

  // Track whether the viewport is at the top (tail auto-flow) or scrolled down.
  useEffect(() => {
    const onScroll = () => {
      atTopRef.current = window.scrollY < 60;
      if (atTopRef.current && pausedRef.current.length > 0) flushPaused();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function flushPaused() {
    const held = pausedRef.current;
    pausedRef.current = [];
    setNewCount(0);
    if (held.length > 0) {
      setEntries((prev) => [...held.reverse(), ...prev].slice(0, MAX_TAIL_ROWS));
    }
  }

  // A request from another view: apply the filter and run it.
  useEffect(() => {
    if (!request) return;
    setApp(request.app);
    setChips([]);
    if (request.tail) startTail(request.app, []);
    else search(request.app, []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request?.id]);

  useEffect(() => () => stopTail(), []);

  function toggleLevel(name: string) {
    setLvl((prev) => (prev.includes(name) ? prev.filter((l) => l !== name) : [...prev, name]));
  }

  function addChip(c: Chip) {
    if (chips.some((x) => sameChip(x, c))) return;
    const next = [...chips, c];
    setChips(next);
    if (tailing) startTail(undefined, next);
    else void search(undefined, next);
  }

  function removeChip(c: Chip) {
    const next = chips.filter((x) => !sameChip(x, c));
    setChips(next);
    if (tailing) startTail(undefined, next);
    else void search(undefined, next);
  }

  function exportAs(format: "csv" | "ndjson") {
    let text: string;
    if (format === "ndjson") {
      text = entries.map((e) => JSON.stringify(e)).join("\n");
    } else {
      const esc = (s: string) => `"${s.replace(/"/g, '""')}"`;
      text = [
        "ts,lvl,app,src,pid,msg,fields",
        ...entries.map((e) =>
          [
            e.ts,
            e.lvl,
            e.app ?? "",
            e.src ?? "",
            e.pid ?? "",
            e.msg,
            e.fields ? JSON.stringify(e.fields) : "",
          ]
            .map(esc)
            .join(","),
        ),
      ].join("\n");
    }
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `logdoc-export.${format === "csv" ? "csv" : "ndjson"}`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // Group consecutive entries sharing (app, src, lvl), as the v1 client did.
  const groups: Group[] = [];
  for (const e of entries) {
    const g = groups[groups.length - 1];
    if (g && g.head.app === e.app && g.head.src === e.src && g.head.lvl === e.lvl) {
      g.rest.push(e);
    } else {
      groups.push({ head: e, rest: [], index: groups.length });
    }
  }

  function toggleGroup(i: number) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const fmtTs = (ts: string) => new Date(ts).toLocaleString();
  const renderCells = (e: Entry, extra?: ReactElement) => (
    <>
      <td className="cell-level" data-level={e.lvl} title={e.lvl} aria-label={e.lvl} />
      {view.showTime && <td className="cell-ts">{fmtTs(e.ts)}</td>}
      {view.showApp && (
        <td className="cell-mono filterable" onClick={() => e.app && addChip({ kind: "app", value: e.app })} title="filter by app">
          {e.app}
        </td>
      )}
      {view.showSrc && (
        <td className="cell-muted filterable" onClick={() => e.src && addChip({ kind: "src", value: e.src })} title="filter by source">
          {e.src}
        </td>
      )}
      <td className="msg">
        {e.msg}
        {view.showFields &&
          e.fields &&
          Object.entries(e.fields).map(([k, v]) => (
            <span
              key={k}
              className="field filterable"
              onClick={() => addChip({ kind: "field", key: k, value: v })}
              title="filter by field"
            >
              {k}={v}
            </span>
          ))}
        {extra}
      </td>
    </>
  );

  const colCount = 2 + (view.showTime ? 1 : 0) + (view.showApp ? 1 : 0) + (view.showSrc ? 1 : 0);

  const hasEntries = entries.length > 0;
  const tailBusy = "Stop live tail to change the period";

  return (
    <>
      <div className="toolbar">
        <SearchInput
          placeholder="app, app2..."
          value={app}
          onValueChange={setApp}
          onKeyDown={(e) => e.key === "Enter" && search()}
          width={240}
        />
        <SearchInput
          placeholder="grep message..."
          value={q}
          onValueChange={setQ}
          onKeyDown={(e) => e.key === "Enter" && search()}
          width={280}
        />
        <Button variant="solid" color="primary" size="md" onClick={() => search()}>
          Search
        </Button>
        {tailing ? (
          <Button variant="solid" color="danger" size="md" prefix={<Square size="md" />} onClick={stopTail}>
            Stop
          </Button>
        ) : (
          <Button variant="outlined" color="secondary" size="md" prefix={<Play size="md" />} onClick={() => startTail()}>
            Live tail
          </Button>
        )}
        <Button
          variant={showView ? "outlined" : "ghost"}
          color="secondary"
          size="md"
          prefix={<Settings2 size="md" />}
          onClick={() => setShowView((v) => !v)}
        >
          View
        </Button>
        {hasEntries && (
          <span className="toolbar-end">
            <Button variant="ghost" color="secondary" size="md" prefix={<Download size="md" />} onClick={() => exportAs("csv")}>
              CSV
            </Button>
            <Button variant="ghost" color="secondary" size="md" prefix={<Download size="md" />} onClick={() => exportAs("ndjson")}>
              NDJSON
            </Button>
          </span>
        )}
      </div>

      <div className="filter-row">
        <span className="sect">{"// period"}</span>
        <ToggleGroup
          type="single"
          variant="outlined"
          color="secondary"
          size="sm"
          value={period}
          onChange={(v) => v && setPeriod(v)}
          items={[...PERIODS.map((p) => ({ value: p.id, label: p.label })), { value: "custom", label: "custom" }].map(
            (item) => (tailing ? { ...item, disabled: true, disabledTooltip: tailBusy } : item),
          )}
        />
        {period === "custom" && (
          <span className="custom-range">
            <Input type="datetime-local" value={customFrom} onChange={(e) => setCustomFrom(e.target.value)} />
            <span className="muted">—</span>
            <Input type="datetime-local" value={customTo} onChange={(e) => setCustomTo(e.target.value)} />
          </span>
        )}
      </div>

      <div className="filter-row">
        <span className="sect">{"// levels"}</span>
        {LEVELS.map((name) => (
          <button
            key={name}
            type="button"
            className="level-toggle"
            aria-pressed={lvl.includes(name)}
            onClick={() => toggleLevel(name)}
          >
            <LevelBadge level={name} />
          </button>
        ))}
      </div>

      {chips.length > 0 && (
        <div className="filter-row">
          <span className="sect">{"// filters"}</span>
          {chips.map((c) => (
            <Pill.Closeable key={chipLabel(c)} onClose={() => removeChip(c)} closeAriaLabel="Remove filter">
              {chipLabel(c)}
            </Pill.Closeable>
          ))}
        </div>
      )}

      {showView && (
        <div className="panel view-settings">
          <span className="sect">{"// view"}</span>
          {(
            [
              ["showTime", "time"],
              ["showApp", "app"],
              ["showSrc", "src"],
              ["showFields", "fields"],
            ] as const
          ).map(([k, label]) => (
            <Checkbox
              key={k}
              color="primary"
              value={view[k]}
              onChange={(checked) => setView((v) => ({ ...v, [k]: checked }))}
            >
              {label}
            </Checkbox>
          ))}
          <ToggleGroup
            type="single"
            variant="outlined"
            color="secondary"
            size="sm"
            value={view.density}
            onChange={(v) => v && setView((cfg) => ({ ...cfg, density: v as Density }))}
            items={[
              { value: "full", label: "full" },
              { value: "compact", label: "compact" },
            ]}
          />
          <span className="sect">font</span>
          <Slider
            min={10}
            max={18}
            step={1}
            value={view.fontSize}
            onChange={(v) => setView((cfg) => ({ ...cfg, fontSize: Array.isArray(v) ? v[0] : v }))}
            style={{ width: 120 }}
          />
          <span className="sect">{view.fontSize}px</span>
        </div>
      )}

      {error && <Callout type="error" title={error} />}
      {tookMs !== null && (
        <div className="muted stat">
          {entries.length} entries in {tookMs} ms
        </div>
      )}
      {tailing && <div className="muted stat">live: {entries.length} entries</div>}
      {newCount > 0 && (
        <div className="new-entries">
          <Button
            variant="solid"
            color="primary"
            size="md"
            prefix={<ArrowUp size="md" />}
            onClick={() => {
              flushPaused();
              window.scrollTo({ top: 0 });
            }}
          >
            {`${newCount} new entries`}
          </Button>
        </div>
      )}

      <table
        className={view.density === "compact" ? "data-table logs compact" : "data-table logs"}
        style={{ "--log-font-size": `${view.fontSize}px` } as CSSProperties}
      >
        <thead>
          <tr>
            <th className="cell-level" aria-label="level" />
            {view.showTime && <th>time</th>}
            {view.showApp && <th>app</th>}
            {view.showSrc && <th>src</th>}
            <th>message</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((g) => (
            <GroupRows
              key={`${g.index}-${g.head.ts}`}
              group={g}
              open={expanded.has(g.index)}
              toggle={() => toggleGroup(g.index)}
              renderCells={renderCells}
              colCount={colCount}
            />
          ))}
        </tbody>
      </table>
      {!exhausted && !tailing && (
        <div ref={sentinelRef} className="muted empty">
          {loadingMore ? "loading older entries..." : "scroll for older entries"}
        </div>
      )}
      {entries.length === 0 && !error && <div className="muted empty">no entries</div>}
    </>
  );
}

type Group = { head: Entry; rest: Entry[]; index: number };

function GroupRows({
  group,
  open,
  toggle,
  renderCells,
  colCount,
}: {
  group: Group;
  open: boolean;
  toggle: () => void;
  renderCells: (e: Entry, extra?: ReactElement) => ReactElement;
  colCount: number;
}) {
  const { head, rest } = group;
  const badge =
    rest.length > 0 ? (
      <button type="button" className="group-toggle" onClick={toggle} title={open ? "collapse" : "expand"}>
        {open ? <Minus size="sm" /> : <Plus size="sm" />}
        {rest.length + 1}
      </button>
    ) : undefined;
  return (
    <>
      <tr className={`row ${head.lvl}`}>{renderCells(head, badge)}</tr>
      {open &&
        rest.map((e, i) => (
          <tr key={i} className={`row ${e.lvl} grouped`}>
            {renderCells(e)}
          </tr>
        ))}
      {!open && rest.length > 0 && (
        <tr className={`row ${head.lvl} grouped ellipsis`} onClick={toggle}>
          <td className="cell-level" data-level={head.lvl} />
          <td colSpan={colCount - 1} className="cell-muted">
            ⋯ {rest.length} more from {head.app}/{head.src}
          </td>
        </tr>
      )}
    </>
  );
}
