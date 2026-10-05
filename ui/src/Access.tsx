import { useCallback, useEffect, useState } from "react";
import { Button } from "@ds/components/button";
import { Callout } from "@ds/components/callout";
import { ConfirmDialog } from "@ds/components/dialog";
import { Input } from "@ds/components/input";
import { SelectSimple } from "@ds/components/select";
import { KeyRound, UserPlus } from "@ds/icons";
import "./Access.css";

const ROLE_ITEMS = [
  { value: "member", label: "member" },
  { value: "admin", label: "admin" },
];

// Access screen: personal API tokens of the signed-in user, plus user
// management for admins. Bootstrap-key sessions see only the users section
// (tokens belong to user accounts).

type User = { login: string; role: string; created_at: string };
type Token = { id: number; name: string; created_at: string };

function authHeaders(): Record<string, string> {
  const key = localStorage.getItem("logdoc_api_key");
  return key ? { "X-API-Key": key } : {};
}

async function api(path: string, init?: RequestInit): Promise<any> {
  const res = await fetch(path, {
    ...init,
    headers: { "Content-Type": "application/json", ...authHeaders(), ...init?.headers },
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) throw new Error(body?.error ?? `HTTP ${res.status}`);
  return body;
}

export default function Access({ mode, admin }: { mode: string; admin: boolean }) {
  return (
    <div className="access">
      {mode === "user" && <Tokens />}
      {mode === "key" && (
        <p className="muted">
          You are signed in with the bootstrap API key. Personal tokens belong to user
          accounts — create a user below and sign in to issue one.
        </p>
      )}
      {admin && <Users />}
    </div>
  );
}

function Tokens() {
  const [tokens, setTokens] = useState<Token[] | null>(null);
  const [name, setName] = useState("");
  const [fresh, setFresh] = useState<string | null>(null); // shown exactly once
  const [error, setError] = useState<string | null>(null);
  const [confirmRevoke, setConfirmRevoke] = useState<Token | null>(null);

  const load = useCallback(async () => {
    try {
      setTokens((await api("/api/v1/auth/tokens")).tokens);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }, []);
  useEffect(() => {
    load();
  }, [load]);

  const create = async () => {
    try {
      const out = await api("/api/v1/auth/tokens", {
        method: "POST",
        body: JSON.stringify({ name: name.trim() }),
      });
      setFresh(out.token);
      setName("");
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const revoke = async (t: Token) => {
    try {
      await api(`/api/v1/auth/tokens?id=${t.id}`, { method: "DELETE" });
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  return (
    <section>
      <div className="sect">// personal API tokens — full access with your role, revocable</div>
      {error && <Callout type="error" title={error} />}
      {fresh && (
        <Callout type="success" title="Copy the token now — it is not shown again">
          <div className="token-fresh">
            <code>{fresh}</code>
            <span className="text-action" onClick={() => setFresh(null)}>
              dismiss
            </span>
          </div>
        </Callout>
      )}
      <div className="toolbar">
        <Input
          placeholder="token name (e.g. ci, laptop)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          containerStyle={{ width: 260 }}
        />
        <Button variant="solid" color="primary" size="md" prefix={<KeyRound size="md" />} onClick={create}>
          Create token
        </Button>
      </div>
      {tokens && tokens.length > 0 && (
        <table className="data-table">
          <thead>
            <tr>
              <th>name</th>
              <th>created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((t) => (
              <tr key={t.id}>
                <td className="cell-mono">{t.name}</td>
                <td className="cell-ts">{new Date(t.created_at).toLocaleString()}</td>
                <td className="cell-actions">
                  <span className="text-action" onClick={() => setConfirmRevoke(t)}>
                    revoke
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {tokens && tokens.length === 0 && <p className="muted">No tokens yet.</p>}
      <ConfirmDialog
        open={confirmRevoke !== null}
        onOpenChange={(open) => !open && setConfirmRevoke(null)}
        title="Revoke token"
        confirmText="Revoke"
        confirmColor="danger"
        onConfirm={() => {
          if (confirmRevoke) void revoke(confirmRevoke);
        }}
      >
        {confirmRevoke
          ? `Revoke "${confirmRevoke.name}"? Clients using it stop working immediately.`
          : ""}
      </ConfirmDialog>
    </section>
  );
}

function Users() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("member");
  const [error, setError] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<User | null>(null);

  const load = useCallback(async () => {
    try {
      setUsers((await api("/api/v1/users")).users);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }, []);
  useEffect(() => {
    load();
  }, [load]);

  const save = async () => {
    try {
      await api("/api/v1/users", {
        method: "POST",
        body: JSON.stringify({ login: login.trim(), password, role }),
      });
      setLogin("");
      setPassword("");
      setRole("member");
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const setUserRole = async (u: User, newRole: string) => {
    try {
      await api("/api/v1/users", {
        method: "POST",
        body: JSON.stringify({ login: u.login, password: "", role: newRole }),
      });
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const remove = async (u: User) => {
    try {
      await api(`/api/v1/users?login=${encodeURIComponent(u.login)}`, { method: "DELETE" });
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  return (
    <section>
      <div className="sect">
        // users — member: search, tail, topology · admin: + rules and users
      </div>
      {error && <Callout type="error" title={error} />}
      <div className="toolbar">
        <Input
          placeholder="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          containerStyle={{ width: 180 }}
        />
        <Input
          placeholder="password (min 8; empty keeps current)"
          type="password"
          value={password}
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
          containerStyle={{ width: 300 }}
        />
        <SelectSimple
          value={role}
          onChange={(v) => setRole(v as string)}
          items={ROLE_ITEMS}
          style={{ width: 130 }}
        />
        <Button
          variant="solid"
          color="primary"
          size="md"
          prefix={<UserPlus size="md" />}
          onClick={save}
          disabled={!login.trim()}
          disabledTooltip="Enter a login"
        >
          Save user
        </Button>
      </div>
      {users && users.length > 0 && (
        <table className="data-table">
          <thead>
            <tr>
              <th>login</th>
              <th>role</th>
              <th>created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.login}>
                <td className="cell-mono">{u.login}</td>
                <td>
                  <SelectSimple
                    value={u.role}
                    onChange={(v) => setUserRole(u, v as string)}
                    items={ROLE_ITEMS}
                    style={{ width: 130 }}
                  />
                </td>
                <td className="cell-ts">{new Date(u.created_at).toLocaleString()}</td>
                <td className="cell-actions">
                  <span className="text-action" onClick={() => setConfirmDelete(u)}>
                    delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <ConfirmDialog
        open={confirmDelete !== null}
        onOpenChange={(open) => !open && setConfirmDelete(null)}
        title="Delete user"
        confirmText="Delete"
        confirmColor="danger"
        onConfirm={() => {
          if (confirmDelete) void remove(confirmDelete);
        }}
      >
        {confirmDelete ? `Delete "${confirmDelete.login}" and revoke their tokens?` : ""}
      </ConfirmDialog>
      {users && users.length === 0 && (
        <p className="muted">
          No users yet — everyone with the API key is an admin. Create accounts to give
          teammates their own credentials and roles.
        </p>
      )}
    </section>
  );
}
