import type { Meta, StoryObj } from "@storybook/react-vite";
import { figmaLinks } from "./figma-links";

const meta: Meta = {
  title: "Controls/Table",
  parameters: { design: { type: "figma", url: figmaLinks.table } },
};
export default meta;
type Story = StoryObj;

const rows: { ts: string; lvl: string; app: string; msg: string }[] = [
  { ts: "15:33:13", lvl: "INFO", app: "auth", msg: "user logged in" },
  { ts: "15:33:13", lvl: "WARN", app: "checkout", msg: "cache miss" },
  { ts: "15:33:13", lvl: "ERROR", app: "billing", msg: "connection pool exhausted" },
  { ts: "15:34:38", lvl: "SEVERE", app: "infra", msg: "disk usage critical" },
];

export const LogRows: Story = {
  render: () => (
    <table>
      <thead>
        <tr>
          <th>time</th>
          <th>lvl</th>
          <th>app</th>
          <th>message</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className={`row ${r.lvl}`}>
            <td className="ts">{r.ts}</td>
            <td>
              <span className={`lv ${r.lvl}`}>{r.lvl}</span>
            </td>
            <td className="app">{r.app}</td>
            <td className="msg">{r.msg}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};

export const Compact: Story = {
  render: () => (
    <table className="compact">
      <thead>
        <tr>
          <th>time</th>
          <th>lvl</th>
          <th>app</th>
          <th>message</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className={`row ${r.lvl}`}>
            <td className="ts">{r.ts}</td>
            <td>
              <span className={`lv ${r.lvl}`}>{r.lvl}</span>
            </td>
            <td className="app">{r.app}</td>
            <td className="msg">{r.msg}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
