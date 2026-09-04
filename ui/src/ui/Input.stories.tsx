import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@base-ui/react/input";
import { figmaLinks } from "./figma-links";

const meta: Meta<typeof Input> = {
  title: "Controls/Input",
  component: Input,
  parameters: { design: { type: "figma", url: figmaLinks.input } },
  decorators: [
    (Story) => (
      <div className="filters" style={{ maxWidth: 260 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: "$ app, app2..." },
};

export const WithValue: Story = {
  args: { defaultValue: "checkout" },
};

export const Password: Story = {
  args: { type: "password", placeholder: "password (min 8; empty keeps current)" },
};

export const Number: Story = {
  args: { type: "number", placeholder: "threshold" },
};
