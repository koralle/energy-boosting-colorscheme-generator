import { css } from "../../../../../styled-system/css/css";
import { flex } from "../../../../../styled-system/patterns";

interface ColorBadgeProps {
  label: string;
  color: string;
  colorName: string;
}

export function ColorBadge({ label, color, colorName }: Readonly<ColorBadgeProps>) {
  return (
    <div
      className={flex({
        direction: "column",
        gap: 1,
        blockSize: "100%",
      })}
    >
      <span
        className={flex({
          fontSize: "body",
          color: "gray.600",
          blockSize: "20px",
          alignItems: "center",
        })}
      >
        {label}
      </span>
      <div
        className={flex({
          align: "center",
          gap: 2,
          blockSize: "28px",
        })}
      >
        <span
          className={css({
            inlineSize: "32px",
            blockSize: "32px",
            borderRadius: "full",
            border: "1px solid",
            borderColor: "gray.200",
            flexShrink: 0,
          })}
          style={{ backgroundColor: color }}
        />
        <span className={css({ fontSize: "body", fontWeight: "medium" })}>{colorName}</span>
      </div>
    </div>
  );
}
