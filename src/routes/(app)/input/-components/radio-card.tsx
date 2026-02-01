import { Radio } from "@base-ui/react/radio";
import { Check, Circle } from "lucide-react";
import { css } from "../../../../../styled-system/css";
import { flex } from "../../../../../styled-system/patterns";
import { getColorCode } from "../../../../constants/colors";
import type { ColorName, Pattern } from "../../../../types/pattern";

function ColorPill({ label, name }: { label: string; name: ColorName }) {
  return (
    <div className={flex({ direction: "column", gap: 1 })}>
      <span className={css({ fontSize: "body", color: "gray.500" })}>{label}</span>
      <div className={flex({ align: "start", gap: 2 })}>
        <span
          className={css({
            inlineSize: "24px",
            blockSize: "24px",
            borderRadius: "full",
            border: "1px solid",
            borderColor: "gray.200",
            flexShrink: 0,
          })}
          style={{ backgroundColor: getColorCode(name) }}
        />
        <span className={css({ fontSize: "body", fontWeight: "medium" })}>{name}</span>
      </div>
    </div>
  );
}

function SimpleColorPill({ name }: { name: ColorName }) {
  return (
    <div className={flex({ align: "center", gap: 1.5 })}>
      <span
        className={css({
          inlineSize: "14px",
          blockSize: "14px",
          borderRadius: "full",
          border: "1px solid",
          borderColor: "gray.200",
          flexShrink: 0,
        })}
        style={{ backgroundColor: getColorCode(name) }}
      />
      <span className={css({ fontSize: "caption", fontWeight: "medium" })}>{name}</span>
    </div>
  );
}

export function RadioCard({ pattern }: { pattern: Pattern }) {
  return (
    <Radio.Root
      value={pattern.id}
      render={(props, state) => {
        const isChecked = state.checked;

        return (
          <div
            {...props}
            className={flex({
              direction: "column",
              padding: 3,
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: isChecked ? "primary.500" : "gray.300",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              backgroundColor: isChecked ? "primary.50" : "white",
              _hover: {
                borderColor: isChecked ? "primary.600" : "gray.400",
              },
            })}
          >
            <Radio.Indicator className={css({ display: "none" })} />

            <div
              className={flex({
                direction: "column",
                gap: 3,
              })}
            >
              <div
                className={flex({
                  align: "center",
                  gap: 3,
                })}
              >
                {isChecked ? (
                  <div
                    className={flex({
                      align: "center",
                      justify: "center",
                      inlineSize: "48px",
                      blockSize: "48px",
                      position: "relative",
                    })}
                  >
                    <Circle size={48} color="#10b981" fill="#10b981" />
                    <div
                      className={css({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      })}
                    >
                      <Check size={28} strokeWidth={4} className={css({ color: "white" })} />
                    </div>
                  </div>
                ) : (
                  <Circle size={48} className={css({ color: "gray.100" })} />
                )}
                <span
                  className={css({
                    fontSize: "h4",
                    fontWeight: "bold",
                    color: isChecked ? "primary.700" : "gray.800",
                  })}
                >
                  パターン{pattern.id}
                </span>
              </div>

              <div
                className={css({
                  fontSize: "caption",
                  color: "gray.600",
                  padding: "4px 8px",
                  backgroundColor: "gray.100",
                  borderRadius: "6px",
                  width: "fit-content",
                })}
              >
                エネルギーが落ちる年: {pattern.energyDownYear}
              </div>

              <div
                className={flex({
                  direction: "column",
                  gap: 2,
                })}
              >
                <div
                  className={css({ fontSize: "smallest", color: "gray.500", fontWeight: "medium" })}
                >
                  エネルギーUP色
                </div>
                <div
                  className={css({
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 2,
                  })}
                >
                  <ColorPill label="自分色" name={pattern.energyUpColors.myself} />
                  <ColorPill label="やる気色" name={pattern.energyUpColors.motivation} />
                  <ColorPill label="精神安定色" name={pattern.energyUpColors.mentalStability} />
                  <ColorPill label="決断色" name={pattern.energyUpColors.decision} />
                  <ColorPill label="健康色" name={pattern.energyUpColors.health} />
                  <ColorPill label="経済色" name={pattern.energyUpColors.economy} />
                </div>
              </div>

              <div
                className={flex({
                  align: "center",
                  gap: 2,
                  paddingTop: 2,
                  borderTop: "1px dashed",
                  borderColor: "gray.200",
                })}
              >
                <span className={css({ fontSize: "smallest", color: "gray.500" })}>タブー色:</span>
                <SimpleColorPill name={pattern.tabooColor} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
