# Panda CSS Configuration

`panda.config.ts` の設定方法について説明します。

## Basic Configuration

### defineConfig

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // 出力ディレクトリ
  outdir: 'styled-system',

  // CSSリセットを有効化
  preflight: true,

  // 監視するファイル
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
})
```

## File Structure

### outdir

生成されるCSSファイルの出力先を指定します：

```tsx
export default defineConfig({
  // デフォルト: 'styled-system'
  outdir: 'styled-system'
})
```

生成されるファイル構造：

```
styled-system/
├── styles.css          # 生成されたCSS
├── tokens.css          # CSS変数としてのトークン
└── index.mjs           # JavaScript/TypeScriptユーティリティ
```

### include / exclude

Panda CSSがスタイルを抽出するファイルを指定します：

```tsx
export default defineConfig({
  // 監視するファイル
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}'
  ],
  // 除外するファイル
  exclude: [
    'node_modules',
    'dist',
    'build'
  ]
})
```

## CSS Options

### syntax

生成されるCSSの構文を指定します：

```tsx
export default defineConfig({
  // 'modern' または 'legacy'
  // デフォルト: 'modern'
  syntax: 'modern'
})
```

**modern**: 新しいCSS構文を使用（推奨）
**legacy**: 古いブラウザとの互換性

### hash

生成されるクラス名にハッシュを追加します：

```tsx
export default defineConfig({
  // デフォルト: false
  hash: true
})
```

### prefix

すべてのクラス名にプレフィックスを追加します：

```tsx
export default defineConfig({
  prefix: 'panda'
})
```

## CSS Reset (Preflight)

### preflight

CSSリセットを有効化します：

```tsx
export default defineConfig({
  preflight: true
})
```

### カスタムリセット

```tsx
export default defineConfig({
  preflight: {
    // リセットを適用するセレクタ
    scope: '*, *::before, *::after',

    // 遅延適用（最初の使用時に適用）
    lazy: true,

    // カスタムリセットルール
    reset: {
      'html, body': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box'
      },
      'button': {
        background: 'none',
        border: 'none',
        cursor: 'pointer'
      }
    }
  }
})
```

## Global CSS

### globalCss

グローバルスタイルを定義します：

```tsx
export default defineConfig({
  globalCss: {
    html: {
      fontSize: '16px',
      color: 'gray.900',
      backgroundColor: 'white'
    },
    body: {
      margin: '0',
      lineHeight: '1.5'
    },
    // スクロールバーのスタイル
    '::-webkit-scrollbar': {
      width: '8px'
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'gray.100'
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'gray.300',
      borderRadius: '4px'
    }
  }
})
```

## Theme Configuration

### tokens

基本のデザイントークンを定義します：

```tsx
export default defineConfig({
  theme: {
    tokens: {
      colors: {
        red: { value: '#EE0F0F' },
        green: { value: '#0FEE0F' },
        blue: { value: '#0000EE' }
      },
      spacing: {
        '1': { value: '0.25rem' },
        '2': { value: '0.5rem' },
        '4': { value: '1rem' }
      },
      fonts: {
        body: { value: 'system-ui, sans-serif' },
        mono: { value: 'monospace' }
      }
    }
  }
})
```

### semanticTokens

セマンティックトークンを定義します：

```tsx
export default defineConfig({
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primary: {
            value: { base: '#0070f3', _dark: '#3291ff' }
          },
          danger: {
            value: { base: '#e00', _dark: '#ff4444' }
          }
        }
      }
    }
  }
})
```

### breakpoints

ブレークポイントを定義します：

```tsx
export default defineConfig({
  theme: {
    extend: {
      breakpoints: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      }
    }
  }
})
```

### keyframes

アニメーションキーフレームを定義します：

```tsx
import { defineKeyframes } from '@pandacss/dev'

const keyframes = defineKeyframes({
  spin: {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  },
  pulse: {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.5' }
  }
})

