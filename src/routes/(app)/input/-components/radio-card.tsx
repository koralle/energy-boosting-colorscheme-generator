import { Radio } from "@base-ui/react/radio";
import { Check, Circle } from "lucide-react";
import { memo } from "react";
import { css } from "../../../../../styled-system/css";
import { flex, grid } from "../../../../../styled-system/patterns";
import { getColorCode, getColorLabel } from "../../../../constants/colors";
import type { Pattern } from "../../../../types/pattern";
import { radioCard } from "../recipes/radio-card.recipe";
import { ColorBadge } from "./color-badge";

const ENERGY_UP_COLOR_ITEMS: ReadonlyArray<{
  key: keyof Pattern["energyUpColors"];
  label: string;
}> = [
  { key: "myself", label: "自分色" },
  { key: "motivation", label: "やる気色" },
  { key: "mentalStability", label: "精神安定色" },
  { key: "decision", label: "決断色" },
  { key: "health", label: "健康色" },
  { key: "economy", label: "経済色" },
];

const RADIO_INDICATOR_HIDDEN_STYLES = {
  display: "none",
} as const;

const CONTENT_COLUMN_STYLES = {
  direction: "column",
  gap: 3,
  height: "100%",
} as const;

const HEADER_ROW_STYLES = {
  align: "center",
  gap: 3,
} as const;

const ENERGY_DOWN_YEAR_STYLES = {
  fontSize: "body",
  color: "gray.950",
  padding: "6px 10px",
  backgroundColor: "gray.100",
  borderRadius: "6px",
  width: "fit-content",
  whiteSpace: "nowrap",
} as const;

const COLOR_LIST_COLUMN_STYLES = {
  direction: "column",
  gap: 2,
  flex: 1,
} as const;

const ENERGY_UP_TITLE_STYLES = {
  fontSize: "caption",
  color: "gray.700",
  fontWeight: "medium",
} as const;

const ENERGY_UP_GRID_STYLES = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gap: 4,
  flex: 1,
} as const;

const TABOO_DIVIDER_STYLES = {
  paddingTop: 3,
  borderTop: "1px dashed",
  borderColor: "gray.200",
} as const;

const PATTERN_TITLE_STYLES = {
  fontSize: "h4",
  fontWeight: "bold",
} as const;

interface RadioIndicatorProps {
  checked: boolean;
}

function RadioIndicator({ checked }: Readonly<RadioIndicatorProps>) {
  if (checked) {
    return (
      <div
        className={grid({
          placeContent: "center",
          inlineSize: "48px",
          blockSize: "48px",
          position: "relative",
        })}
      >
        <Circle
          size={48}
          className={css({
            color: "green.500",
            fill: "green.500",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          })}
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
    );
  }

  return (
    <Circle
      size={48}
      className={css({
        color: "gray.100",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      })}
    />
  );
}

interface RadioCardProps {
  pattern: Pattern;
}

function RadioCardComponent({ pattern }: Readonly<RadioCardProps>) {
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
            className={radioCard({ checked: isChecked })}
          >
            <Radio.Indicator className={css(RADIO_INDICATOR_HIDDEN_STYLES)} />

            <div className={flex(CONTENT_COLUMN_STYLES)}>
              <div className={flex(HEADER_ROW_STYLES)}>
                <RadioIndicator checked={isChecked} />
                <span
                  className={css({
                    ...PATTERN_TITLE_STYLES,
                    color: isChecked ? "primary.700" : "gray.800",
                  })}
                >
                  パターン {pattern.id}
                </span>
              </div>

              <div className={css(ENERGY_DOWN_YEAR_STYLES)}>
                エネルギーが落ちる年: {pattern.energyDownYear}
              </div>

              <div className={flex(COLOR_LIST_COLUMN_STYLES)}>
                <div className={css(ENERGY_UP_TITLE_STYLES)}>エネルギーUP色</div>
                <div className={css(ENERGY_UP_GRID_STYLES)}>
                  {ENERGY_UP_COLOR_ITEMS.map(({ key, label }) => {
                    const colorKey = pattern.energyUpColors[key];
                    return (
                      <ColorBadge
                        key={key}
                        label={label}
                        color={getColorCode(colorKey)}
                        colorName={getColorLabel(colorKey)}
                      />
                    );
                  })}
                </div>
              </div>

              <div className={flex(TABOO_DIVIDER_STYLES)}>
                <ColorBadge
                  label="タブー色"
                  color={getColorCode(pattern.tabooColor)}
                  colorName={getColorLabel(pattern.tabooColor)}
                />
              </div>
            </div>
          </button>
        );
      }}
    />
  );
}

export const RadioCard = memo(RadioCardComponent);
