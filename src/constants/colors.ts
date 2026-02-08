import type { ColorName } from "../types/pattern";

/**
 * 色の定義
 *
 * 印刷時のインク消費を抑えるため、パステル調の配色を使用
 * 各色は「鮮やかさ」と「インク節約」のバランスを考慮して調整
 */
export const COLOR_PALETTE: Record<ColorName, { hex: string; description?: string }> = {
  // ピンク系
  ピンク: { hex: "#FFB6C1", description: "柔らかなピンク" },

  // レッド系
  レッド: { hex: "#E57373", description: "優しい赤" },
  ワイン: { hex: "#BA68C8", description: "ワインレッド（紫がかった赤）" },

  // イエロー系
  イエロー: { hex: "#FFF176", description: "柔らかな黄色" },
  イエローグリーン: { hex: "#DCEDC8", description: "黄緑" },

  // ブラウン系
  ベージュ: { hex: "#D7CCC8", description: "ベージュ" },
  ブラウン: { hex: "#A1887F", description: "ブラウン" },

  // パープル系
  パープル: { hex: "#CE93D8", description: "紫" },

  // ブルー系
  ブルー: { hex: "#90CAF9", description: "空色" },
  ネイビーブルー: { hex: "#5C6BC0", description: "ネイビー" },

  // グリーン系
  グリーン: { hex: "#A5D6A7", description: "緑" },
  ディープグリーン: { hex: "#66BB6A", description: "深緑" },

  // その他
  ブラック: { hex: "#78909C", description: "グレイッシュブラック" },
  グレー: { hex: "#B0BEC5", description: "グレー" },
} as const;

/**
 * 色名からカラーコードを取得するヘルパー関数
 */
export function getColorCode(colorName: ColorName): string {
  return COLOR_PALETTE[colorName]?.hex || "#CCCCCC";
}

/**
 * 色名から色の説明を取得するヘルパー関数
 */
export function getColorDescription(colorName: ColorName): string | undefined {
  return COLOR_PALETTE[colorName]?.description;
}

/**
 * 全ての色名を取得するヘルパー関数
 */
export function getAllColorNames(): ColorName[] {
  return Object.keys(COLOR_PALETTE) as ColorName[];
}
