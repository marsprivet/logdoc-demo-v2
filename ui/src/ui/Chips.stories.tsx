import type { Meta, StoryObj } from "@storybook/react-vite";
import { figmaLinks } from "./figma-links";
import "../LogsView.css"; // .chip / .chip-x / .field / .grp are LogsView's

const meta: Meta = {
  title: "Controls/Chips",
  parameters: { design: { type: "figma", url: figmaLinks.chips } },
};
export default meta;
type Story = StoryObj;

export const FilterChip: Story = {
  render: () => (
    <span className="chip">
      app=billing<button className="chip-x">×</button>
    </span>
  ),
};

export const FieldPill: Story = {
  render: () => <span className="field">duration_ms=120</span>,
};

export const GroupPill: Story = {
  render: () => <span className="grp">+ 2</span>,
};

export const AllTogether: Story = {
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
