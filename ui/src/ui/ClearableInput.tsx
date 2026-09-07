import type { ComponentPropsWithoutRef } from "react";
import { Input } from "@base-ui/react/input";
import "./ClearableInput.css";

export default function ClearableInput({
  value,
  onValueChange,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Input>, "value" | "onChange"> & {
  value: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <span className="clearable-input">
      <Input {...props} value={value} onChange={(e) => onValueChange(e.target.value)} />
      {value && (
        <button
          type="button"
          className="clearable-input-x"
          onClick={() => onValueChange("")}
          aria-label="Clear"
        >
          ×
        </button>
      )}
    </span>
  );
}
