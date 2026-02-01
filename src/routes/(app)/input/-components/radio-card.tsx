import { Radio } from "@base-ui/react/radio";
import { Circle, CircleCheck } from "lucide-react";
import { css } from "../../../../../styled-system/css";
import type { Pattern } from "../../../../types/pattern";

export function RadioCard({ pattern }: { pattern: Pattern }) {
  return (
    <label
      className={css({
        display: "flex",
        flexDirection: "column",
        padding: 2,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "gray.600",
        borderRadius: "8px",
        cursor: "pointer",
      })}
    >
      <Radio.Root
        value={pattern.id}
        render={(_, state) => {
          return (
            <>
              <div className={css({ display: "flex", flexDirection: "column", gap: 2 })}>
                {state.checked ? <CircleCheck size={32} /> : <Circle size={32} />}

                <div className={css({ display: "flex", flexDirection: "column", gap: 1 })}>
                  <span>自分色: {pattern.energyUpColors.myself}</span>
                  <span>やる気色: {pattern.energyUpColors.motivation}</span>
                  <span>精神安定色: {pattern.energyUpColors.mentalStability}</span>
                  <span>決断色: {pattern.energyUpColors.decision}</span>
                  <span>健康色: {pattern.energyUpColors.health}</span>
                  <span>経済色: {pattern.energyUpColors.economy}</span>
                </div>

                <span>タブー色: {pattern.tabooColor}</span>
              </div>
            </>
          );
        }}
      />
    </label>
  );
}
