# Migration Guides

他のCSS-in-JSライブラリからPanda CSSへの移行ガイドです。

## Migrating from Stitches

StitchesからPanda CSSへの移行方法です。

### 主な違い

| Stitches | Panda CSS |
|---------|-----------|
| `styled()` | `styled()` from 'styled-system/jsx' |
| `css()` | `css()` from 'styled-system/css' |
| `createStitches()` | `defineConfig()` |
| Config-based theme | Config-based theme |

### コンポーネントの移行

**Stitches:**
```tsx
import { styled } from '@stitches/react'

const Button = styled('button', {
  backgroundColor: 'blue',
  color: 'white',
  padding: '8px 16px',

  variants: {
    variant: {
      primary: { backgroundColor: 'blue' },
      secondary: { backgroundColor: 'gray' }
    }
  }
})
```

**Panda CSS:**
```tsx
import { styled } from 'styled-system/jsx'

const Button = styled('button', {
  base: {
    backgroundColor: 'blue.500',
    color: 'white',
    padding: '8px 16px'
  },
  variants: {
    variant: {
      primary: { backgroundColor: 'blue.500' },
      secondary: { backgroundColor: 'gray.200' }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})
```

### レシピの移行

**Stitches:**
```tsx
const buttonRecipe = createStitches({
  variants: {
    variant: {
      primary: { backgroundColor: '$blue500' },
      secondary: { backgroundColor: '$gray200' }
    }
  }
})
```

**Panda CSS:**
```tsx
import { cva } from 'styled-system/css'

const buttonRecipe = cva({
  base: {
    padding: '8px 16px',
    borderRadius: '4px'
  },
  variants: {
    variant: {
      primary: { backgroundColor: 'blue.500', color: 'white' },
      secondary: { backgroundColor: 'gray.200', color: 'black' }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})
```

### テーマの移行

**Stitches:**
```tsx
export const { styled, css } = createStitches({
  theme: {
    colors: {
      blue500: '#3b82f6',
      gray200: '#e5e7eb'
    }
  }
})
```

**Panda CSS:**
```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    tokens: {
      colors: {
        blue: {
          500: { value: '#3b82f6' }
        },
        gray: {
          200: { value: '#e5e7eb' }
        }
      }
    }
  }
})
```

## Migrating from Styled Components

Styled ComponentsからPanda CSSへの移行方法です。

### 主な違い

| Styled Components | Panda CSS |
|------------------|-----------|
| Runtime styling | Build-time styling |
| Template literals | Object syntax or Template literals |
| `styled.button` | `styled('button')` |
| Theme via context | Theme via config |

### コンポーネントの移行

**Styled Components:**
```tsx
import styled from 'styled-components'

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background-color: ${props => props.variant === 'primary' ? '#3b82f6' : '#e5e7eb'};
  color: ${props => props.variant === 'primary' ? 'white' : 'black'};
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`
```

**Panda CSS（styled関数）:**
```tsx
import { styled } from 'styled-system/jsx'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
}

