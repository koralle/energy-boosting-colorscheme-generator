# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

占い師が依頼者の鑑定を行うための鑑定書の作成を支援するWebアプリケーションを開発します。

## 開発コマンド
```bash
# 開発サーバーの起動
bun run dev  # または npm run dev

# 型チェック
npm run typecheck

# リント/フォーマットチェック
npm run check
npm run check:fix  # 自動修正

# ビルド
npm run build  # または bun run build

# Cloudflare Pages へデプロイ
npm run deploy

# Cloudflare Workers の型生成
npm run cf-typegen
```

## アーキテクチャ

### React Router v7 + Cloudflare Pages

- **SSR**: 有効 (`react-router.config.ts`)
- **ルーティング**: `app/routes.ts` でファイルベースルーティングを定義
- **Cloudflare統合**: `workers/app.ts` がエントリーポイントで、`context.cloudflare.env`/`context.cloudflare.ctx` 経由でCloudflare環境にアクセス

### TypeScript設定

- プロジェクト参照を使用: `tsconfig.json` → `tsconfig.cloudflare.json` / `tsconfig.node.json`
- strictest モード (`@tsconfig/strictest`)
- `worker-configuration.d.ts` は自動生成されるファイル（Wrangler経由）

### ルート構造

```
app/
├── routes.ts          # ルーティング設定
├── root.tsx           # ルートレイアウト
├── entry.server.tsx   # SSR エントリーポイント
└── routes/
    └── home.tsx       # ページコンポーネント
```

### 重要な設定ファイル

- `wrangler.jsonc`: Cloudflare Workers/Pages の設定（環境変数 `vars` をここで定義）
- `biome.jsonc`: リンター/フォーマッター設定（インデント:スペース2、行幅:100）

### ルートの型定義

React Router v7 では各ルートファイルに対応する型ファイルが自動生成されます:
- `app/routes/home.tsx` → `app/routes/+types/home.ts`

## 環境変数

Cloudflare環境変数は `wrangler.jsonc` の `vars` で定義:
```json
"vars": {
  "VALUE_FROM_CLOUDFLARE": "Hello from Cloudflare"
}
```

ルーターローダー内で `context.cloudflare.env.VARIABLE_NAME` でアクセス可能。

## パッケージマネージャー

Bun を使用（`package.json` のスクリプトで `bun run` を使用、ローカル開発も想定）
