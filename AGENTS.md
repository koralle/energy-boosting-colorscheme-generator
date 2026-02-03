# AGENTS.md

## 業務仕様

業務仕様については @docs/business-requirements.md をみて下さい。

## 要件

要件については @docs/requirements.md をみてください。

## 設計プロセスについて

設計プロセスについてはモデルベースUIデザインを採用しています。  
詳細については @docs/model-based-ui-design をみて下さい。

---

## 開発コマンド

### ビルド・開発

- `bun run build` - 本番ビルド
- `bun run dev` - 開発サーバー起動
- `bun run preview` - プレビュー

### リント・フォーマット

- `bun run check` - Biomeによるリントチェック
- `bun run check:fix` - 自動修正ありのリント

### 型チェック

- `bun run typecheck` - TypeScript型チェック（Cloudflare型生成を含む）

### テスト

- `bun run test` - Vitestでテスト実行（watchモード）
- `bun run test:run` - テストを単一実行
- `bun run test:ui` - Vitest UIでテスト実行
- `bun run test:coverage` - カバレッジ付きテスト実行
- `bun run test <テストファイルパス>` - 単一テスト実行例: `bun run test src/routes/index.test.tsx`

### デプロイ

- `bun run deploy` - Cloudflare Workersへデプロイ

---

## コードスタイルガイドライン

### Biome設定

- **インデント**: スペース2文字
- **行幅**: 100文字
- **推奨ルール**: enabled（`recommended: true`）
- **対象ファイル**: `src/**/*.{ts,tsx}`、設定ファイル（`*.json`）、CSS
- **除外ファイル**: `worker-configuration.d.ts`、`src/routeTree.gen.ts`（生成ファイル）

詳細は @biome.jsonc をみて下さい。

### TypeScript設定

- `@tsconfig/strictest` を使用した厳格な型チェック
- ES2022ターゲット、React JSX
- `exactOptionalPropertyTypes: false`（オプショナルプロパティは緩和）

### インポート順序

```typescript
// 1. 外部ライブラリ
import { createFileRoute } from "@tanstack/react-router";

// 2. 内部モジュール
import { getRouter } from "./router";
```

### ファミリング規約

- コンポーネント: `PascalCase`（例: `RouteComponent`）
- 関数: `camelCase`（例: `getRouter`）
- 定数: `UPPER_SNAKE_CASE`（例: `const MAX_RETRY_COUNT`）
- ファイル名: `kebab-case.ts`、コンポーネントは `PascalCase.tsx`

### Reactコンポーネント

```typescript
// 関数コンポーネントを優先
function RouteComponent() {
  return <div>...</div>;
}

// 型定義は明示的に
const RootDocument = ({ children }: { children: ReactNode }) => {
  return <html lang="ja">{children}</html>;
};
```

### ルーティング

- TanStack Routerのファイルベースルーティング
- `createFileRoute`、`createRootRoute` を使用
- `Route` 定数でルートをエクスポート

### エラーハンドリング

- 例外は明示的に型付け
- 非同期処理では適切なエラー境界を設置

### テスト

- Vitest + Playwright Browser Mode
- テストファイル: `*.test.tsx` または `*.spec.tsx`
- `src/test/setup.ts` をセットアップファイルとして使用
- グローバル Vitest APIを有効化

### Storybook

- `bun run storybook` - Storybook開発サーバー
- `bun run build-storybook` - Storybookビルド

---

## ドメイン用語集

| 用語 | Code名 | 説明 |
| :--- | :--- | :--- |
| 鑑定パターン | `AppraisalPattern` | 1〜12の番号で管理される鑑定結果の分類 |
| 鑑定書 | `AppraisalReport` | 最終的な成果物ドキュメント |
| 鑑定書の雛形 | `ReportTemplate` | 本システムが出力する印刷物（一部項目は空白） |
| エネルギーUP色 | `EnergyUpColor` | 縁起のいい色の総称（7種類） |
| 守護色 | `GuardianColor` | パターンに依存しない、個別に特定される色（手書き項目） |
| 自分色 | `SelfColor` | 自分の魅力を引き出す色 |
| やる気色 | `MotivationColor` | やる気が出る色 |
| 精神安定色 | `StableColor` | 精神を安定させる色 |
| 決断色 | `DecisionColor` | 大きな決断時に身につけると良い色 |
| 健康色 | `HealthColor` | 健康に導く色 |
| 経済色 | `EconomicColor` | 金運に関する色 |
| エネルギーが落ちる年 | `EnergyLowYear` | 運気が下がるとされる時期 |
| タブー色（薬色） | `TabooColor` | アンラッキーカラー（エネルギーが落ちる年は薬色として使用可） |
| インテリアアドバイス | `InteriorAdvice` | 能力を引き出すインテリアに関する助言（12パターン） |

---

## 画面構成

### 画面遷移
`選択画面` → `プレビュー画面` → `完了画面`

### 1. 入力画面（選択画面）
- 12個の鑑定パターンカードを表示
- 各カード: パターン番号、エネルギーが落ちる年、主要な色
- カードタップでプレビュー画面へ遷移

### 2. プレビュー画面
- 戻るボタン（入力画面へ）
- A4用紙の縮小イメージ表示（ピンチイン・アウト可）
- 印刷ボタン（ブラウザ印刷ダイアログ起動 → 完了画面へ）

### 3. 完了画面
- 「印刷が完了しました」メッセージ
- 「次の人を鑑定する（トップへ戻る）」ボタン

### レスポンシブ方針
- **共通**: タッチサイズmin 44px、モバイルファースト
- **入力画面**: モバイル1-2カラム、PC 3-4カラムグリッド
- **印刷用CSS**: ヘッダー/フッター/ボタン非表示、`.print-area`のみA4で表示

---

## ディレクトリ構造

```
src/
├── routes/       # ルーティング定義
├── test/         # テストセットアップ
└── *.tsx, *.ts   # コンポーネント・ユーティリティ
```

## 相談ルール

- **重要**:
  - 作業開始時には必ずClaude Codeに作業計画をレビューしてもらう
  - 作業完了時には必ずClaude Codeに作業に不備/不足がないかチェックしてもらう

上記以外にも作業中に以下のような状況に直面した場合は、Claude Codeに相談する:

- 作業の遂行に問題が発生した
- 複数の選択肢があり判断に迷っている
- エラーや予期しない動作の原因が特定できない

- **注意**:
  あなたとClaude Codeは特性の異なる優秀なエンジニアです。Claude Codeに相談する際は以下を意識してください：
  - Claude Codeの提案を鵜呑みにせず、その根拠や理由を理解する
  - 自分の分析結果とClaude Codeの意見が異なる場合は、双方の視点を比較検討する
  - 最終的な判断は、両者の意見を総合的に評価した上で、自分で下す
  Claude Codeを呼び出す際はclaude-managerを通じてタスクを依頼してください。

## Web検索やWebリソース取得の方法

Web検索やWebリソースの取得が必要になった時は、gemini-managerを通じてGemini CLIにタスクを依頼してください。

## questionツールの使用について

不明点を残した状態で作業を開始しないでください。  
不明点がなくなるまで、questionツールを使用してユーザーに質問を繰り返してください。
