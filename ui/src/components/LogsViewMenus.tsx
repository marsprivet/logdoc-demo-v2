import { useState } from "react";
import { Button } from "@ds/components/button";
import { Checkbox } from "@ds/components/checkbox";
import { PopoverSimple } from "@ds/components/popover";
import { RadioGroup } from "@ds/components/radio-group";
import { Download, SlidersVertical } from "@ds/icons";

// The log table's toolbar menus, after SigNoz's logs explorer: one button
// for table options (font size, density, columns) and one for export.

export type FontSize = "small" | "medium" | "large";
export type Density = "full" | "compact";

export type ViewConfig = {
  showTime: boolean;
  showApp: boolean;
  showSrc: boolean;
  showFields: boolean;
  density: Density;
  fontSize: FontSize;
};

export const DEFAULT_VIEW: ViewConfig = {
  showTime: true,
  showApp: true,
  showSrc: true,
  showFields: true,
  density: "full",
  fontSize: "medium",
};

/** SigNoz's typography tiers for log cells: font size / line height in px. */
export const FONT_SIZES: Record<FontSize, { font: number; line: number }> = {
  small: { font: 11, line: 16 },
  medium: { font: 13, line: 20 },
  large: { font: 14, line: 24 },
};

/** Reads the saved view; a numeric fontSize from the old slider maps to a tier. */
export function loadView(): ViewConfig {
  try {
    const saved = JSON.parse(localStorage.getItem("logdoc_view") ?? "{}");
    if (typeof saved.fontSize === "number") {
      saved.fontSize = saved.fontSize <= 11 ? "small" : saved.fontSize >= 14 ? "large" : "medium";
    }
    return { ...DEFAULT_VIEW, ...saved };
  } catch {
    return DEFAULT_VIEW;
  }
}

const COLUMNS = [
  ["showTime", "time"],
  ["showApp", "app"],
  ["showSrc", "src"],
  ["showFields", "fields"],
] as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="menu-section">
      <div className="menu-title">{title}</div>
      {children}
    </section>
  );
}

export function TableSettingsMenu({
  view,
  onChange,
}: {
  view: ViewConfig;
  onChange: (next: ViewConfig) => void;
}) {
  return (
    <PopoverSimple
      align="end"
      sideOffset={6}
      className="logs-menu"
      trigger={
        <Button variant="ghost" color="secondary" size="md" icon aria-label="Table settings">
          <SlidersVertical size="lg" />
        </Button>
      }
    >
      <Section title="Font size">
        <RadioGroup
          color="primary"
          value={view.fontSize}
          onChange={(v) => onChange({ ...view, fontSize: v as FontSize })}
          items={[
            { value: "small", label: "Small" },
            { value: "medium", label: "Medium" },
            { value: "large", label: "Large" },
          ]}
        />
      </Section>
      <Section title="Density">
        <RadioGroup
          color="primary"
          value={view.density}
          onChange={(v) => onChange({ ...view, density: v as Density })}
          items={[
            { value: "full", label: "Comfortable" },
            { value: "compact", label: "Compact" },
          ]}
        />
      </Section>
      <Section title="Columns">
        <div className="menu-options">
          {COLUMNS.map(([key, label]) => (
            <Checkbox
              key={key}
              color="primary"
              value={view[key]}
              onChange={(checked) => onChange({ ...view, [key]: checked })}
            >
              {label}
            </Checkbox>
          ))}
        </div>
      </Section>
    </PopoverSimple>
  );
}

export type ExportFormat = "csv" | "ndjson";
export type ExportColumns = "all" | "visible";

export function ExportMenu({
  rows,
  onExport,
}: {
  rows: number;
  onExport: (format: ExportFormat, columns: ExportColumns) => void;
}) {
  const [open, setOpen] = useState(false);
  const [format, setFormat] = useState<ExportFormat>("csv");
  const [columns, setColumns] = useState<ExportColumns>("all");
  const empty = rows === 0;

  return (
    <PopoverSimple
      open={open}
      onOpenChange={setOpen}
      align="end"
      sideOffset={6}
      className="logs-menu"
      trigger={
        <Button variant="ghost" color="secondary" size="md" icon aria-label="Export">
          <Download size="lg" />
        </Button>
      }
    >
      <Section title="Format">
        <RadioGroup
          color="primary"
          value={format}
          onChange={(v) => setFormat(v as ExportFormat)}
          items={[
            { value: "csv", label: "csv" },
            { value: "ndjson", label: "ndjson" },
          ]}
        />
      </Section>
      <Section title="Columns">
        <RadioGroup
          color="primary"
          value={columns}
          onChange={(v) => setColumns(v as ExportColumns)}
          items={[
            { value: "all", label: "All" },
            { value: "visible", label: "Visible" },
          ]}
        />
      </Section>
      <div className="menu-footer">
        <div className="menu-note">
          {empty ? "Nothing loaded yet — run a search first." : `${rows} loaded rows`}
        </div>
        <Button
          variant="solid"
          color="primary"
          size="md"
          width="100%"
          prefix={<Download size="md" />}
          disabled={empty}
          disabledTooltip="Run a search first"
          onClick={() => {
            onExport(format, columns);
            setOpen(false);
          }}
        >
          Export
        </Button>
      </div>
    </PopoverSimple>
  );
}
