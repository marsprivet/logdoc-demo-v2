import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Select from "./Select";
import { figmaLinks } from "./figma-links";

const meta: Meta<typeof Select> = {
  title: "Controls/Select",
  component: Select,
  parameters: { design: { type: "figma", url: figmaLinks.select } },
};
export default meta;
type Story = StoryObj<typeof Select>;

const roleOptions = [
  { value: "member", label: "member" },
  { value: "admin", label: "admin" },
];

export const RolePicker: Story = {
  render: () => {
    const [value, setValue] = useState("member");
    return <Select value={value} onValueChange={setValue} options={roleOptions} />;
  },
};

export const Disabled: Story = {
  render: () => <Select value="member" onValueChange={() => {}} options={roleOptions} disabled />,
};
