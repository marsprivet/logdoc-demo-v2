import type { Meta, StoryObj } from "@storybook/react-vite";
import { figmaLinks } from "./figma-links";

const meta: Meta = {
  title: "Foundations",
  parameters: { design: { type: "figma", url: figmaLinks.foundations } },
};
export default meta;
type Story = StoryObj;

const tokens: [string, string, string][] = [
  ["--bg", "#16151a", "Page background"],
  ["--surface", "#292930", "Cards, panels, badge fills"],
  ["--input", "#37373f", "Input / select fill"],
  ["--deep", "#1d1d22", "Recessed wells"],
  ["--hover", "#242429", "Hover / highlighted row"],
  ["--accent", "#e35b28", "Primary actions, brand"],
  ["--text", "#ffffff", "Primary text"],
  ["--muted", "#7e7e7e", "Secondary text, placeholders"],
  ["--border", "#37373f", "Hairlines"],
  ["--border-strong", "#6a6a6a", "Control borders"],
];

const levels = ["DEBUG", "INFO", "LOG", "WARN", "ERROR", "SEVERE", "PANIC"];

export const Colors: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr))", gap: 12 }}>
      {tokens.map(([name, hex, use]) => (
        <div key={name} style={{ border: "1px solid var(--border)", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ height: 48, background: hex }} />
          <div style={{ padding: "8px 10px" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 12, fontWeight: 700 }}>{name}</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)" }}>{hex}</div>
            <div style={{ fontSize: 11, color: "var(--muted)" }}>{use}</div>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ fontFamily: '"Golos Text"', fontWeight: 400, fontSize: 20 }}>Golos Text 400 — Structured-log-first platform</div>
      <div style={{ fontFamily: '"Golos Text"', fontWeight: 500, fontSize: 20 }}>Golos Text 500 — Structured-log-first platform</div>
      <div style={{ fontFamily: '"Golos Text"', fontWeight: 600, fontSize: 20 }}>Golos Text 600 — Structured-log-first platform</div>
      <div style={{ fontFamily: "var(--mono)", fontWeight: 400, fontSize: 18 }}>Hack Regular — payment failed: card declined</div>
      <div style={{ fontFamily: "var(--mono)", fontWeight: 700, fontSize: 18 }}>Hack Bold — connection pool exhausted</div>
    </div>
  ),
};

export const LevelBadges: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      {levels.map((lv) => (
        <span key={lv} className={`lv ${lv}`}>
          {lv}
        </span>
      ))}
    </div>
  ),
};

export const ChipsAndPills: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <span className="chip">
        app=billing<button className="chip-x">×</button>
      </span>
      <span className="field">duration_ms=120</span>
      <span className="grp">+ 2</span>
    </div>
  ),
};

export const TabsAndWindow: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <span className="tabs">
        <span className="tab on">Logs</span>
        <span className="tab">Topology</span>
        <span className="tab">Rules</span>
        <span className="tab">Access</span>
      </span>
      <span style={{ display: "flex", gap: 4 }}>
        <span className="winbtn">15m</span>
        <span className="winbtn on">1h</span>
        <span className="winbtn">24h</span>
      </span>
    </div>
  ),
};