const Button = styled('button', {
  base: {
    padding: '8px 16px',
    borderRadius: '4px',
    _hover: { opacity: 0.9 }
  },
  variants: {
    variant: {
      primary: { backgroundColor: 'blue.500', color: 'white' },
      secondary: { backgroundColor: 'gray.200', color: 'black' }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})
```

**Panda CSS（テンプレートリテラル）:**
```tsx
import { css } from 'styled-system/css'

const Button = styled('button', {
  base: css`
    padding: 8px 16px;
    border-radius: 4px;

    &:hover {
      opacity: 0.9;
    }

    &[data-variant="primary"] {
      background-color: blue.500;
      color: white;
    }

    &[data-variant="secondary"] {
      background-color: gray.200;
      color: black;
    }
  `
})
```

### Global Styles の移行

**Styled Components:**
```tsx
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui, sans-serif;
  }
`
```

**Panda CSS:**
```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true, // CSSリセットを有効化
  globalCss: {
    body: {
      margin: '0',
      fontFamily: 'system-ui, sans-serif'
    }
  }
})
```

### ThemeProvider の移行

**Styled Components:**
```tsx
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Components />
    </ThemeProvider>
  )
}
```

**Panda CSS:**
```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: '#3b82f6' },
        secondary: { value: '#8b5cf6' }
      }
    }
  }
})
```

```tsx
// 使用時
import { css } from 'styled-system/css'

<div className={css({ color: 'primary' })} />
```

## Migrating from Theme UI

Theme UIからPanda CSSへの移行方法です。

### 主な違い

| Theme UI | Panda CSS |
|----------|-----------|
| Emotion-based | Build-time generation |
| `@theme` import | Config-based theme |
| `jsx` pragma | Styled components |
| Responsive array syntax | Object breakpoint syntax |

### コンポーネントの移行

**Theme UI:**
```tsx
/** @jsxImportSource theme-ui */
import { Themed } from 'theme-ui'

function Button({ variant = 'primary' }) {
  return (
    <Themed.div
      sx={{
        backgroundColor: variant === 'primary' ? 'primary' : 'secondary',
        color: 'white',
        padding: 3,
        borderRadius: 4
      }}
    >
      ボタン
    </Themed.div>
  )
}
```

**Panda CSS:**
```tsx
import { styled } from 'styled-system/jsx'

const Button = styled('button', {
  variants: {
    variant: {
      primary: { backgroundColor: 'primary', color: 'white' },
      secondary: { backgroundColor: 'secondary', color: 'white' }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})
```

### レスポンシブスタイルの移行

**Theme UI（配列構文）:**
```tsx
<Box sx={{
  width: ['100%', '50%', '33%'],
  padding: [2, 3, 4]
}}>
```

**Panda CSS（オブジェクト構文）:**
```tsx
import { css } from 'styled-system/css'

<div className={css({
  width: { base: '100%', md: '50%', lg: '33%' },
  padding: { base: '2', md: '3', lg: '4' }
})} />
```

### テーマの移行

**Theme UI:**
```tsx
// theme.js
export default {
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    text: '#1a202c',
    background: '#ffffff'
  },
  space: {
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem'
  }
}
```

**Panda CSS:**
```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: '#3b82f6' },
        secondary: { value: '#8b5cf6' },
        text: { value: '#1a202c' },
        background: { value: '#ffffff' }
      },
      spacing: {
        '1': { value: '0.25rem' },
        '2': { value: '0.5rem' },
        '3': { value: '1rem' },
        '4': { value: '1.5rem' }
      }
    }
  }
})
```

## Common Migration Patterns（一般的な移行パターン）

### ダイナミックスタイル

他のライブラリでは、関数を使ってスタイルを動的に生成していました：

```tsx
// Styled Components / Stitches
const Container = styled.div(({ size }) => ({
  width: size === 'small' ? '200px' : '400px'
}))
```

Panda CSSでは、バリアントを使用します：

```tsx
// Panda CSS
import { styled } from 'styled-system/jsx'

const Container = styled('div', {
  variants: {
    size: {
      sm: { width: '200px' },
      lg: { width: '400px' }
    }
  }
})
```

### ネストされたスタイル

```tsx
// Styled Components
const Card = styled.div`
  padding: 1rem;

  & > h2 {
    margin-top: 0;
    color: ${props => props.theme.colors.primary};
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`
```

```tsx
// Panda CSS - テンプレートリテラル
import { css } from 'styled-system/css'

const Card = styled('div', {
  base: css`
    padding: 1rem;

    & > h2 {
      margin-top: 0;
      color: colors.blue.500;
    }

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  `
})
```

### グローバルスタイル

```tsx
// Styled Components
const GlobalStyle = styled.global`
  body {
    margin: 0;
    font-family: system-ui;
  }
`
```

```tsx
// Panda CSS
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  globalCss: {
    body: {
      margin: '0',
      fontFamily: 'system-ui'
    }
  }
})
```

## Migration Checklist

移行時のチェックリスト：

- [ ] `panda.config.ts` を設定
- [ ] テーマをPanda CSSの形式に変換
- [ ] コンポーネントを `styled()` または `cva()` に変換
- [ ] グローバルスタイルを `globalCss` に移行
- [ ] レスポンシブ構文をオブジェクト形式に変更
- [ ] `styled-system/styles.css` をインポート
- [ ] 型定義を確認
- [ ] テストを実行
- [ ] 生成されたCSSを確認
