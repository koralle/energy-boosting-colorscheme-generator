/**
 * エネルギーUP色の種類
 */
export type EnergyUpColorType =
  | "自分色"
  | "やる気色"
  | "精神安定色"
  | "決断色"
  | "健康色"
  | "経済色";

/**
 * 色の定義
 */
export type ColorName =
  | "ピンク"
  | "レッド"
  | "ベージュ"
  | "ブラウン"
  | "パープル"
  | "イエロー"
  | "イエローグリーン"
  | "ワイン"
  | "ネイビーブルー"
  | "ブラック"
  | "グリーン"
  | "ブルー"
  | "グレー"
  | "ディープグリーン"
  | "イエローグリーン";

/**
 * タブー色（薬色）
 */
export type TabooColor = "ブルー" | "グリーン" | "イエロー" | "レッド" | "ブラウン" | "パープル";

/**
 * エネルギーが落ちる年
 */
export type EnergyDownYear =
  | "子、丑、-"
  | "子、丑、+"
  | "寅、卯、+"
  | "寅、卯、-"
  | "辰、巳、+"
  | "辰、巳、-"
  | "午、未、+"
  | "午、未、-"
  | "申、酉、+"
  | "申、酉、-"
  | "戌、亥、+"
  | "戌、亥、-";

/**
 * インテリアアドバイスのパターン番号（1〜12）
 */
export type InteriorPatternNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * エネルギーUP色の組み合わせ
 */
export interface EnergyUpColors {
  /** 自分色 */
  myself: ColorName;
  /** やる気色 */
  motivation: ColorName;
  /** 精神安定色 */
  mentalStability: ColorName;
  /** 決断色 */
  decision: ColorName;
  /** 健康色 */
  health: ColorName;
  /** 経済色 */
  economy: ColorName;
}

/**
 * パターンデータ
 */
export interface Pattern {
  /** パターン番号（1〜12） */
  id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** エネルギーが落ちる年 */
  energyDownYear: EnergyDownYear;
  /** エネルギーUP色の組み合わせ */
  energyUpColors: EnergyUpColors;
  /** タブー色（薬色） */
  tabooColor: TabooColor;
  /** インテリアアドバイスのパターン番号 */
  interiorPattern: InteriorPatternNumber;
}

/**
 * 鑑定書の入力データ（アプリケーションで入力・選択するもの）
 */
export interface FortuneInput {
  /** パターン番号 */
  patternId: Pattern["id"];
}

/**
 * 鑑定書の手書き項目（印刷後に占い師が記入するもの）
 */
export interface FortuneHandwritten {
  /** 依頼者の名前 */
  clientName: string;
  /** 依頼者の生年月日 */
  clientBirthdate: string;
  /** 守護色 */
  guardianColor: string;
  /** 今年のラッキーカラー */
  yearlyLuckyColors: string;
  /** 今年のタブーカラー */
  yearlyTabooColors: string;
}

/**
 * 完全な鑑定データ
 */
export type FortuneData = FortuneInput & FortuneHandwritten;
