import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@base-ui/react/button";
import ConfirmDialog from "./ConfirmDialog";
import { figmaLinks } from "./figma-links";

const meta: Meta<typeof ConfirmDialog> = {
  title: "Controls/ConfirmDialog",
  component: ConfirmDialog,
  parameters: { design: { type: "figma", url: figmaLinks.confirmDialog } },
};
export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

export const DeleteUser: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button className="danger" onClick={() => setOpen(true)}>
          delete
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Delete user"
          description='Delete "alice" and revoke their tokens?'
          confirmLabel="Delete"
          danger
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};

export const RevokeToken: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button className="danger" onClick={() => setOpen(true)}>
          revoke
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Revoke token"
          description='Revoke "laptop"? Clients using it stop working immediately.'
          confirmLabel="Revoke"
          danger
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};
