import { useCallback, useEffect, useState } from "react";
import { Badge } from "@ds/components/badge";
import { Button } from "@ds/components/button";
import { Callout } from "@ds/components/callout";
import { Checkbox } from "@ds/components/checkbox";
import { ConfirmDialog } from "@ds/components/dialog";
import { Input } from "@ds/components/input";
import { SelectSimple } from "@ds/components/select";
import { Plus } from "@ds/icons";
import "./Rules.css";

// Notification rules screen: GET/POST/DELETE /api/v1/notify/rules.
// Config-file rules are listed read-only; UI rules are editable and persist
// server-side in the rules file.

type Cond = {
  contains?: string;
  starts?: string;
  ends?: string;
  equals?: string;
  case_sensitive?: boolean;
};

type Match = {
  and?: Match[];
  or?: Match[];
  app?: string;
  src?: string;
  pid?: string;
  lvl?: string;
  msg?: Cond;
  regex?: string;
  fields?: Record<string, Cond>;
};

type ApiRule = {
  name: string;
  type: string;
  app?: string;
  threshold?: number;
  window?: string;
  cooldown?: string;
  channels?: string[];
  match?: Match;
  max_fires?: number;
  source: string; // config | ui
  fires: number;
  last_fired?: string;
  disabled: boolean;
};

type ApiRules = { enabled: boolean; channels: string[]; rules: ApiRule[] };

type Form = {
  name: string;
  type: string;
  app: string;
  threshold: string;
  window: string;
  cooldown: string;
  channels: string[];
  maxFires: string;
  matchText: string;
};

const emptyForm: Form = {
  name: "",
  type: "error_threshold",
  app: "",
  threshold: "",
  window: "",
  cooldown: "",
  channels: [],
  maxFires: "",
  matchText: "",
};

const MATCH_PLACEHOLDER = `optional composite condition (JSON), e.g.
{"app": "billing",
 "or": [{"lvl": "ERROR"}, {"msg": {"contains": "pool exhausted"}}]}`;

function authHeaders(): Record<string, string> {
  const key = localStorage.getItem("logdoc_api_key");
  return key ? { "X-API-Key": key } : {};
}

function matchSummary(m: Match): string {
  const parts: string[] = [];
  if (m.app) parts.push(`app=${m.app}`);
  if (m.src) parts.push(`src=${m.src}`);
  if (m.pid) parts.push(`pid=${m.pid}`);
  if (m.lvl) parts.push(`lvl≥${m.lvl}`);
  if (m.msg) parts.push(`msg ${condSummary(m.msg)}`);
  if (m.regex) parts.push(`msg~/${m.regex}/`);
  if (m.fields) for (const [k, c] of Object.entries(m.fields)) parts.push(`${k} ${condSummary(c)}`);
  if (m.and) parts.push(`(${m.and.map(matchSummary).join(" AND ")})`);
  if (m.or) parts.push(`(${m.or.map(matchSummary).join(" OR ")})`);
  return parts.join(" AND ");
}

function condSummary(c: Cond): string {
  if (c.contains !== undefined) return `contains "${c.contains}"`;
  if (c.starts !== undefined) return `starts "${c.starts}"`;
  if (c.ends !== undefined) return `ends "${c.ends}"`;
  if (c.equals !== undefined) return `= "${c.equals}"`;
  return "?";
}

function ruleToForm(r: ApiRule): Form {
  return {
    name: r.name,
    type: r.type,
    app: r.app ?? "",
    threshold: r.threshold ? String(r.threshold) : "",
    window: r.window ?? "",
    cooldown: r.cooldown ?? "",
    channels: r.channels ?? [],
    maxFires: r.max_fires === undefined ? "" : String(r.max_fires),
    matchText: r.match ? JSON.stringify(r.match, null, 1) : "",
  };
}

