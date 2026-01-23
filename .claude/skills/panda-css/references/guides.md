# Panda CSS Guides

Panda CSSを使用した実用的なガイドとベストプラクティスです。

## Component Library Development（コンポーネントライブラリ開発）

Panda CSSを使用して、再利用可能なコンポーネントライブラリを開発する方法です。

### プロジェクト構成

```
my-ui-library/
├── panda.config.ts
├── src/
│   ├── components/
│   │   ├── button/
│   │   │   ├── index.ts
│   │   │   ├── button.tsx
│   │   │   └── button.test.tsx
│   │   └── card/
│   ├── styles/
│   │   └── index.css
│   └── index.ts
├── package.json
└── tsconfig.json
```

### panda.config.ts の設定

```tsx
// panda.config.ts
import { defineConfig, defineRecipe, defineSlotRecipe } from '@pandacss/dev'

// レシピをエクスポートして型として使用可能に
export const buttonRecipe = defineRecipe({
  className: 'button',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'medium',
    borderRadius: 'md',
    cursor: 'pointer'
  },
  variants: {
    variant: {
      primary: { backgroundColor: 'blue.500', color: 'white' },
      secondary: { backgroundColor: 'gray.200', color: 'black' }
    },
    size: {
      sm: { padding: '0.25rem 0.5rem', fontSize: 'sm' },
      md: { padding: '0.5rem 1rem', fontSize: 'base' },
      lg: { padding: '0.75rem 1.5rem', fontSize: 'lg' }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export const cardRecipe = defineSlotRecipe({
  className: 'card',
  slots: ['root', 'header', 'body', 'footer'],
  base: {
    root: {
      backgroundColor: 'white',
      borderRadius: 'lg',
      boxShadow: 'md'
    },
    header: {
      padding: '1.5rem',
      borderBottom: '1px solid',
      borderColor: 'gray.200'
    },
    body: { padding: '1.5rem' },
    footer: {
      padding: '1rem 1.5rem',
      borderTop: '1px solid',
      borderColor: 'gray.200'
    }
  }
})

export default defineConfig({
  // ユーザーがテーマをカスタマイズできるように
  preflight: false,
  // 生成ファイルの出力先
  outdir: 'styled-system',
  // 型定義を含める
  include: ['./src/**/*.{ts,tsx}']
})
```

### コンポーネントの型定義

```tsx
// src/components/button/button.tsx
import { styled } from 'styled-system/jsx'
import { buttonRecipe, type ButtonVariantProps } from '../../../styled-system/recipes'

// レシピの型を抽出して使用
interface ButtonProps extends ButtonVariantProps {
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ variant, size, children, onClick }: ButtonProps) {
  return (
    <styled.button className={buttonRecipe({ variant, size })} onClick={onClick}>
      {children}
    </styled.button>
  )
}
```

### テーマをカスタマイズ可能にする

```tsx
// src/index.ts
export { Button } from './components/button'
export { Card } from './components/card'
export * from './styled-system/tokens'
export * from './styled-system/recipes'
```

### ユーザーがカスタマイズする方法

```tsx
// ユーザーのプロジェクトの panda.config.ts
import { defineConfig } from '@pandacss/dev'
import { buttonRecipe } from 'my-ui-library'

export default defineConfig({
  theme: {
    extend: {
      // ライブラリのレシピを拡張
      recipes: {
        button: buttonRecipe
      }
    }
  }
})
```

## Debugging（デバッグ）

### panda debug コマンド

Panda CSSには、スタイル抽出とCSS生成をデバッグするためのコマンドが含まれています。

```bash
# デザイントークンの抽出をデバッグ
panda debug

# 特定のファイルをデバッグ
panda debug src/components/button.tsx

# CSS出力を確認
panda cssgen
```

### よくある問題と解決方法

#### スタイルが適用されない

**原因**: CSSファイルがインポートされていない

```tsx
// 確認：styled-system/styles.css をインポート
import 'styled-system/styles.css'
```

**原因**: `@layer` ルールが正しく設定されていない

```css
/* styles.css */
@layer reset, base, tokens, recipes, utilities;
```

#### 型エラーが発生する

**原因**: `styled-system` が tsconfig.json に含まれていない

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "styled-system/*": ["./styled-system/*"]
    }
  }
}
```

#### HMRが動作しない

**原因**: `dependencies` オプションを設定していない

```tsx
// panda.config.ts
export default defineConfig({
  dependencies: ['src/theme/**/*.ts']
})
```

### CSSの検査

開発者ツールを使用して生成されたCSSを確認：

```css
/* 生成されたCSS */
@layer utilities {
  .text_blue\.500 {
    color: var(--colors-blue-500);
  }
}
```

## Dynamic Styling（動的スタイリング）

実行時にスタイルを動的に変更する方法です。

### Runtime Conditions

```tsx
import { css } from 'styled-system/css'

