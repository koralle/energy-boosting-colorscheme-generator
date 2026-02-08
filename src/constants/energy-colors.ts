export const ENERGY_COLOR_DEFINITIONS = {
  pink: { hex: "#ffb6c1", labelJa: "ピンク" },
  red: { hex: "#e57373", labelJa: "レッド" },
  beige: { hex: "#d7ccc8", labelJa: "ベージュ" },
  brown: { hex: "#a1887f", labelJa: "ブラウン" },
  purple: { hex: "#ce93d8", labelJa: "パープル" },
  yellow: { hex: "#fff176", labelJa: "イエロー" },
  yellowGreen: { hex: "#dcedc8", labelJa: "イエローグリーン" },
  wine: { hex: "#ba68c8", labelJa: "ワイン" },
  navyBlue: { hex: "#5c6bc0", labelJa: "ネイビーブルー" },
  black: { hex: "#78909c", labelJa: "ブラック" },
  green: { hex: "#a5d6a7", labelJa: "グリーン" },
  blue: { hex: "#90caf9", labelJa: "ブルー" },
  gray: { hex: "#b0bec5", labelJa: "グレー" },
  deepGreen: { hex: "#66bb6a", labelJa: "ディープグリーン" },
} as const;

type EnergyColorKey = keyof typeof ENERGY_COLOR_DEFINITIONS;

export const ENERGY_COLOR_KEYS = Object.keys(ENERGY_COLOR_DEFINITIONS) as [
  EnergyColorKey,
  ...EnergyColorKey[],
];
