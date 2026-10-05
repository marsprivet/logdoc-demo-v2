import "./LevelBadge.css";

export const LEVELS = ["DEBUG", "INFO", "LOG", "WARN", "ERROR", "SEVERE", "PANIC"] as const;

/** A log level as a colored mono tag; unknown levels fall back to DEBUG's tint. */
export default function LevelBadge({ level }: { level: string }) {
  return (
    <span className="level-badge" data-level={level}>
      {level}
    </span>
  );
}
