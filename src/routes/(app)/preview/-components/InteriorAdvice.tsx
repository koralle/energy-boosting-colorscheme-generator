import { getInteriorAdvice } from "../../../../constants/patterns";
import { css } from "../../../../../styled-system/css";
import type { InteriorPatternNumber } from "../../../../types/pattern";

/**
 * インテリアアドバイスコンポーネントのプロパティ
 */
interface InteriorAdviceProps {
  /** インテリアアドバイスのパターン番号 */
  patternNumber: InteriorPatternNumber;
}

/**
 * インテリアアドバイスコンポーネント
 *
 * 現行仕様の箇条書き形式のアドバイスを再現
 */
export function InteriorAdvice({ patternNumber }: InteriorAdviceProps) {
  const advices = getInteriorAdvice(patternNumber);

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "2",
        padding: "4",
        backgroundColor: "gray.50",
        borderRadius: "md",
        fontSize: "sm",
        lineHeight: "1.6",
        // 印刷用スタイル
        "@media print": {
          backgroundColor: "white",
          border: "1px solid #e0e0e0",
        },
      })}
    >
      {advices.map((advice) => (
        <div
          key={advice}
          className={css({
            display: "flex",
            gap: "2",
            alignItems: "flex-start",
          })}
        >
          <span
            className={css({
              color: "primary",
              fontWeight: "bold",
              flexShrink: 0,
            })}
          >
            •
          </span>
          <span>{advice}</span>
        </div>
      ))}
    </div>
  );
}
