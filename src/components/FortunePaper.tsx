import { css } from "../../styled-system/css";
import type { Pattern } from "../types/pattern";
import { ColorSample } from "./ColorSample";
import { InteriorAdvice } from "./InteriorAdvice";

/**
 * 鑑定書コンポーネントのプロパティ
 */
interface FortunePaperProps {
  /** 選択されたパターン */
  pattern: Pattern;
}

/**
 * エネルギーUP色の表示データ
 */
const ENERGY_UP_COLORS = [
  { key: "myself", label: "自分色" },
  { key: "motivation", label: "やる気色" },
  { key: "mentalStability", label: "精神安定色" },
  { key: "decision", label: "決断色" },
  { key: "health", label: "健康色" },
  { key: "economy", label: "経済色" },
] as const;

/**
 * 鑑定書コンポーネント
 *
 * 現行仕様のレイアウトを再現
 * A4サイズでの印刷を前提としたデザイン
 */
export function FortunePaper({ pattern }: FortunePaperProps) {
  return (
    <div
      className={css({
        width: "100%",
        maxWidth: "210mm", // A4 width
        minHeight: "297mm", // A4 height
        margin: "0 auto",
        padding: "6",
        backgroundColor: "white",
        color: "text.primary",
        // 印刷用スタイル
        "@media print": {
          width: "100%",
          maxWidth: "none",
          padding: "8mm",
          margin: "0",
          boxShadow: "none",
        },
      })}
    >
      {/* ヘッダー */}
      <header
        className={css({
          textAlign: "center",
          marginBottom: "6",
        })}
      >
        <h1
          className={css({
            fontSize: { base: "2xl", md: "3xl" },
            fontWeight: "bold",
            color: "primary",
            marginBottom: "2",
            letterSpacing: "0.1em",
            fontFamily: "serif",
          })}
        >
          ENERGY BOOSTING COLOR
        </h1>
        <p
          className={css({
            fontSize: "sm",
            color: "text.secondary",
          })}
        >
          エネルギーUP色鑑定書
        </p>
      </header>

      {/* 記入欄エリア */}
      <section
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "3",
          marginBottom: "6",
          padding: "4",
          border: "1px solid",
          borderColor: "gray.200",
          borderRadius: "md",
          backgroundColor: "gray.50",
          // 印刷用スタイル
          "@media print": {
            backgroundColor: "white",
            borderColor: "#cccccc",
          },
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: { base: "column", sm: "row" },
            gap: { base: "3", sm: "6" },
          })}
        >
          {/* 名前記入欄 */}
          <div
            className={css({
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1",
            })}
          >
            <span
              className={css({
                fontSize: "sm",
                fontWeight: "medium",
                color: "text.secondary",
              })}
            >
              名前
            </span>
            <div
              className={css({
                borderBottom: "1px solid",
                borderColor: "gray.400",
                height: "8",
                // 印刷用スタイル
                "@media print": {
                  borderColor: "#999999",
                },
              })}
            />
          </div>

          {/* 生年月日記入欄 */}
          <div
            className={css({
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1",
            })}
          >
            <span
              className={css({
                fontSize: "sm",
                fontWeight: "medium",
                color: "text.secondary",
              })}
            >
              生年月日
            </span>
            <div
              className={css({
                borderBottom: "1px solid",
                borderColor: "gray.400",
                height: "8",
                // 印刷用スタイル
                "@media print": {
                  borderColor: "#999999",
                },
              })}
            />
          </div>
        </div>
      </section>

      {/* エネルギーが落ちる年 */}
      <section
        className={css({
          textAlign: "center",
          marginBottom: "6",
          padding: "4",
          backgroundColor: "primary",
          color: "white",
          borderRadius: "md",
          // 印刷用スタイル
          "@media print": {
            backgroundColor: "#f0f0f0",
            color: "text.primary",
            border: "1px solid #cccccc",
          },
        })}
      >
        <p
          className={css({
            fontSize: "sm",
            marginBottom: "1",
            opacity: 0.9,
          })}
        >
          エネルギーが落ちる年
        </p>
        <p
          className={css({
            fontSize: { base: "xl", md: "2xl" },
            fontWeight: "bold",
          })}
        >
          {pattern.energyDownYear}
        </p>
      </section>

      {/* エネルギーUP色（6色） */}
      <section
        className={css({
          marginBottom: "6",
        })}
      >
        <h2
          className={css({
            fontSize: "lg",
            fontWeight: "bold",
            marginBottom: "4",
            textAlign: "center",
          })}
        >
          エネルギーUP色
        </h2>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" },
            gap: "4",
          })}
        >
          {ENERGY_UP_COLORS.map(({ key, label }) => (
            <div
              key={key}
              className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2",
                padding: "3",
                border: "1px solid",
                borderColor: "gray.200",
                borderRadius: "md",
                backgroundColor: "gray.50",
                // 印刷用スタイル
                "@media print": {
                  backgroundColor: "white",
                  borderColor: "#e0e0e0",
                },
              })}
            >
              <span
                className={css({
                  fontSize: "sm",
                  fontWeight: "medium",
                  color: "text.secondary",
                })}
              >
                {label}
              </span>
              <ColorSample colorName={pattern.energyUpColors[key]} size="lg" />
            </div>
          ))}
        </div>
      </section>

      {/* 守護色（手書き） */}
      <section
        className={css({
          marginBottom: "6",
          padding: "4",
          border: "1px solid",
          borderColor: "gray.200",
          borderRadius: "md",
          backgroundColor: "gray.50",
          // 印刷用スタイル
          "@media print": {
            backgroundColor: "white",
            borderColor: "#e0e0e0",
          },
        })}
      >
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "4",
          })}
        >
          <span
            className={css({
              fontSize: "md",
              fontWeight: "medium",
              color: "text.secondary",
              flexShrink: 0,
            })}
          >
            守護色
          </span>
          <div
            className={css({
              flex: 1,
              borderBottom: "1px solid",
              borderColor: "gray.400",
              height: "6",
              // 印刷用スタイル
              "@media print": {
                borderColor: "#999999",
              },
            })}
          />
        </div>
      </section>

      {/* タブー色（薬色） */}
      <section
        className={css({
          marginBottom: "6",
          padding: "4",
          border: "1px solid",
          borderColor: "gray.200",
          borderRadius: "md",
          backgroundColor: "gray.50",
          // 印刷用スタイル
          "@media print": {
            backgroundColor: "white",
            borderColor: "#e0e0e0",
          },
        })}
      >
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "4",
          })}
        >
          <span
            className={css({
              fontSize: "md",
              fontWeight: "medium",
              color: "text.secondary",
              flexShrink: 0,
            })}
          >
            タブー色（薬色）
          </span>
          <ColorSample colorName={pattern.tabooColor} size="md" />
        </div>
      </section>

      {/* インテリアアドバイス */}
      <section
        className={css({
          marginBottom: "6",
        })}
      >
        <h2
          className={css({
            fontSize: "lg",
            fontWeight: "bold",
            marginBottom: "3",
            textAlign: "center",
          })}
        >
          能力を引き出すインテリア
        </h2>
        <InteriorAdvice patternNumber={pattern.interiorPattern} />
      </section>

      {/* 今年のラッキーカラー・タブーカラー（手書き） */}
      <section
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "3",
          padding: "4",
          border: "1px solid",
          borderColor: "gray.200",
          borderRadius: "md",
          backgroundColor: "gray.50",
          // 印刷用スタイル
          "@media print": {
            backgroundColor: "white",
            borderColor: "#e0e0e0",
          },
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "1",
          })}
        >
          <span
            className={css({
              fontSize: "sm",
              fontWeight: "medium",
              color: "text.secondary",
            })}
          >
            今年のラッキーカラー
          </span>
          <div
            className={css({
              borderBottom: "1px solid",
              borderColor: "gray.400",
              height: "6",
              // 印刷用スタイル
              "@media print": {
                borderColor: "#999999",
              },
            })}
          />
        </div>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "1",
          })}
        >
          <span
            className={css({
              fontSize: "sm",
              fontWeight: "medium",
              color: "text.secondary",
            })}
          >
            今年のタブーカラー
          </span>
          <div
            className={css({
              borderBottom: "1px solid",
              borderColor: "gray.400",
              height: "6",
              // 印刷用スタイル
              "@media print": {
                borderColor: "#999999",
              },
            })}
          />
        </div>
      </section>
    </div>
  );
}
