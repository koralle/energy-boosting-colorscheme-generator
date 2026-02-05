# Panda CSS Responsive Design

Panda CSSでのレスポンシブデザインとコンテナクエリの使用方法について説明します。

## Breakpoints

デフォルトのブレークポイント：

```tsx
// ブレークポイント値
{
  base: '0em',       // 0px
  sm: '640px',       // 640px
  md: '768px',       // 768px
  lg: '1024px',      // 1024px
  xl: '1280px',      // 1280px
  '2xl': '1536px'    // 1536px
}
```

### Responsive Syntax

オブジェクト構文でレスポンシブスタイルを適用します：

```tsx
import { css } from 'styled-system/css'

css({
  // 基本的なレスポンシブ
  fontSize: { base: 'sm', md: 'md', lg: 'lg' },

  // 複数のプロパティ
  padding: { base: '2', md: '4', lg: '6' },
  margin: { base: '2', md: '4', lg: '6' },

  // 表示/非表示
  display: { base: 'block', md: 'flex', lg: 'grid' },

  // グリッド
  gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }
})
```

### Mobile-First Approach

デフォルトはモバイルファーストです：

```tsx
css({
  // モバイル（base）: 1列
  // タブレット（md）: 2列
  // デスクトップ（lg）: 3列
  gridTemplateColumns: {
    base: '1fr',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)'
  }
})
```

### Breakpoint Customization

`panda.config.ts` でカスタムブレークポイントを定義：

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    extend: {
      breakpoints: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // カスタムブレークポイント
        'tablet': '768px',
        'desktop': '1024px'
      }
    }
  }
})
```

## Container Queries

コンテナクエリを使用すると、親コンテナのサイズに基づいてスタイルを適用できます。

### Basic Container Query

```tsx
import { css } from 'styled-system/css'
import { cq } from 'styled-system/patterns'

function Demo() {
  return (
    // コンテナを定義
    <div className={css({ containerType: 'inline-size' })}>
      {/* コンテナサイズに基づいてスタイル適用 */}
      <div
        className={css({
          fontSize: { base: 'lg', '@/sm': 'md' }
        })}
      >
        Responsive to container
      </div>
    </div>
  )
}
```

### Named Container Queries

```tsx
import { css } from 'styled-system/css'
import { cq } from 'styled-system/patterns'

function Sidebar() {
  return (
    // 名前付きコンテナ
    <nav className={cq({ name: 'sidebar' })}>
      <div
        className={css({
          fontSize: { base: 'sm', '@sidebar/sm': 'md', '@sidebar/md': 'lg' }
        })}
      >
        Responsive to sidebar container
      </div>
    </nav>
  )
}
```

### Container Query Configuration

`panda.config.ts` でコンテナサイズを定義：

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    extend: {
      // コンテナ名
      containerNames: ['sidebar', 'content', 'card'],

      // コンテナサイズ
      containerSizes: {
        'xs': '20em',
        'sm': '40em',
        'md': '60em',
        'lg': '80em'
      }
    }
  }
})
```

## Patterns for Responsive Design

### Flexbox Pattern

```tsx
import { Flex } from 'styled-system/jsx'

<Flex
  direction={{ base: 'column', md: 'row' }}
  gap="4"
  align="center"
>
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

### Stack Pattern

```tsx
import { HStack, VStack } from 'styled-system/jsx'

// 横方向
<HStack gap="4">
  <button>Cancel</button>
  <button>Submit</button>
</HStack>

// 縦方向（モバイルで横方向、デスクトップで縦方向）
<VStack gap={{ base: '2', md: '4' }} align="start">
  <h3>Title</h3>
  <p>Content</p>
</VStack>
```

### Grid Pattern

```tsx
import { Grid } from 'styled-system/jsx'

<Grid
  columns={{ base: 1, md: 2, lg: 3 }}
  gap="4"
>
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</Grid>
```

### Show/Hide Pattern

```tsx
import { css } from 'styled-system/css'

// モバイルで非表示、デスクトップで表示
<div className={css({ display: { base: 'none', md: 'block' } })}>
  Desktop only
</div>

// モバイルで表示、デスクトップで非表示
<div className={css({ display: { base: 'block', md: 'none' } })}>
  Mobile only
</div>
```

## Common Responsive Patterns

### Navigation

```tsx
import { Flex, HStack } from 'styled-system/jsx'
import { css } from 'styled-system/css'

function Navigation() {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align="center"
      gap="4"
      p="4"
    >
      <div className={css({ fontSize: 'xl', fontWeight: 'bold' })}>
        Logo
      </div>
      <HStack gap="4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </HStack>
    </Flex>
  )
}
```

### Card Grid

```tsx
import { styled } from 'styled-system/jsx'

const CardGrid = styled('div', {
  base: {
    display: 'grid',
    gap: '4',
    gridTemplateColumns: {
      base: 'repeat(1, 1fr)',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)'
    }
  }
})
```

### Sidebar Layout

```tsx
import { Flex } from 'styled-system/jsx'
import { cq } from 'styled-system/patterns'
import { css } from 'styled-system/css'

function SidebarLayout() {
  return (
    <Flex direction={{ base: 'column', lg: 'row' }} gap="4">
      {/* サイドバー */}
      <aside
        className={cq({ name: 'sidebar' })}
        style={{ flex: '0 0 250px' }}
      >
        <nav className={css({
          fontSize: { base: 'sm', '@sidebar/sm': 'md' }
        })}>
          Sidebar Content
        </nav>
      </aside>

      {/* メインコンテンツ */}
      <main style={{ flex: 1 }}>
        Main Content
      </main>
    </Flex>
  )
}
```

## Media Query Mixins

直接メディアクエリを記述することもできます：

```tsx
import { css } from 'styled-system/css'

css({
  // カスタムメディアクエリ
  '@media (min-width: 768px)': {
    color: 'red.300'
  },

  // 複数の条件
  '@media (min-width: 768px) and (max-width: 1024px)': {
    color: 'blue.300'
  },

  // Supports query
  '@supports (display: grid)': {
    display: 'grid'
  }
})
```

## Best Practices

1. **モバイルファースト**: `base` → `sm` → `md` → `lg` の順にスタイルを定義
2. **オブジェクト構文を使用**: `css({ fontSize: { base: 'sm', md: 'md' } })` のように記述
3. **コンテナクエリを活用**: コンポーネントのサイズに基づいたレスポンシブデザインにはコンテナクエリを使用
4. **パターンを再利用**: `Flex`、`Stack`、`Grid` などの組み込みパターンを活用
5. **ブレークポイントの統一**: プロジェクト全体で一貫したブレークポイントを使用
