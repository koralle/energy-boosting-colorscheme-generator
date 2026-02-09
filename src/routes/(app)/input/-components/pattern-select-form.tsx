import { Button } from "@base-ui/react";
import { RadioGroup } from "@base-ui/react/radio-group";
import { ArrowRight } from "lucide-react";
import * as v from "valibot";
import { css } from "../../../../../styled-system/css";
import { flex } from "../../../../../styled-system/patterns";
import { PATTERNS } from "../../../../constants/patterns";
import { button } from "../../../../recipes/button.recipe";
import { type Pattern, patternIdSchema } from "../../../../types/pattern";
import { useAppForm } from "../-hooks/use-form";
import { formSchema } from "../-schemas/form-schema";
import { RadioCard } from "./radio-card";

interface PatternSelectFormProps {
  onSubmit: (value: { patternId: number }) => void;
}

export function PatternSelectForm({ onSubmit }: Readonly<PatternSelectFormProps>) {
  const form = useAppForm({
    defaultValues: {
      patternId: 1,
    },
    validators: {
      onChange: formSchema,
    },
    onSubmit: async ({ value }) => {
      onSubmit(value);
    },
  });

  return (
    <form.AppForm>
      <form
        name="鑑定パターン選択"
        onSubmit={(event) => {
          event.preventDefault();
          form.handleSubmit();
        }}
      >
        <div
          className={flex({
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 6,
            gap: 6,
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

          <Button type="submit" className={button({ size: "lg" })}>
            <span>次へ</span>
            <ArrowRight size={20} />
          </Button>
        </div>
      </form>
    </form.AppForm>
  );
}
