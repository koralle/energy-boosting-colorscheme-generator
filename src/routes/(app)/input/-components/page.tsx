import { Button } from "@base-ui/react/button";
import { RadioGroup } from "@base-ui/react/radio-group";
import * as v from "valibot";
import { css } from "../../../../../styled-system/css";
import { PATTERNS } from "../../../../constants/patterns";
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
        <div>
          <form.Subscribe
            selector={(state) => state.values.patternId}
            children={(patternId) => (
              <>
                パターン{patternId}が選択されています。
                <Button type="button" onClick={() => form.reset()}>
                  リセットする
                </Button>
              </>
            )}
          />
        </div>

        <form.Field
          name="patternId"
          children={({ state, handleChange }) => (
            <>
              <fieldset>
                <RadioGroup
                  value={state.value}
                  onValueChange={(value) => {
                    const parsedValue = v.parse(patternIdSchema, value);
                    handleChange(parsedValue);
                  }}
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  })}
                >
                  {PATTERNS.map((pattern: Pattern) => (
                    <RadioCard key={pattern.id} pattern={pattern} />
                  ))}
                </RadioGroup>
              </fieldset>
            </>
          )}
        ></form.Field>
      </form>
    </div>
  );
}