export default function Rules({ canEdit = true }: { canEdit?: boolean }) {
  const [data, setData] = useState<ApiRules | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [form, setForm] = useState<Form | null>(null); // null = form hidden
  const [editing, setEditing] = useState<string | null>(null); // original name when editing
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/v1/notify/rules", { headers: authHeaders() });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setData(await res.json());
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }, []);

  useEffect(() => {
    load();
    const t = setInterval(load, 10000); // live fire counters
    return () => clearInterval(t);
  }, [load]);

  const save = async () => {
    if (!form) return;
    if (!form.name.trim()) {
      setFormError("name is required");
      return;
    }
    const body: Record<string, unknown> = { name: form.name.trim(), type: form.type };
    if (form.app.trim()) body.app = form.app.trim();
    if (form.threshold.trim()) body.threshold = Number(form.threshold);
    if (form.window.trim()) body.window = form.window.trim();
    if (form.cooldown.trim()) body.cooldown = form.cooldown.trim();
    if (form.channels.length) body.channels = form.channels;
    if (form.maxFires.trim()) body.max_fires = Number(form.maxFires);
    if (form.matchText.trim()) {
      try {
        body.match = JSON.parse(form.matchText);
      } catch {
        setFormError("match is not valid JSON");
        return;
      }
    }
    try {
      const res = await fetch("/api/v1/notify/rules", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const msg = await res.json().catch(() => null);
        throw new Error(msg?.error ?? `HTTP ${res.status}`);
      }
      setForm(null);
      setEditing(null);
      setFormError(null);
      await load();
    } catch (e) {
      setFormError(e instanceof Error ? e.message : String(e));
    }
  };

  const remove = async (name: string) => {
    try {
      const res = await fetch(`/api/v1/notify/rules?name=${encodeURIComponent(name)}`, {
        method: "DELETE",
        headers: authHeaders(),
      });
      if (!res.ok) {
        const msg = await res.json().catch(() => null);
        throw new Error(msg?.error ?? `HTTP ${res.status}`);
      }
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const toggleChannel = (name: string) => {
    if (!form) return;
    setForm({
      ...form,
      channels: form.channels.includes(name)
        ? form.channels.filter((c) => c !== name)
        : [...form.channels, name],
    });
  };

  if (!data) {
    return error ? <Callout type="error" title={error} /> : <div className="muted">loading…</div>;
  }

  if (!data.enabled) {
    return (
      <div className="empty">
        <p className="muted">
          Notifications are disabled: no channel is configured. Add <b>telegram</b>,{" "}
          <b>webhook</b>, <b>email</b> or <b>kafka</b> to the <span className="accent mono">notify</span>{" "}
          section of the config and restart — then rules can be created right here.
        </p>
      </div>
    );
  }

  const f = form; // narrow for JSX below

  return (
    <div className="rules">
      {error && <Callout type="error" title={error} />}

      <div className="rules-bar">
        <span className="sect">
          // channels: {data.channels.join(", ")} · rules fire on the live stream
        </span>
        {!f && canEdit && (
          <Button
            variant="solid"
            color="primary"
            size="md"
            prefix={<Plus size="md" />}
            onClick={() => {
              setForm({ ...emptyForm });
              setEditing(null);
              setFormError(null);
            }}
          >
            New rule
          </Button>
        )}
      </div>

      {f && (
        <div className="panel rules-form">
          <div className="sect">// {editing ? `edit rule: ${editing}` : "new rule"}</div>
          <div className="toolbar">
            <Input
              placeholder="name"
              value={f.name}
              disabled={editing !== null}
              onChange={(e) => setForm({ ...f, name: e.target.value })}
            />
            <SelectSimple
              value={f.type}
              onChange={(v) => setForm({ ...f, type: v as string })}
              items={[
                { value: "error_threshold", label: "error_threshold" },
                { value: "silence", label: "silence" },
              ]}
              style={{ width: 170 }}
            />
            <Input
              placeholder={f.type === "silence" ? "app (required)" : "app (optional)"}
              value={f.app}
              onChange={(e) => setForm({ ...f, app: e.target.value })}
            />
            {f.type === "error_threshold" && (
              <Input
                type="number"
                placeholder="threshold"
                title="entries in the window before the rule fires (default 10)"
                value={f.threshold}
                onChange={(e) => setForm({ ...f, threshold: e.target.value })}
              />
            )}
            <Input
              containerStyle={{ width: 110 }}
              placeholder="window"
              title="e.g. 1m, 90s (defaults: 1m / 5m for silence)"
              value={f.window}
              onChange={(e) => setForm({ ...f, window: e.target.value })}
            />
            <Input
              containerStyle={{ width: 110 }}
              placeholder="cooldown"
              title="minimum pause between alerts (default 5m)"
              value={f.cooldown}
              onChange={(e) => setForm({ ...f, cooldown: e.target.value })}
            />
            <Input
              type="number"
              placeholder="max fires"
              title="retire the rule after N alerts; 0 = fire once; empty = unlimited"
              value={f.maxFires}
              onChange={(e) => setForm({ ...f, maxFires: e.target.value })}
            />
          </div>
          <div className="rules-channels">
            <span className="muted">channels (empty = all):</span>
            {data.channels.map((c) => (
              <Checkbox key={c} color="primary" value={f.channels.includes(c)} onChange={() => toggleChannel(c)}>
                {c}
              </Checkbox>
            ))}
          </div>
          {f.type === "error_threshold" && (
            <textarea
              className="textarea"
              placeholder={MATCH_PLACEHOLDER}
              value={f.matchText}
              onChange={(e) => setForm({ ...f, matchText: e.target.value })}
              spellCheck={false}
            />
          )}
          {formError && <Callout type="error" title={formError} />}
          <div className="rules-actions">
            <Button variant="solid" color="primary" size="md" onClick={save}>
              {editing ? "Save" : "Create"}
            </Button>
            <Button
              variant="ghost"
              color="secondary"
              size="md"
              onClick={() => {
                setForm(null);
                setEditing(null);
                setFormError(null);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {data.rules.length === 0 ? (
        <div className="empty">
          <p className="muted">
            No rules yet. Create one — for example, an <b>error_threshold</b> on a noisy app, or a{" "}
            <b>silence</b> watch on a service that must never go quiet.
          </p>
        </div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>rule</th>
              <th>type</th>
              <th>condition</th>
              <th>window</th>
              <th>cooldown</th>
              <th>channels</th>
              <th>fires</th>
              <th>last fired</th>
              <th>source</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.rules.map((r) => (
              <tr key={r.name} className={r.disabled ? "rules-off" : undefined}>
                <td className="cell-mono">
                  {r.name}
                  {r.disabled && (
                    <span className="tag">
                      <Badge variant="outlined" color="secondary">
                        retired
                      </Badge>
                    </span>
                  )}
                </td>
                <td className="cell-muted">{r.type}</td>
                <td className="cell-mono">
                  {r.match
                    ? matchSummary(r.match)
                    : r.type === "silence"
                      ? `${r.app} stops logging`
                      : `${r.app ? `app=${r.app} AND ` : ""}lvl≥ERROR × ${r.threshold}`}
                  {r.match && r.threshold ? ` × ${r.threshold}` : ""}
                  {r.max_fires !== undefined && (
                    <span className="tag">
                      <Badge variant="outlined" color="secondary">
                        {r.max_fires === 0 ? "fires once" : `max ${r.max_fires} fires`}
                      </Badge>
                    </span>
                  )}
                </td>
                <td className="cell-muted">{r.window}</td>
                <td className="cell-muted">{r.cooldown}</td>
                <td className="cell-muted">{r.channels?.length ? r.channels.join(", ") : "all"}</td>
                <td className="cell-muted">{r.fires}</td>
                <td className="cell-ts">
                  {r.last_fired ? new Date(r.last_fired).toLocaleString() : "—"}
                </td>
                <td className="cell-muted">{r.source}</td>
                <td className="cell-actions">
                  {!canEdit ? (
                    <span className="cell-muted" title="admin role required">
                      read-only
                    </span>
                  ) : r.source === "ui" ? (
                    <>
                      <span
                        className="text-action"
                        onClick={() => {
                          setForm(ruleToForm(r));
                          setEditing(r.name);
                          setFormError(null);
                        }}
                      >
                        edit
                      </span>
                      <span className="text-action" onClick={() => setConfirmDelete(r.name)}>
                        delete
                      </span>
                    </>
                  ) : (
                    <span className="cell-muted" title="defined in the config file">
                      read-only
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <ConfirmDialog
        open={confirmDelete !== null}
        onOpenChange={(open) => !open && setConfirmDelete(null)}
        title="Delete rule"
        confirmText="Delete"
        confirmColor="danger"
        onConfirm={() => {
          if (confirmDelete) void remove(confirmDelete);
        }}
      >
        {confirmDelete ? `Delete "${confirmDelete}"?` : ""}
      </ConfirmDialog>
    </div>
  );
}
