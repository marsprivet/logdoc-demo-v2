import { useCallback, useEffect, useState } from "react";
import { Tabs } from "@ds/components/tabs";
import "./App.css";
import LogsView, { type LogsRequest } from "./LogsView";
import Topology from "./Topology";
import Rules from "./Rules";
import Access from "./Access";
import Login from "./Login";

type View = "logs" | "topology" | "rules" | "access";

// Snapshot viewer: the shared HTML export carries its data in __SNAP__.
// The page shows ONLY the topology — no logs, no rules, no auth.
const SNAP =
  typeof window !== "undefined"
    ? (window as unknown as { __SNAP__?: { title?: string } }).__SNAP__
    : undefined;

// Who am I: open (no auth configured), key (bootstrap API key) or user.
type Me = { mode: "open" | "key" | "user"; login?: string; role: "admin" | "member" };

// The view lives in the URL (/topology, /rules, /access; / = logs), so
// refresh and back/forward keep the tab. The server serves index.html for
// every unknown path, no router library needed.
function pathToView(pathname: string): View {
  // Snapshot files (file://) carry the view in the hash instead of the path.
  const h = location.hash.slice(1);
  if (h === "topology" || h === "rules" || h === "access" || h === "logs") return h;
  if (pathname.startsWith("/topology")) return "topology";
  if (pathname.startsWith("/rules")) return "rules";
  if (pathname.startsWith("/access")) return "access";
  return "logs";
}

export default function App() {
  const [view, setViewState] = useState<View>(() => pathToView(location.pathname));
  const [logsRequest, setLogsRequest] = useState<LogsRequest | null>(null);
  const [me, setMe] = useState<Me | null | "anon">(null); // null = checking

  const setView = useCallback((v: View) => {
    setViewState(v);
    const path = v === "logs" ? "/" : `/${v}`;
    if (location.pathname !== path) history.pushState(null, "", path);
  }, []);

  useEffect(() => {
    const onPop = () => setViewState(pathToView(location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const checkAuth = useCallback(async () => {
    try {
      const key = localStorage.getItem("logdoc_api_key");
      const res = await fetch("/api/v1/auth/me", {
        headers: key ? { "X-API-Key": key } : {},
      });
      if (res.status === 401) {
        setMe("anon");
        return;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setMe(await res.json());
    } catch {
      setMe("anon");
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const logout = () => {
    localStorage.removeItem("logdoc_api_key");
    setView("logs");
    setMe("anon");
  };

  // Topology → "show me the logs of this service / edge".
  const openLogs = useCallback((app: string, tail: boolean) => {
    setLogsRequest((prev) => ({ app, tail, id: (prev?.id ?? 0) + 1 }));
    setView("logs");
  }, [setView]);

  if (SNAP) {
    return (
      <>
        <header>
          <img src="/logo.svg" alt="LogDoc" className="logo" />
          {SNAP.title && <span className="viewer-proj">{SNAP.title}</span>}
          <a
            className="text-action viewer-promo"
            href="https://logdoc.org?utm_source=snapshot"
            target="_blank"
            rel="noreferrer"
          >
            built with LogDoc → logdoc.org
          </a>
        </header>
        <div className="topo-full">
          <Topology onOpenLogs={() => {}} canEdit={false} />
        </div>
        <a
          className="viewer-badge"
          href="https://logdoc.org?utm_source=snapshot"
          target="_blank"
          rel="noreferrer"
        >
          A living map of your services — from logs, traces, traffic &amp; repos · LogDoc
        </a>
      </>
    );
  }

  if (me === null) return <div className="wrap muted">loading…</div>;

  const admin = me !== "anon" && me.role === "admin";

  return (
    <>
      <header>
        <img src="/logo.svg" alt="LogDoc" className="logo" />
        {(me === "anon" || me.mode === "open") && <span className="app-version">v2</span>}
        {/* Panels render below (Logs stays mounted to keep its state), so items carry no content. */}
        <Tabs
          variant="primary"
          orientation="horizontal"
          alignment="start"
          value={view}
          onChange={(key) => setView(key as View)}
          items={[
            { key: "logs", label: "Logs", children: null },
            { key: "topology", label: "Topology", children: null },
            { key: "rules", label: "Rules", children: null },
            ...(me !== "anon" && me.mode !== "open" ? [{ key: "access", label: "Access", children: null }] : []),
          ]}
        />
        {me !== "anon" && me.mode !== "open" && (
          <span className="muted header-user">
            {me.mode === "key" ? "api key" : me.login} · {me.role} ·{" "}
            <span className="text-action" onClick={logout}>
              logout
            </span>
          </span>
        )}
      </header>

      {me === "anon" ? (
        <div className="wrap">
          <Login onDone={checkAuth} />
        </div>
      ) : (
        <>
          <div className="wrap" style={{ display: view === "logs" ? "block" : "none" }}>
            <LogsView request={logsRequest} />
          </div>
          {/* The map escapes .wrap: full viewport width and height. */}
          {view === "topology" && (
            <div className="topo-full">
              <Topology onOpenLogs={openLogs} canEdit={admin} />
            </div>
          )}
          {view === "rules" && (
            <div className="wrap">
              <Rules canEdit={admin} />
            </div>
          )}
          {view === "access" && (
            <div className="wrap">
              <Access mode={me.mode} admin={admin} />
            </div>
          )}
        </>
      )}
    </>
  );
}
