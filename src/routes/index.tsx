import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { css } from "../../styled-system/css";
import { FortunePaper } from "../components/FortunePaper";
import { PATTERNS } from "../constants/patterns";
import type { Pattern } from "../types/pattern";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedPattern, setSelectedPattern] = useState<Pattern | null>(null);

  return (
    <div
      className={css({
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "4",
      })}
    >
      <div
        className={css({
          maxWidth: "800px",
          margin: "0 auto",
        })}
      >
        {/* ヘッダー */}
        <header
          className={css({
            marginBottom: "6",
            textAlign: "center",
          })}
        >
          <h1
            className={css({
              fontSize: { base: "xl", md: "2xl" },
              fontWeight: "bold",
              color: "primary",
              marginBottom: "2",
              fontFamily: "serif",
            })}
          >
            エネルギーUP色鑑定書作成ツール
          </h1>
          <p
            className={css({
              fontSize: "sm",
              color: "text.secondary",
            })}
          >
            パターンを選択して鑑定書を生成・印刷してください
          </p>
        </header>

        {/* パターン選択エリア */}
        <section
          className={css({
            marginBottom: "6",
            padding: "4",
            backgroundColor: "white",
            borderRadius: "lg",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            // 印刷時に非表示
            "@media print": {
              display: "none",
            },
          })}
        >
          <h2
            className={css({
              fontSize: "lg",
              fontWeight: "bold",
              marginBottom: "4",
            })}
          >
            パターンを選択
          </h2>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: {
                base: "repeat(3, 1fr)",
                sm: "repeat(4, 1fr)",
                md: "repeat(6, 1fr)",
              },
              gap: "3",
            })}
          >
            {PATTERNS.map((pattern) => (
              <button
                type="button"
                key={pattern.id}
                onClick={() => setSelectedPattern(pattern)}
                className={css({
                  padding: "3",
                  border: "2px solid",
                  borderColor: selectedPattern?.id === pattern.id ? "primary" : "gray.200",
                  borderRadius: "md",
                  backgroundColor: selectedPattern?.id === pattern.id ? "primary" : "white",
                  color: selectedPattern?.id === pattern.id ? "white" : "text.primary",
                  fontWeight: "medium",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  _hover: {
                    borderColor: "primary",
                    backgroundColor: selectedPattern?.id === pattern.id ? "primary" : "gray.50",
                  },
                  _active: {
                    transform: "scale(0.98)",
                  },
                })}
              >
                パターン {pattern.id}
              </button>
            ))}
          </div>
        </section>

        {/* 操作ボタンエリア */}
        {selectedPattern && (
          <section
            className={css({
              marginBottom: "6",
              display: "flex",
              gap: "3",
              justifyContent: "center",
              // 印刷時に非表示
              "@media print": {
                display: "none",
              },
            })}
          >
            <button
              type="button"
              onClick={() => window.print()}
              className={css({
                padding: "3 6",
                backgroundColor: "primary",
                color: "white",
                fontWeight: "medium",
                borderRadius: "md",
                cursor: "pointer",
                transition: "all 0.2s ease",
                _hover: {
                  backgroundColor: "#6d28d9",
                },
                _active: {
                  transform: "scale(0.98)",
                },
              })}
            >
              印刷する
            </button>
            <button
              type="button"
              onClick={() => setSelectedPattern(null)}
              className={css({
                padding: "3 6",
                backgroundColor: "white",
                color: "text.primary",
                fontWeight: "medium",
                borderRadius: "md",
                cursor: "pointer",
                border: "1px solid",
                borderColor: "gray.300",
                transition: "all 0.2s ease",
                _hover: {
                  backgroundColor: "gray.50",
                },
                _active: {
                  transform: "scale(0.98)",
                },
              })}
            >
              クリア
            </button>
          </section>
        )}

        {/* 鑑定書プレビュー */}
        {selectedPattern && (
          <div
            className={css({
              // 印刷時のみ表示
              display: { base: "block", print: "block" },
            })}
          >
            <FortunePaper pattern={selectedPattern} />
          </div>
        )}

        {/* 何も選択されていない場合のメッセージ */}
        {!selectedPattern && (
          <div
            className={css({
              textAlign: "center",
              padding: "8",
              color: "text.secondary",
              // 印刷時に非表示
              "@media print": {
                display: "none",
              },
            })}
          >
            <p>上記のパターンボタンから選択してください</p>
          </div>
        )}
      </div>
    </div>
  );
}
