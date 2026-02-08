import { css } from "../../../../../styled-system/css";
import { getColorCode, getColorLabel } from "../../../../constants/colors";
import type { ColorKey } from "../../../../types/pattern";

/**
 * 色見本コンポーネントのプロパティ
 */
interface ColorSampleProps {
  /** 色名 */
  colorName: ColorKey;
  /** サイズバリアント */
  size?: "sm" | "md" | "lg";
  /** 色名を表示するかどうか */
  showLabel?: boolean;
}

/**
 * 色見本コンポーネント
 *
 * 現行仕様の円形の色見本を再現
 * 印刷時のインク消費を抑えるため、パステル調の配色を使用
 */
export function ColorSample({ colorName, size = "md", showLabel = true }: ColorSampleProps) {
  const colorCode = getColorCode(colorName);
  const colorLabel = getColorLabel(colorName);

  const sizeStyles = {
    sm: { width: "32px", height: "32px", fontSize: "10px" },
    md: { width: "48px", height: "48px", fontSize: "12px" },
    lg: { width: "64px", height: "64px", fontSize: "14px" },
  };

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2",
      })}
    >
      <div
        role="img"
        className={css({
          width: sizeStyles[size].width,
          height: sizeStyles[size].height,
          borderRadius: "50%",
          backgroundColor: colorCode,
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          _hover: {
            transform: "scale(1.05)",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
          },
          // 印刷用スタイル
          "@media print": {
            boxShadow: "none",
            border: "1px solid #e0e0e0",
            _hover: {
              transform: "none",
            },
          },
        })}
        aria-label={`${colorLabel}の色見本`}
      />
      {showLabel && (
        <span
          className={css({
            fontSize: sizeStyles[size].fontSize,
            fontWeight: "medium",
            color: "text.primary",
            textAlign: "center",
          })}
        >
          {colorLabel}
        </span>
      )}
    </div>
  );
}
