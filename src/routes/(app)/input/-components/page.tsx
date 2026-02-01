import { Button } from "@base-ui/react/button";
import { RadioGroup } from "@base-ui/react/radio-group";
import * as v from "valibot";
import { css } from "../../../../../styled-system/css";
import { PATTERNS } from "../../../../constants/patterns";
import { button } from "../../../../recipes/button.recipe";
import { type Pattern, patternIdSchema } from "../../../../types/pattern";
import { useAppForm } from "../-hooks/use-form";
import { formSchema } from "../-schemas/form-schema";
import { RadioCard } from "./radio-card";

export function Page() {
  const form = useAppForm({
    defaultValues: {
      patternId: 1,
    },
    validators: {
      onChange: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log({ value });
    },
  });

  return (
    <div
      className={css({
        maxInlineSize: "1000px",
        inlineSize: "fit-content",
        minInlineSize: "100%",
      })}
    >
      <form>
        <form.Subscribe selector={(state) => state.values.patternId}>
          {(patternId) => (
            <div
              className={css({
                display: "flex",
                flexDirection: { base: "column", md: "row" },
                alignItems: { base: "stretch", md: "center" },
                justifyContent: "space-between",
                gap: { base: 2, md: 4 },
                marginBottom: 4,
                padding: 3,
                backgroundColor: "gray.50",
                borderRadius: "8px",
              })}
            >
              <span
                className={css({
                  fontSize: "h5",
                  fontWeight: "medium",
                  color: "gray.800",
                })}
              >
                パターン{patternId}が選択されています
              </span>
              <Button
                type="button"
                onClick={() => form.reset()}
                className={button({ visual: "secondary", size: "sm" })}
              >
                リセット
              </Button>
            </div>
          )}
        </form.Subscribe>

        <form.Field name="patternId">
          {({ state, handleChange }) => (
            <fieldset
              className={css({
                border: "none",
                padding: 0,
                margin: 0,
              })}
            >
              <RadioGroup
                value={state.value}
                onValueChange={(value) => {
                  const parsedValue = v.parse(patternIdSchema, value);
                  handleChange(parsedValue);
                }}
                className={css({
                  display: "grid",
                  gridTemplateColumns: {
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(4, 1fr)",
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

        <div
          className={css({
            padding: 4,
            display: "flex",
            justifyContent: "center",
          })}
        >
          <form.Subscribe selector={(state) => state.values.patternId}>
            {(patternId) => (
              <Button
                type="button"
                className={button({ visual: "primary", size: "lg" })}
                onClick={() => {
                  console.log(`Navigating to preview with pattern ${patternId}`);
                }}
              >
                プレビュー画面へ
              </Button>
            )}
          </form.Subscribe>
        </div>
      </form>
    </div>
  );
}
