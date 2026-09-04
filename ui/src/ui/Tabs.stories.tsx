import type { Meta, StoryObj } from "@storybook/react-vite";
import { figmaLinks } from "./figma-links";
import "../App.css"; // .tabs / .tab are App's — .winbtn itself is in tokens.css

const meta: Meta = {
  title: "Controls/Tabs & Window",
  parameters: { design: { type: "figma", url: figmaLinks.tabs } },
};
export default meta;
type Story = StoryObj;

export const PageTabs: Story = {
  render: () => (
    <span className="tabs">
      <span className="tab on">Logs</span>
      <span className="tab">Topology</span>
      <span className="tab">Rules</span>
      <span className="tab">Access</span>
    </span>
  ),
};

export const WindowButtons: Story = {
  render: () => (
    <span style={{ display: "flex", gap: 4 }}>
      <span className="winbtn">15m</span>
      <span className="winbtn on">1h</span>
      <span className="winbtn">24h</span>
    </span>
  ),
};
