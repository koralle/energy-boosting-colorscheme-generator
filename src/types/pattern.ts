import * as v from "valibot";

/**
 * エネルギーUP色の種類
 */
export const energyUpColorTypeSchema = v.union([
  v.literal("自分色"),
  v.literal("やる気色"),
  v.literal("精神安定色"),
  v.literal("決断色"),
  v.literal("健康色"),
  v.literal("経済色"),
]);
export type EnergyUpColorType = v.InferOutput<typeof energyUpColorTypeSchema>;

/**
 * 色の定義
 */
export const colorNameSchema = v.union([
  v.literal("ピンク"),
  v.literal("レッド"),
  v.literal("ベージュ"),
  v.literal("ブラウン"),
  v.literal("パープル"),
  v.literal("イエロー"),
  v.literal("イエローグリーン"),
  v.literal("ワイン"),
  v.literal("ネイビーブルー"),
  v.literal("ブラック"),
  v.literal("グリーン"),
  v.literal("ブルー"),
  v.literal("グレー"),
  v.literal("ディープグリーン"),
]);
export type ColorName = v.InferOutput<typeof colorNameSchema>;

/**
 * タブー色（薬色）
 */
export const tabooColorSchema = v.union([
  v.literal("ブルー"),
  v.literal("グリーン"),
  v.literal("イエロー"),
  v.literal("レッド"),
  v.literal("ブラウン"),
  v.literal("パープル"),
]);
export type TabooColor = v.InferOutput<typeof tabooColorSchema>;

/**
 * エネルギーが落ちる年
 */
export const energyDownYearSchema = v.union([
  v.literal("子、丑、-"),
  v.literal("子、丑、+"),
  v.literal("寅、卯、+"),
  v.literal("寅、卯、-"),
  v.literal("辰、巳、+"),
  v.literal("辰、巳、-"),
  v.literal("午、未、+"),
  v.literal("午、未、-"),
  v.literal("申、酉、+"),
  v.literal("申、酉、-"),
  v.literal("戌、亥、+"),
  v.literal("戌、亥、-"),
]);
export type EnergyDownYear = v.InferOutput<typeof energyDownYearSchema>;

/**
 * インテリアアドバイスのパターン番号（1〜12）
 */
export const interiorPatternNumberSchema = v.union([
  v.literal(1),
  v.literal(2),
  v.literal(3),
  v.literal(4),
  v.literal(5),
  v.literal(6),
  v.literal(7),
  v.literal(8),
  v.literal(9),
  v.literal(10),
  v.literal(11),
  v.literal(12),
]);
export type InteriorPatternNumber = v.InferOutput<typeof interiorPatternNumberSchema>;

/**
 * パターン番号（1〜12）
 */
export const patternIdSchema = v.union([
  v.literal(1),
  v.literal(2),
  v.literal(3),
  v.literal(4),
  v.literal(5),
  v.literal(6),
  v.literal(7),
  v.literal(8),
  v.literal(9),
  v.literal(10),
  v.literal(11),
  v.literal(12),
]);
export type PatternId = v.InferOutput<typeof patternIdSchema>;

/**
 * エネルギーUP色の組み合わせ
 */
export const energyUpColorsSchema = v.object({
  /** 自分色 */
  myself: colorNameSchema,
  /** やる気色 */
  motivation: colorNameSchema,
  /** 精神安定色 */
  mentalStability: colorNameSchema,
  /** 決断色 */
  decision: colorNameSchema,
  /** 健康色 */
  health: colorNameSchema,
  /** 経済色 */
  economy: colorNameSchema,
});
export type EnergyUpColors = v.InferOutput<typeof energyUpColorsSchema>;

/**
 * パターンデータ
 */
export const patternSchema = v.object({
  /** パターン番号（1〜12） */
  id: patternIdSchema,
  /** エネルギーが落ちる年 */
  energyDownYear: energyDownYearSchema,
  /** エネルギーUP色の組み合わせ */
  energyUpColors: energyUpColorsSchema,
  /** タブー色（薬色） */
  tabooColor: tabooColorSchema,
  /** インテリアアドバイスのパターン番号 */
  interiorPattern: interiorPatternNumberSchema,
});
export type Pattern = v.InferOutput<typeof patternSchema>;

/**
 * 鑑定書の入力データ（アプリケーションで入力・選択するもの）
 */
export const fortuneInputSchema = v.object({
  /** パターン番号 */
  patternId: patternIdSchema,
});
export type FortuneInput = v.InferOutput<typeof fortuneInputSchema>;

/**
 * 鑑定書の手書き項目（印刷後に占い師が記入するもの）
 */
export const fortuneHandwrittenSchema = v.object({
  /** 依頼者の名前 */
  clientName: v.string(),
  /** 依頼者の生年月日 */
  clientBirthdate: v.string(),
  /** 守護色 */
  guardianColor: v.string(),
  /** 今年のラッキーカラー */
  yearlyLuckyColors: v.string(),
  /** 今年のタブーカラー */
  yearlyTabooColors: v.string(),
});
export type FortuneHandwritten = v.InferOutput<typeof fortuneHandwrittenSchema>;

/**
 * 完全な鑑定データ
 */
export const fortuneDataSchema = v.intersect([fortuneInputSchema, fortuneHandwrittenSchema]);
export type FortuneData = v.InferOutput<typeof fortuneDataSchema>;
