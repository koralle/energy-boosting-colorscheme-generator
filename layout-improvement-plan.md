# 共通レイアウト改善計画

## 完了済み

### ✅ Devtools常時描画の修正
- **ファイル**: `src/routes/__root.tsx`
- **修正**: `import.meta.env.DEV` で条件分岐
- **内容**: 本番ビルドでDevtoolsを描画しないように変更

### ✅ Flexレイアウト構造の修正
- **ファイル**: `src/components/Layout.tsx`
- **修正**: Layoutラッパーにflexコンテナ追加
- **内容**:
  - `minBlockSize: "100svh"`
  - `display: "flex"`
  - `flexDirection: "column"`
- **効果**: `main`の`flex: 1`が有効になり、Footerが最下部に固定される

---

## 残課題

### 中優先度（次回リファクタリング時）

#### 5. カラーコントラストの確認
- **優先度**: 中
- **対象**:
  - Headerテキスト: `oklch(0.35 0.016 90)` vs 背景 `color(srgb 1 1 1 / 0.8)`
  - Footerテキスト: `oklch(0.35 0.016 90)` vs 透明背景
- **アクション**:
  - WebAIM Contrast Checker等でコントラスト比を確認
  - WCAG AA（4.5:1以上）準拠チェック
- **成功基準**: 全テキストがWCAG AA準拠

#### 6. Footerスタイルの改善
- **優先度**: 中
- **ファイル**: `src/components/Layout.tsx`
- **修正内容**:
  ```tsx
  <footer
    className={css({
      paddingY: 2,
      paddingX: "fluidXs",        // 追加
      borderTopWidth: "1px",
      borderTopColor: "gray.100",
      backgroundColor: "gray.50", // 追加
    })}
  >
  ```
- **効果**: 横パディングの統一、背景色で境界明確化

#### 7. Headerテキストの強調
- **優先度**: 中
- **ファイル**: `src/components/Layout.tsx`
- **修正内容**:
  ```tsx
  <p className={css({
    fontSize: { base: "base", md: "lg" }, // レスポンシブ
    fontWeight: "semibold",                 // 追加
  })}>
    鑑定ツール
  </p>
  ```
- **効果**: 視覚的階層の明確化

#### 8. zIndexのマジックナンバー置換
- **優先度**: 中
- **ファイル**: `src/components/Layout.tsx`
- **修正内容**:
  ```tsx
  zIndex: "sticky" // Pandaトークンへ置換（zIndex: 100 → ）
  ```
- **効果**: トークン管理の一貫性、衝突リスク低減
- **注意**: Pandaの`zIndex`トークン定義を確認

#### 9. Google Fontsの最適化
- **優先度**: 中
- **ファイル**: `src/routes/__root.tsx`
- **現状**: 2本リクエスト（Cormorant Garamond + Noto Sans JP）
- **改善案**:
  - 1本のリクエストに統合
  - または`@import`での読み込み
- **効果**: 初期表示（LCP）の改善

---

### 低優先度（将来的改善）

#### 10. コンテンツ最大幅の検討
- **優先度**: 低
- **現状**: 1000px
- **課題**: PC画面（1920px）で左右余白が大きすぎる（約460px）
- **改善案**: PC画面で最大幅を広げる
- **注意**: A4プレビュー画面の確認が必要

#### 11. Panda CSSクラスホイスティング
- **優先度**: 低
- **ファイル**: `src/components/Layout.tsx`
- **現状**: `css({...})`を関数内で毎回呼び出し
- **改善案**: 静的クラスをコンポーネント外へ移動
  ```tsx
  const headerClass = css({
    position: "sticky",
    // ...
  });

  function Header() {
    return <header className={headerClass}>...</header>;
  }
  ```
- **効果**: 可読性向上、パフォーマンス改善（規模増大時）

---

## 実装順序の推奨

1. **カラーコントラストの確認** (アクセシビリティの基礎)
2. **Footerスタイルの改善** (視認性向上)
3. **Headerテキストの強調** (情報階層の明確化)
4. **zIndexのマジックナンバー置換** (コード品質向上)
5. **Google Fontsの最適化** (パフォーマンス改善)

---

## 実装前の確認事項

- [ ] Pandaの`zIndex`トークン定義を確認
- [ ] 各ページでのHeader使用状況を確認（複数Headerがあるか）
- [ ] A4プレビュー画面での最大幅確認
- [ ] WebAIM Contrast Checkerでコントラスト比測定

---

## メモ

### ロールバックした項目
- **ランドマークの多重化対応**:
  - `role="banner"` / `role="contentinfo"` の明示的な追加はロールバック
  - 理由: Biomeが警告を発するため
  - 現状: `<header>` / `<footer>` の暗黙roleで十分機能する
  - 将来的に各ページに独自Headerを追加する場合のみ必要

### スキップした項目
- **Headerと通知の干渉**:
  - 通知自体を後で削除する予定
  - 実装不要
