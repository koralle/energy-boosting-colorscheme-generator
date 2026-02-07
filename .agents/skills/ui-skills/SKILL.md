---
name: ui-skills
description: エージェントによるより良いインターフェース構築のための推奨制約
---

# UIスキル

このスキルが呼び出された際は、より良いインターフェースを構築するための以下の推奨制約を適用してください。

## 使い方

- `/ui-skills`  
  この会話におけるすべてのUI作業にこれらの制約を適用します。

- `/ui-skills <file>`  
  ファイルを以下のすべての制約に照らしてレビューし、次を出力します：
  - 違反箇所（正確な行/スニペットを引用）
  - 重要な理由（1つの短い文で）
  - 具体的な修正案（コードでの実装例）

## 技術スタック

- MUST: 主要なスタイリングシステムとして Panda CSS（`css`, `cva`）を使用する
- MUST: `panda.config.ts` の既存デザイントークン/セマンティックトークンを優先する
- SHOULD: 生の値を追加する前に、既存の text style と spacing token を再利用する
- MUST: インタラクティブ要素は `@base-ui/react` のプリミティブを最優先で使う
- MUST: JavaScript でアニメーションが必要な場合は `motion/react`（旧称 `framer-motion`）を使う
- MUST: Tailwind 固有のユーティリティ前提ルールをこのプロジェクトに持ち込まない

## コンポーネント

- MUST: キーボード/フォーカス挙動にはアクセシブルなプリミティブを使う（`@base-ui/react` を優先）
- MUST: 既存のコンポーネントプリミティブを最初に検討する
- SHOULD: 再利用可能な複数バリアントのコンポーネントには Panda CSS の recipe（`cva` / recipe patterns）を使う
- NEVER: 同じ操作面で複数のプリミティブシステムを混在させない
- SHOULD: 互換性がある場合、新規プリミティブは [`Base UI`](https://base-ui.com/react/components) を優先する
- MUST: アイコンのみのボタンには `aria-label` を付与する
- NEVER: 明示的な要求がない限り、キーボード/フォーカス挙動を手実装しない

## インタラクション

- MUST: 破壊的・不可逆な操作には `AlertDialog` を使う
- SHOULD: ローディング状態には構造を保つスケルトンを使う
- NEVER: 全高レイアウトを `100vh` 前提にしない（`dvh`, `svh` などを優先）
- MUST: 固定要素では `safe-area-inset` を考慮する
- MUST: エラーは操作が発生した場所の近くに表示する
- NEVER: `input` / `textarea` でペーストを禁止しない

## アニメーション

- NEVER: 明示的な要求がない限りアニメーションを追加しない
- MUST: アニメーション対象は compositor プロパティ（`transform`, `opacity`）に限定する
- NEVER: レイアウトプロパティ（`width`, `height`, `top`, `left`, `margin`, `padding`）をアニメーションしない
- SHOULD: `background` / `color` など paint コストの高いプロパティは、小さく局所的な UI（文字・アイコン）以外では避ける
- SHOULD: 入場アニメーションは `ease-out` を使う
- NEVER: インタラクションのフィードバックを `200ms` 超にしない
- MUST: ループアニメーションは画面外で停止する
- SHOULD: `prefers-reduced-motion` を尊重する
- NEVER: 明示的な要求がない限り独自 easing カーブを導入しない
- SHOULD: 大きな画像や全画面サーフェスのアニメーションを避ける

## タイポグラフィ

- MUST: 見出し/本文の長文は読みやすい折り返しを使う（`textWrap: "balance"` / `"pretty"`）
- MUST: 数値データには等幅数字を使う（`fontVariantNumeric: "tabular-nums"`）
- SHOULD: 密度の高い UI では省略表示や行数制限（Panda CSS の `truncate` / `lineClamp`）を使う
- NEVER: 明示的な要求がない限り `letterSpacing` を変更しない
- Note: Panda CSS のスタイルオブジェクトでは、プロパティ名は camelCase を使う（例: `marginInline`）

## レイアウト

- SHOULD: 一貫した `z-index` スケールを使い、場当たり的な重ね順を作らない
- MUST: タップ可能な操作要素のタッチターゲットは最低 `44px` を確保する
- SHOULD: 可能な場合は論理プロパティ（`inline-size`, `block-size`, `margin-inline` など）を優先する

## パフォーマンス

- NEVER: 大きな `blur()` / `backdrop-filter` 面をアニメーションしない
- NEVER: 実行中アニメーション以外で `will-change` を常用しない
- NEVER: レンダリングロジックで表現できる処理に `useEffect` を使わない

## 印刷

- MUST: 印刷出力がある場合は `@media print` で印刷用スタイルを提供する
- MUST: 印刷時は非印刷 UI コントロールを隠し、`.print-area` の出力を優先する
- SHOULD: 印刷時は可読性とインク効率のために shadow/transition を削減する

## デザイン

- SHOULD: 新しい UI は既存の warm gold/gray トークン体系に合わせる
- SHOULD: 場当たり的な hex 値よりトークン化された色を優先する
- NEVER: グロー効果を主要なアフォーダンスとして使わない
- SHOULD: 現在のビジュアル言語に合う控えめな影を使う
- MUST: 空状態には、次に取るべき行動を 1 つ明確に示す
- SHOULD: アクセントカラーの使用は 1 画面あたり 1 色を目安にする
- SHOULD: 新規トークン追加より先に既存テーマトークンを使う
