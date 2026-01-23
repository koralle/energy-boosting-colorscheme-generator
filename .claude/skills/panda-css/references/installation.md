# Installation Reference

Panda CSSの各フレームワークでのセットアップリファレンスです。

## Quick Start

基本的なインストール手順：

```bash
# インストール
npm install -D @pandacss/dev

# 設定ファイルを生成
npx panda init

# 開発サーバーを起動
npm run dev
```

## Framework Setup

### Next.js

```bash
npm install -D @pandacss/dev
npx panda init
```

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Next.js用の設定
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: []
})
```

```tsx
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {}
  }
}
module.exports = nextConfig
```

```tsx
// pages/_app.tsx or app/layout.tsx
import 'styled-system/styles.css'
```

### React (Vite)

```bash
npm install -D @pandacss/dev
npx panda init
```

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}']
})
```

```tsx
// src/main.tsx
import 'styled-system/styles.css'
```

### Vue

```bash
npm install -D @pandacss/dev
npx panda init
```

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{vue,ts,tsx}']
})
```

```vue
<!-- src/main.ts -->
<script setup lang="ts">
import 'styled-system/styles.css'
</script>
```

### Nuxt

```bash
npm install -D @pandacss/dev
npx panda init
```

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./**/*.{vue,ts,tsx}'],
  outdir: 'styled-system'
})
```

```tsx
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['~/styled-system/styles.css']
})
```

### Svelte

```bash
npm install -D @pandacss/dev
npx panda init
```

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{svelte,ts,tsx}']
})
```

```tsx
// src/App.svelte
<script lang="ts">
  import 'styled-system/styles.css'
</script>
```

### SolidJS

```bash
npm install -D @pandacss/dev
npx panda init
```

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{tsx,jsx}']
})
```

```tsx
// src/index.tsx
import 'styled-system/styles.css'
```

### Astro

```bash
npx astro add panda
```

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{astro,ts,tsx}']
})
```

```tsx
// src/layouts/Layout.astro
---
import 'styled-system/styles.css'
---
```

### Remix

```bash
npm install -D @pandacss/dev
npx panda init
```

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./app/**/*.{ts,tsx}']
})
```

```tsx
// app/root.tsx
import 'styled-system/styles.css'

export default function App() {
  return <html><body /></html>
}
```

### Gatsby

```bash
npm install -D @pandacss/dev
npx panda init
```

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}']
})
```

```tsx
// gatsby-browser.js & gatsby-ssr.js
import 'styled-system/styles.css'
```

## PostCSS Setup

PostCSS経由で使用する場合：

```bash
npm install -D @pandacss/dev postcss
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    '@pandacss/dev/postcss': {}
  }
}
```

## CLI Usage

Panda CLIのコマンド一覧：

```bash
# 初期化
npx panda init

# CSSを生成
npx panda

# 監視モードで実行
npx panda --watch

# コードを生成
npx panda codegen

# デバッグ情報を表示
npx panda debug

# 設定を確認
npx panda config
```

## Package.json Scripts

推奨されるスクリプト設定：

```json
{
  "scripts": {
    "prepare": "panda codegen",
    "dev": "panda --watch & vite dev",
    "build": "panda && vite build"
  }
}
```

## Common Issues

### 型エラーが発生する

**解決策**: `tsconfig.json` に `styled-system` を追加

```json
{
  "compilerOptions": {
    "paths": {
      "styled-system/*": ["./styled-system/*"]
    }
  }
}
```

### HMRが動作しない

**解決策**: `dependencies` オプションを追加

```tsx
export default defineConfig({
  dependencies: ['src/theme/**/*']
})
```

### CSSが適用されない

**解決策**: `styles.css` がインポートされているか確認

```tsx
import 'styled-system/styles.css'
```

### パスエイリアスが動作しない

**解決策**: `importMap` オプションを使用

```tsx
export default defineConfig({
  importMap: '@/*'
})
```