function Button({ variant, size, disabled }) {
  return (
    <button className={css({
      // 動的な値を条件式で使用
      backgroundColor: disabled
        ? 'gray.300'
        : variant === 'primary'
        ? 'blue.500'
        : 'gray.200',
      padding: size === 'sm' ? '0.25rem 0.5rem' : '0.5rem 1rem',
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      _hover: disabled ? {} : {
        backgroundColor: variant === 'primary' ? 'blue.600' : 'gray.300'
      }
    })}>
      ボタン
    </button>
  )
}
```

### Template Literals での動的スタイリング

```tsx
import { css } from 'styled-system/css'

function Card({ backgroundColor = 'white' }) {
  return (
    <div className={css`
      background-color: ${backgroundColor};
      padding: 1rem;
      border-radius: 0.5rem;

      &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
    `}>
      コンテンツ
    </div>
  )
}
```

### スタイルの結合

```tsx
import { css, cx } from 'styled-system/css'

function Button({ className, variant }) {
  const baseStyles = css({
    padding: '0.5rem 1rem',
    borderRadius: 'md',
    cursor: 'pointer'
  })

  const variantStyles = css({
    backgroundColor: variant === 'primary' ? 'blue.500' : 'gray.200'
  })

  return (
    <button className={cx(baseStyles, variantStyles, className)}>
      ボタン
    </button>
  )
}
```

## Custom Font（カスタムフォント）

カスタムフォントをPanda CSSに統合する方法です。

### Google Fonts の使用

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  globalCss: {
    '@import': 'url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap")',
    html: {
      fontFamily: 'Inter, sans-serif'
    }
  },
  theme: {
    extend: {
      fonts: {
        heading: { value: '"Inter", sans-serif' },
        body: { value: '"Inter", sans-serif' }
      }
    }
  }
})
```

### ローカルフォントの使用

```css
/* styles.css */
@font-face {
  font-family: 'CustomFont';
  src: url('./fonts/CustomFont.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
```

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    tokens: {
      fonts: {
        custom: { value: '"CustomFont", sans-serif' }
      }
    }
  }
})
```

```tsx
// 使用
import { css } from 'styled-system/css'

<div className={css({ fontFamily: 'custom' })}>
  カスタムフォント
</div>
```

## Minimal Setup（最小セットアップ）

Panda CSSの最小限のセットアップ例です。

### 基本的なインストール

```bash
npm install -D @pandacss/dev
```

### 最小限の panda.config.ts

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // CSSの出力先
  outdir: 'styled-system',
  // 監視するファイル
  include: ['./src/**/*.{ts,tsx}'],
  // CSSリセットを有効化
  preflight: true
})
```

### CSSのインポート

```tsx
// src/main.tsx
import 'styled-system/styles.css'

function App() {
  return <div>Hello Panda</div>
}
```

## Static CSS Generator（静的CSSジェネレーター）

すべてのバリアントを事前生成する設定です。

### staticCss の使用

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  staticCss: {
    // 生成するレシピを指定
    recipes: ['button', 'input', 'card'],
    // すべてのバリアントを生成
    recipe: {
      button: {
        variants: ['variant', 'size'],
        // 特定のバリアント値のみ生成
        variants: {
          variant: ['primary', 'secondary', 'outline'],
          size: ['sm', 'md', 'lg']
        }
      }
    }
  }
})
```

これにより、以下のような静的CSSが生成されます：

```css
@layer recipes {
  .button--variant-primary--size-sm { /* ... */ }
  .button--variant-primary--size-md { /* ... */ }
  .button--variant-primary--size-lg { /* ... */ }
  /* ... */
}
```

## Multi-Theme Setup（マルチテーマ設定）

複数のテーマをサポートする設定です。

### セマンティックトークンで複数テーマ

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          // ベーステーマとダークテーマ
          bg: {
            primary: {
              value: { base: '#ffffff', _dark: '#1a1a1a' }
            },
            secondary: {
              value: { base: '#f5f5f5', _dark: '#2a2a2a' }
            }
          },
          fg: {
            primary: {
              value: { base: '#0a0a0a', _dark: '#f5f5f5' }
            },
            secondary: {
              value: { base: '#666666', _dark: '#a3a3a3' }
            }
          }
        }
      }
    }
  },
  conditions: {
    extend: {
      // ダークモードの条件
      dark: '.dark &, [data-theme="dark"] &'
    }
  }
})
```

### テーマ切り替えの実装

```tsx
import { css } from 'styled-system/css'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark', !isDark)
  }

  return (
    <button onClick={toggleTheme}>
      {isDark ? 'ライトモード' : 'ダークモード'}
    </button>
  )
}
```

## Best Practices Summary

1. **レシピを活用**: 再利用可能なコンポーネントにはレシピを使用
2. **Slot Recipes**: 複合コンポーネントにはスロットレシピを使用
3. **型安全**: TypeScriptの型を活用して安全性を確保
4. **デバッグ**: `panda debug` コマンドを活用
5. **動的スタイリング**: 条件式やテンプレートリテラルを活用
6. **テーマ**: セマンティックトークンでテーマを管理
