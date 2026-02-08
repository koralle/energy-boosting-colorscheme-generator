import { Button } from "@base-ui/react/button";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import * as v from "valibot";
import { css } from "../../../../../styled-system/css";
import { PATTERNS } from "../../../../constants/patterns";
import { button } from "../../../../recipes/button.recipe";
import { type Pattern, patternIdSchema } from "../../../../types/pattern";
import { useAppForm } from "../-hooks/use-form";
import { formSchema } from "../-schemas/form-schema";
import { RadioCard } from "./radio-card";

export function Page() {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  const form = useAppForm({
    defaultValues: {
      patternId: undefined as number | undefined,
    },
    validators: {
      onChange: formSchema,
    },
  });

  const handleNext = () => {
    const patternId = form.getFieldValue("patternId");
    if (patternId !== undefined) {
      setShowError(false);
      navigate({
        to: "/preview",
        search: { patternId },
      });
    } else {
      setShowError(true);
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

      {/* エラー通知 */}
      {showError && (
        <div
          className={css({
            position: "fixed",
            top: "4",
            left: "50%",
            transform: "translateX(-50%)",
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

      {/* 選択状態表示エリア */}
      <form.Subscribe selector={(state) => state.values.patternId}>
        {(patternId) => (
          <section
            className={css({
              marginBottom: "6",
              padding: "4",
              backgroundColor: "white",
              borderRadius: "lg",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            })}
          >
            {patternId !== undefined ? (
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
                  <span className={css({ fontWeight: "bold" })}>選択中:</span> パターン {patternId}
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
                <p>下記のパターンカードから選択してください</p>
              </div>
            )}

            <form.Field name="patternId">
              {({ state, handleChange }) => (
                <fieldset
                  className={css({
                    border: "none",
                    padding: 0,
                    margin: 0,
                  })}
                >
                  <legend className={css({ srOnly: true })}>パターンを選択してください</legend>
                  <RadioGroup
                    value={state.value !== undefined ? String(state.value) : ""}
                    onValueChange={(value) => {
                      if (value === "") {
                        handleChange(undefined);
                      } else {
                        const numValue = Number(value);
                        const parsedValue = v.parse(patternIdSchema, numValue);
                        handleChange(parsedValue);
                        setShowError(false);
                      }
                    }}
                    className={css({
                      display: "grid",
                      gridTemplateColumns: {
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                      },
                      gap: 4,
                    })}
                  >
                    {PATTERNS.map((pattern: Pattern) => (
                      <RadioCard key={pattern.id} pattern={pattern} />
                    ))}
                  </RadioGroup>
                </fieldset>
              )}
            </form.Field>
          </section>
        )}
      </form.Subscribe>

      {/* 操作ボタンエリア */}
      <section
        className={css({
          display: "flex",
          gap: "3",
          justifyContent: "center",
        })}
      >
        <Button
          type="button"
          onClick={handleNext}
          className={button({
            visual: "primary",
            size: "lg",
            fluid: false,
          })}
        >
          <span>次へ</span>
          <ArrowRight size={20} />
        </Button>
      </section>
    </div>
  );
}
