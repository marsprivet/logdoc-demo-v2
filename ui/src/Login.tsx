import { useState } from "react";
import { Button } from "@ds/components/button";
import { Callout } from "@ds/components/callout";
import { Input } from "@ds/components/input";
import "./Login.css";

// Login screen: a user session (login + password → JWT) or a raw API key /
// personal token. Whatever succeeds lands in localStorage("logdoc_api_key")
// — every request sends it the same way regardless of kind.

export default function Login({ onDone }: { onDone: () => void }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState<string | null>(null);

  const submitUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login, password }),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok) throw new Error(body?.error ?? `HTTP ${res.status}`);
      localStorage.setItem("logdoc_api_key", body.token);
      onDone();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const submitKey = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/v1/auth/me", { headers: { "X-API-Key": apiKey } });
      if (!res.ok) throw new Error(res.status === 401 ? "invalid key or token" : `HTTP ${res.status}`);
      localStorage.setItem("logdoc_api_key", apiKey);
      onDone();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  return (
    <div className="login">
      <form className="panel login-card" onSubmit={submitUser}>
        <div className="sect">// sign in</div>
        <Input
          placeholder="login"
          value={login}
          autoFocus
          autoComplete="username"
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="solid"
          color="primary"
          size="md"
          disabled={!login || !password}
          disabledTooltip="Enter login and password"
        >
          Sign in
        </Button>
      </form>
      <form className="panel login-card" onSubmit={submitKey}>
        <div className="sect">// or use an API key / personal token</div>
        <Input
          placeholder="API key or ldt_… token"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          size="md"
          disabled={!apiKey}
          disabledTooltip="Paste an API key or token"
        >
          Use key
        </Button>
      </form>
      {error && <Callout type="error" title={error} />}
    </div>
  );
}
