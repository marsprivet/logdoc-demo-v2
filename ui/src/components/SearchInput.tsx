import type { KeyboardEvent } from "react";
import { Button } from "@ds/components/button";
import { Input } from "@ds/components/input";
import { Search, X } from "@ds/icons";

/** A ds Input with a search glyph and an inline clear button once it has a value. */
export default function SearchInput({
  value,
  onValueChange,
  placeholder,
  onKeyDown,
  width,
}: {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  width?: number | string;
}) {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChange={(e) => onValueChange(e.target.value)}
      onKeyDown={onKeyDown}
      prefix={<Search size="md" />}
      suffix={
        value ? (
          <Button
            variant="ghost"
            color="secondary"
            size="sm"
            icon
            aria-label="Clear"
            onClick={() => onValueChange("")}
          >
            <X size="md" />
          </Button>
        ) : undefined
      }
      containerStyle={width ? { width } : undefined}
    />
  );
}
