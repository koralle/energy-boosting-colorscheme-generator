import { Button } from "@base-ui/react/button";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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

  const form = useAppForm({
    defaultValues: {
      patternId: 1,
    },
    validators: {
      onChange: formSchema,
    },
  });

  const handleNext = () => {
    const patternId = form.getFieldValue("patternId");
    navigate({
      to: "/preview",
      search: { patternId },
    });
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
            color: "gray.800",
          })}
        >
          パターンを選択
        </h1>
      </header>

      {/* 選択状態表示エリア */}
      <form.Subscribe selector={(state) => state.values.patternId}>
        <section
          className={css({
            marginBottom: 6,
          })}
        >
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
                  value={String(state.value)}
                  onValueChange={(value) => {
                    const numValue = Number(value);
                    const parsedValue = v.parse(patternIdSchema, numValue);
                    handleChange(parsedValue);
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
