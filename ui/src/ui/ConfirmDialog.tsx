import { AlertDialog } from "@base-ui/react/alert-dialog";
import "./ConfirmDialog.css";

export default function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  danger,
  onConfirm,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmLabel?: string;
  danger?: boolean;
  onConfirm: () => void;
}) {
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="confirm-backdrop" />
        <AlertDialog.Popup className="confirm-popup">
          <AlertDialog.Title className="confirm-title">{title}</AlertDialog.Title>
          <AlertDialog.Description className="confirm-desc">
            {description}
          </AlertDialog.Description>
          <div className="confirm-actions">
            <AlertDialog.Close className="tail">Cancel</AlertDialog.Close>
            <AlertDialog.Close
              className={danger ? "danger" : ""}
              onClick={onConfirm}
            >
              {confirmLabel}
            </AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
