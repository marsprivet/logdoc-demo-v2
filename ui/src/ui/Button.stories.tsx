import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@base-ui/react/button";
import { figmaLinks } from "./figma-links";

const meta: Meta<typeof Button> = {
  title: "Controls/Button",
  component: Button,
  parameters: { design: { type: "figma", url: figmaLinks.button } },
  args: { children: "Search" },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { children: "▶ Live tail", className: "tail" },
};

export const Active: Story = {
  args: { children: "■ Stop", className: "tail on" },
};

export const Disabled: Story = {
  args: { children: "⇩ CSV", disabled: true },
};

export const Danger: Story = {
  args: { children: "Delete", className: "danger" },
};
