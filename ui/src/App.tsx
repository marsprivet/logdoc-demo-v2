import { useCallback, useEffect, useState } from "react";
import { Tabs } from "@ds/components/tabs";
import "./App.css";
import LogsView, { type LogsRequest } from "./LogsView";
import Topology from "./Topology";
import Rules from "./Rules";
import Access from "./Access";
import Login from "./Login";

type View = "logs" | "topology" | "rules" | "access";

// Who am I: open (no auth configured), key (bootstrap API key) or user.
type Me = { mode: "open" | "key" | "user"; login?: string; role: "admin" | "member" };

export default function App() {
  const [view, setView] = useState<View>("logs");
  const [logsRequest, setLogsRequest] = useState<LogsRequest | null>(null);
  const [me, setMe] = useState<Me | null | "anon">(null); // null = checking

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
  }, []);

  if (me === null) return <div className="wrap muted">loading…</div>;

  const admin = me !== "anon" && me.role === "admin";

  return (
    <div className="wrap">
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
        <Login onDone={checkAuth} />
      ) : (
        <>
          <div style={{ display: view === "logs" ? "block" : "none" }}>
            <LogsView request={logsRequest} />
          </div>
          {view === "topology" && <Topology onOpenLogs={openLogs} />}
          {view === "rules" && <Rules canEdit={admin} />}
          {view === "access" && <Access mode={me.mode} admin={admin} />}
        </>
      )}
    </div>
  );
}
