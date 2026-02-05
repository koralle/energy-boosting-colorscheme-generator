import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { css } from "../../../../../styled-system/css";
import { Button } from "@base-ui/react";
import { button } from "../../../../recipes/button.recipe";
import { PATTERNS } from "../../../../constants/patterns";
import type { Pattern } from "../../../../types/pattern";

export function Page() {
  const [selectedPattern, setSelectedPattern] = useState<Pattern | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleNext = () => {
    if (selectedPattern) {
      // navigate to /preview with patternId
      window.location.href = `/preview?patternId=${selectedPattern.id}`;
    } else {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <div
      className={css({
        maxInlineSize: "1000px",
        inlineSize: "fit-content",
        minInlineSize: "100%",
        flex: 1,
      })}
    >
      {/* ヘッダー */}
      <header
        className={css({
          marginBottom: "6",
          display: "flex",
          alignItems: "center",
          gap: "4",
        })}
      >
        <Button
          render={
            <Link to="/" className={button({ visual: "secondary", size: "sm", fluid: false })} />
          }
        >
          ← 戻る
        </Button>
        <h1
          className={css({
            fontSize: { base: "xl", md: "2xl" },
            fontWeight: "bold",
            color: "primary",
            fontFamily: "serif",
          })}
        >
          パターンを選択
        </h1>
      </header>

      {/* 通知 */}
      {showNotification && (
        <div
          className={css({
            position: "fixed",
            top: "4",
            left: "50%",
            backgroundColor: "red.500",
            color: "white",
            padding: "3 6",
            borderRadius: "md",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            zIndex: "50",
          })}
        >
          パターンを選択してください
        </div>
      )}

      {/* パターン選択エリア */}
      <section
        className={css({
          marginBottom: "6",
          padding: "4",
          backgroundColor: "white",
          borderRadius: "lg",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        })}
      >
        {selectedPattern ? (
          <div
            className={css({
              marginBottom: "4",
              padding: "3",
              backgroundColor: "primary",
              color: "white",
              borderRadius: "md",
              display: "flex",
              alignItems: "center",
              gap: "2",
            })}
          >
            <span className={css({ fontSize: "xl" })}>✓</span>
            <span>
              <span className={css({ fontWeight: "bold" })}>選択中:</span> パターン{" "}
              {selectedPattern.id}
            </span>
          </div>
        ) : (
          <div
            className={css({
              marginBottom: "4",
              padding: "4",
              backgroundColor: "gray.50",
              color: "text.secondary",
              borderRadius: "md",
              textAlign: "center",
              fontSize: "sm",
            })}
          >
            <p className={css({ marginBottom: "2", fontWeight: "medium" })}>
              パターンが選択されていません
            </p>
            <p>下記のパターンボタンから選択してください</p>
          </div>
        )}

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
          {PATTERNS.map((pattern) => {
            const isSelected = selectedPattern?.id === pattern.id;
            return (
              <button
                type="button"
                key={pattern.id}
                onClick={() => setSelectedPattern(pattern)}
                className={css({
                  position: "relative",
                  padding: "3",
                  border: "2px solid",
                  borderColor: isSelected ? "primary" : "gray.200",
                  borderRadius: "md",
                  backgroundColor: isSelected ? "primary" : "white",
                  color: isSelected ? "white" : "text.primary",
                  fontWeight: "medium",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  _hover: {
                    borderColor: "primary",
                    backgroundColor: isSelected ? "primary" : "gray.50",
                  },
                  _active: {
                    transform: "scale(0.98)",
                  },
                })}
              >
                <span>パターン {pattern.id}</span>
                {isSelected && (
                  <span
                    className={css({
                      position: "absolute",
                      top: "1",
                      right: "1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "5",
                      height: "5",
                      backgroundColor: "white",
                      color: "primary",
                      borderRadius: "50%",
                      fontSize: "xs",
                      fontWeight: "bold",
                    })}
                  >
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* 操作ボタンエリア */}
      <section
        className={css({
          display: "flex",
          gap: "3",
          justifyContent: "center",
        })}
      >
        <Button
          onClick={handleNext}
          className={button({ visual: "primary", size: "lg", fluid: false })}
        >
          <span>次へ</span>
          <ArrowRight size={20} />
        </Button>
      </section>
    </div>
  );
}
