---
name: panda-css
description: Panda CSS for styling UI components, design systems, and theming. Use when Claude needs to work with Panda CSS for: (1) Creating styled components with css/styled factory functions, (2) Implementing responsive design with breakpoints and container queries, (3) Configuring themes, design tokens, and semantic tokens, (4) Building consistent design systems with recipes and patterns, (5) Adding animations and transitions, or any other styling tasks in projects using Panda CSS
---

# Panda CSS

Panda CSSは、CSS-in-JSの開発者体験とアトミックCSSのパフォーマンスを組み合わせたスタイリングエンジンです。型安全で、ビルド時に静的解析からCSSを生成します。

## Quick Start

### 基本的なスタイリング

```tsx
// css関数を使用
import { css } from 'styled-system/css'

<div className={css({ color: 'red.500', fontSize: 'lg' })} />

// styled関数を使用
import { styled } from 'styled-system/jsx'

const Button = styled('button', {
  base: { padding: '8px 16px', borderRadius: '4px' },
  variants: {
    variant: {
      primary: { bg: 'blue.500', color: 'white' },
      secondary: { bg: 'gray.200', color: 'black' }
    }
  }
})
```

### JSXコンポーネントとして使用

```tsx
import { Flex, HStack, VStack, Stack } from 'styled-system/jsx'

<Flex gap="4" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>

<HStack gap="4">
  <button>Cancel</button>
  <button>Submit</button>
</HStack>
```

## Core Concepts

### 1. スタイリング方法

3つの主要なアプローチがあります：

**css関数** - インラインスタイリング
```tsx
className={css({ color: 'blue.500', _hover: { color: 'blue.600' } })}
```

**styled関数** - コンポーネント定義
```tsx
const Card = styled('div', {
  base: { bg: 'white', borderRadius: 'lg', p: '6' }
})
```

**cva（Compound Variants API）** - レシピ定義
```tsx
const buttonRecipe = cva({
  base: { padding: '8px 16px' },
  variants: {
    size: { sm: { fontSize: '12px' }, lg: { fontSize: '16px' } }
  }
})
```

### 2. 条件付きスタイリング

Pseudo-selectors、レスポンシブ、状態に基づくスタイリング：

```tsx
css({
  // Pseudo-selectors
  _hover: { bg: 'blue.600' },
  _focus: { outline: '2px solid blue' },
  _active: { transform: 'scale(0.98)' },

  // Responsive breakpoints
  fontSize: { base: 'sm', md: 'md', lg: 'lg' },

  // Container queries
  fontSize: { base: 'lg', '@/sm': 'md' },

  // Dark mode
  color: { base: 'black', _dark: 'white' }
})
```

### 3. レスポンシブデザイン

**ブレークポイントを使用**
```tsx
css({ display: { base: 'block', md: 'flex', lg: 'grid' } })
```

**コンテナクエリを使用**
```tsx
import { cq } from 'styled-system/patterns'

<div className={cq({ name: 'sidebar' })}>
  <div className={css({ fontSize: { base: 'lg', '@sidebar/sm': 'md' } })} />
</div>
```

## Workflows

### スタイリングタスクの場合

1. 現在のプロジェクトのPanda CSS設定を確認
2. 使用可能なデザイントークンを確認
3. 適切なスタイリング方法（css/styled/cva）を選択
4. 既存のパターンやレシピを再利用

### デザインシステム構築の場合

1. `panda.config.ts` でトークンを定義
2. 再利用可能なレシピを作成
3. パターン（Flex、Stackなど）を活用
4. 一貫性のあるコンポーネントを構築

## Resources

詳細については、以下のリファレンスを参照してください：

- **[basics.md](references/basics.md)** - 基本概念、スタイルプロパティ、ユーティリティ
- **[responsive.md](references/responsive.md)** - レスポンシブデザイン、ブレークポイント、コンテナクエリ
- **[theming.md](references/theming.md)** - テーマ、デザイントークン、セマンティックトークン
- **[recipes.md](references/recipes.md)** - レシピ、パターン、コンポーネント構築
- **[config.md](references/config.md)** - panda.config.tsの設定

## Important Notes

- Panda CSSは型安全です。TypeScriptの型を活用してください
- すべてのスタイルはビルド時に生成されます
- パフォーマンスを最大化するため、静的解析が行われます
- 動的な値が必要な場合は、`css`関数内で条件式を使用できます
