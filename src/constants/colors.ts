import { token } from "../../styled-system/tokens";
import type { ColorKey } from "../types/pattern";
import { ENERGY_COLOR_DEFINITIONS, ENERGY_COLOR_KEYS } from "./energy-colors";

/**
 * 色キーからカラーコードを取得するヘルパー関数
 */
export function getColorCode(colorKey: ColorKey): string {
  const colorCode = token(`colors.energy.${colorKey}`);

  if (!colorCode) {
    throw new Error(`Missing color token: colors.energy.${colorKey}`);
  }

  return colorCode;
}

/**
 * 色キーから表示ラベルを取得するヘルパー関数
 */
export function getColorLabel(colorKey: ColorKey): string {
  const definition = ENERGY_COLOR_DEFINITIONS[colorKey];

  if (!definition) {
    throw new Error(`Missing color definition: ${colorKey}`);
  }

  return definition.labelJa;
}

/**
 * 全ての色キーを取得するヘルパー関数
 */
export function getAllColorKeys(): ColorKey[] {
  return [...ENERGY_COLOR_KEYS];
}
