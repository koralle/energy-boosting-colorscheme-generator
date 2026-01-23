import { Field } from "@base-ui/react/field";
import { Fieldset } from "@base-ui/react/fieldset";
import { Form } from "@base-ui/react/form";
import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import { css } from "../../../../../styled-system/css";
import { PATTERNS } from "../../../../constants/patterns";
import type { Pattern } from "../../../../types/pattern";

export function Page() {
  return (
    <div
      className={css({
        maxInlineSize: "1000px",
        inlineSize: "fit-content",
      })}
    >
      <Form>
        <Field.Root name="patternId">
          <Fieldset.Root
            render={<RadioGroup required />}
            className={css({ display: "flex", flexDirection: "column", inlineSize: "100%" })}
          >
            <Fieldset.Legend>
              <strong>
                鑑定パターンを選択してください。
              </strong>
            </Fieldset.Legend>

            {PATTERNS.map((pattern: Pattern) => (
              <Field.Label key={pattern.id} className={css({ padding: 2, inlineSize: "stretch" })}>
                <Radio.Root value={pattern.id}>
                  <Radio.Indicator />
                </Radio.Root>

                <div className={css({ display: "flex", flexDirection: "column" })}>
                  <span>自分色: {pattern.energyUpColors.myself}</span>
                  <span>やる気色: {pattern.energyUpColors.motivation}</span>
                  <span>精神安定色: {pattern.energyUpColors.mentalStability}</span>
                  <span>決断色: {pattern.energyUpColors.decision}</span>
                  <span>健康色: {pattern.energyUpColors.health}</span>
                  <span>経済色: {pattern.energyUpColors.economy}</span>
                </div>

                <span>タブー色: {pattern.tabooColor}</span>
              </Field.Label>
            ))}
          </Fieldset.Root>
          <RadioGroup></RadioGroup>
        </Field.Root>
      </Form>
    </div>
  );
}
