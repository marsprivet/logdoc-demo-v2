import { Select as BaseSelect } from "@base-ui/react/select";

export type SelectOption = { value: string; label: string };

export default function Select({
  value,
  onValueChange,
  options,
  disabled,
}: {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  disabled?: boolean;
}) {
  return (
    <BaseSelect.Root
      value={value}
      onValueChange={(v) => onValueChange(v as string)}
      disabled={disabled}
    >
      <BaseSelect.Trigger className="ui-select-trigger">
        <BaseSelect.Value />
        <BaseSelect.Icon className="ui-select-icon">▾</BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner className="ui-select-positioner" sideOffset={4}>
          <BaseSelect.Popup className="ui-select-popup">
            {options.map((o) => (
              <BaseSelect.Item key={o.value} value={o.value} className="ui-select-item">
                <BaseSelect.ItemText>{o.label}</BaseSelect.ItemText>
              </BaseSelect.Item>
            ))}
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}
