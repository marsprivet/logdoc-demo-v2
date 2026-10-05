import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import LevelBadge, { LEVELS } from "./LevelBadge";
import SearchInput from "./SearchInput";
import { figmaLinks } from "./figma-links";
import "../global.css";

// LogDoc's own components, built on the design system in src/ds.
const meta: Meta = {
  title: "LogDoc/Components",
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj;

export const LevelBadges: Story = {
  parameters: { design: { type: "figma", url: figmaLinks.levelBadge } },
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {LEVELS.map((l) => (
        <LevelBadge key={l} level={l} />
      ))}
    </div>
  ),
};

export const Search: Story = {
  parameters: { design: { type: "figma", url: figmaLinks.searchInput } },
  render: function Render() {
    const [value, setValue] = useState("billing");
    return <SearchInput value={value} onValueChange={setValue} placeholder="app, app2..." width={260} />;
  },
};
