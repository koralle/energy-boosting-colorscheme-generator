import { Radio } from "@base-ui/react/radio";
import { Check, Circle } from "lucide-react";
import { css } from "../../../../../styled-system/css";
import { flex } from "../../../../../styled-system/patterns";
import { getColorCode } from "../../../../constants/colors";
import type { ColorName, Pattern } from "../../../../types/pattern";

function ColorPill({ label, name }: { label: string; name: ColorName }) {
  return (
    <div
      className={flex({
        direction: "column",
        gap: 1,
        height: "100%",
      })}
    >
      <span
        className={css({
          fontSize: "body",
          color: "gray.600",
          height: "20px",
          display: "flex",
          alignItems: "center",
        })}
      >
        {label}
      </span>
      <div
        className={flex({
          align: "center",
          gap: 2,
          height: "28px",
        })}
      >
        <span
          className={css({
            inlineSize: "32px",
            blockSize: "32px",
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
          inlineSize: "24px",
          blockSize: "24px",
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
      value={String(pattern.id)}
      render={(props, state) => {
        const isChecked = state.checked;

        return (
          <button
            {...props}
            type="button"
            aria-label={`パターン ${pattern.id}`}
            className={flex({
              direction: "column",
              padding: 3,
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: isChecked ? "primary.500" : "gray.300",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              backgroundColor: isChecked ? "primary.50" : "white",
              textAlign: "start",
              boxShadow: isChecked
                ? "0 4px 6px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.1)"
                : "0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.06)",
              _hover: {
                borderColor: isChecked ? "primary.600" : "gray.400",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.1)",
                transform: "translateY(-2px)",
              },
              _active: {
                transform: "translateY(0)",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.06)",
              },
              _focusVisible: {
                outline: "2px solid",
                outlineColor: "gray.600",
                outlineOffset: "2px",
              },
              "@media (prefers-reduced-motion: reduce)": {
                transition: "none",
                transform: "none !important",
              },
            })}
          >
            <Radio.Indicator className={css({ display: "none" })} />

            <div
              className={flex({
                direction: "column",
                gap: 3,
                height: "100%",
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
                    <Circle
                      size={48}
                      color="primary.500"
                      fill="primary.500"
                      className={css({ transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)" })}
                    />
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
                  <Circle
                    size={48}
                    className={css({
                      color: "gray.100",
                      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    })}
                  />
                )}
                <span
                  className={css({
                    fontSize: "h4",
                    fontWeight: "bold",
                    color: isChecked ? "primary.700" : "gray.800",
                  })}
                >
                  パターン {pattern.id}
                </span>
              </div>

              <div
                className={css({
                  fontSize: "body",
                  color: "gray.950",
                  padding: "6px 10px",
                  backgroundColor: "gray.100",
                  borderRadius: "6px",
                  width: "fit-content",
                  whiteSpace: "nowrap",
                })}
              >
                エネルギーが落ちる年: {pattern.energyDownYear}
              </div>

              <div
                className={flex({
                  direction: "column",
                  gap: 2,
                  flex: 1,
                })}
              >
                <div
                  className={css({ fontSize: "caption", color: "gray.700", fontWeight: "medium" })}
                >
                  エネルギーUP色
                </div>
                <div
                  className={css({
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridTemplateRows: "repeat(3, 1fr)",
                    gap: 2,
                    flex: 1,
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
                <span className={css({ fontSize: "caption", color: "gray.700" })}>タブー色:</span>
                <SimpleColorPill name={pattern.tabooColor} />
              </div>
            </div>
          </button>
        );
      }}
    />
  );
}