export default defineConfig({
  theme: {
    extend: {
      keyframes,
      animations: {
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  }
})
```

## Conditions

### カスタム条件

独自の条件を定義します：

```tsx
export default defineConfig({
  conditions: {
    extend: {
      // ダークモードのカスタマイズ
      dark: '.dark &, [data-theme="dark"] &',

      // カスタム条件
      portrait: '@media (orientation: portrait)',
      landscape: '@media (orientation: landscape)',

      // コンテナクエリのサイズ
      '@sidebar': '(min-width: 320px)',
      '@content': '(min-width: 640px)'
    }
  }
})
```

## Recipes

### レシピの定義

```tsx
import { defineRecipe } from '@pandacss/dev'

const buttonRecipe = defineRecipe({
  className: 'button',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'medium'
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

export default defineConfig({
  theme: {
    extend: {
      recipes: {
        button: buttonRecipe
      }
    }
  }
})
```

## Static CSS

### staticCss

静的CSSとして生成するスタイルを指定します：

```tsx
export default defineConfig({
  staticCss: {
    // 生成するレシピ
    recipes: ['button', 'input', 'card'],

    // 生成するグローバルCSS
    global: ['global.css']
  }
})
```

## Hooks

### フックの使用

ビルドプロセスにフックを追加します：

```tsx
export default defineConfig({
  hooks: {
    // 生成が完了した後
    'cssgen:done': ({ artifact, content }) => {
      console.log(`Generated ${artifact}`)
      return content
    },

    // パーサーが完了した後
    'parser:done': ({ files }) => {
      console.log(`Parsed ${files.length} files`)
    },

    // ジェネレーターが開始する前
    'before:generator': () => {
      console.log('Starting generator...')
    },

    // ジェネレーターが完了した後
    'after:generator': () => {
      console.log('Generator finished!')
    }
  }
})
```

### 最適化フックの例

```tsx
export default defineConfig({
  hooks: {
    'cssgen:done': ({ artifact, content }) => {
      if (artifact === 'styles.css') {
        // 未使用のCSS変数を削除
        let optimized = removeUnusedCssVars(content)
        // 未使用のキーフレームを削除
        optimized = removeUnusedKeyframes(optimized)
        return optimized
      }
      return content
    }
  }
})
```

## Plugins

### プラグインの使用

```tsx
export default defineConfig({
  plugins: [
    // カスタムプラグイン
    {
      name: 'my-plugin',
      hooks: {
        'after:generator': () => {
          console.log('Custom plugin logic')
        }
      }
    }
  ]
})
```

## Logging

### logLevel

ログレベルを設定します：

```tsx
export default defineConfig({
  // 'debug' | 'info' | 'warn' | 'error' | 'silent'
  logLevel: 'info'
})
```

## Validation

### validation

バリデーションを有効/無効化します：

```tsx
export default defineConfig({
  // デフォルト: true
  validation: false
})
```

## Presets

### プリセットの使用

```tsx
export default defineConfig({
  // プリセットを指定
  presets: [
    '@pandacss/preset-base',
    '@pandacss/preset-panda'
  ]
})
```

## Complete Configuration Example

```tsx
// panda.config.ts
import { defineConfig, defineRecipe } from '@pandacss/dev'

const buttonRecipe = defineRecipe({
  className: 'button',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'medium',
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

export default defineConfig({
  // 出力設定
  outdir: 'styled-system',
  syntax: 'modern',
  hash: false,
  prefix: undefined,

  // ファイル監視
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: ['node_modules', 'dist'],

  // CSSリセット
  preflight: true,

  // グローバルCSS
  globalCss: {
    html: {
      fontSize: '16px',
      color: 'gray.900'
    },
    body: {
      margin: '0',
      lineHeight: '1.5'
    }
  },

  // テーマ
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#3b82f6' },
          secondary: { value: '#6b21a8' }
        },
        spacing: {
          '1': { value: '0.25rem' },
          '2': { value: '0.5rem' },
          '4': { value: '1rem' }
        }
      },
      semanticTokens: {
        colors: {
          bg: {
            primary: { value: { base: '#ffffff', _dark: '#0a0a0a' } }
          }
        }
      },
      breakpoints: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px'
      },
      recipes: {
        button: buttonRecipe
      }
    }
  },

  // 条件
  conditions: {
    extend: {
      dark: '.dark &, [data-theme="dark"] &'
    }
  },

  // 静的CSS
  staticCss: {
    recipes: ['button'],
    global: ['global.css']
  },

  // ログ
  logLevel: 'info',

  // バリデーション
  validation: true
})
```

## Environment Variables

環境変数を使用して設定を変更できます：

```tsx
export default defineConfig({
  // 開発環境でのみ詳細なログ
  logLevel: process.env.NODE_ENV === 'development' ? 'debug' : 'info',

  // 本番環境でのみハッシュを有効化
  hash: process.env.NODE_ENV === 'production'
})
```
