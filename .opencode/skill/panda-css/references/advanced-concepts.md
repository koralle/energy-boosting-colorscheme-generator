# Panda CSS Advanced Concepts

Panda CSSの高度な概念と機能について説明します。

## Cascade Layers（カスケードレイヤー）

Panda CSSはCSS Cascade Layersを使用して、スタイルの優先順位を管理します。

### レイヤーの構造

Panda CSSは以下の順序でレイヤーを生成します：

```css
@layer reset, base, tokens, recipes, utilities;
```

1. **reset**: CSSリセット（preflight）
2. **base**: グローバルベーススタイル
3. **tokens**: デザイントークン（CSS変数）
4. **recipes**: レシピで生成されたスタイル
5. **utilities**: ユーティリティクラス

### レイヤーの優先順位

後のレイヤーが前のレイヤーより優先されます：

```css
@layer utilities {
  .text_blue { color: blue; }
}

@layer recipes {
  .button { color: red; }
}

/* 結合クラスの場合 */
<button class="button text_blue">
  /* utilities > recipes なので blue が適用される */
</button>
```

### カスタムレイヤーの使用

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  globalCss: {
    /* カスタムレイヤーでグローバルスタイルを定義 */
    '@layer components': {
      '.custom-card': {
        backgroundColor: 'white',
        borderRadius: '8px'
      }
    }
  }
})
```

### レイヤーの順序をカスタマイズ

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  cssVarRoot: ':root',
  // レイヤーの順序をカスタマイズ
  layer: 'base, tokens, recipes, utilities, overrides'
})
```

## Virtual Color（バーチャルカラー）

Virtual Colorを使用すると、実行時に色を動的に操作できます。

### color() 関数

```tsx
import { css } from 'styled-system/css'

// 色の明度を調整
css({
  color: 'color(colors.blue.500, lighter(20%))',
  color: 'color(colors.blue.500, darker(10%))',
})

// 色の彩度を調整
css({
  color: 'color(colors.blue.500, saturate(50%))',
  color: 'color(colors.blue.500, desaturate(30%))',
})

// 色を回転
css({
  color: 'color(colors.blue.500, rotate(90deg))',
})

// 色を混合
css({
  color: 'color(colors.blue.500, mix(colors.red.500, 50%))',
})

// アルファチャンネルを設定
css({
  color: 'color(colors.blue.500, alpha(50%))',
  backgroundColor: 'color(colors.blue.500, a(0.5))',
})
```

### トークン値としての使用

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          // Virtual Colorで動的な色を定義
          primary: {
            hover: {
              value: 'color({colors.primary.base}, lighter(10%))'
            },
            active: {
              value: 'color({colors.primary.base}, darker(10%))'
            }
          }
        }
      }
    }
  }
})
```

### 色操作関数一覧

| 関数 | 説明 | 例 |
|------|------|-----|
| `lighter(%)` | 明るくする | `color(blue.500, lighter(20%))` |
| `darker(%)` | 暗くする | `color(blue.500, darker(10%))` |
| `saturate(%)` | 彩度を上げる | `color(blue.500, saturate(50%))` |
| `desaturate(%)` | 彩度を下げる | `color(blue.500, desaturate(30%))` |
| `rotate(deg)` | 色相を回転 | `color(blue.500, rotate(90deg))` |
| `mix(color, %)` | 色を混合 | `color(blue.500, mix(red.500, 50%))` |
| `alpha(%)` | 透明度を設定 | `color(blue.500, alpha(50%))` |
| `a(value)` | 透明度を設定（別名） | `color(blue.500, a(0.5))` |

## The extend Keyword（extendキーワード）

`extend` キーワードを使用して、既存のテーマ設定を拡張できます。

### extend の使用

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    extend: {
      // 既存のトークンを拡張
      tokens: {
        colors: {
          primary: { value: '#3b82f6' },
          secondary: { value: '#8b5cf6' }
        }
      },
      // 既存のブレークポイントを拡張
      breakpoints: {
        'xs': '320px'
      },
      // 既存のレシピを拡張
      recipes: {
        customButton: buttonRecipe
      }
    }
  }
})
```

### extend を使用しない場合

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    // extend を使用しないと、既存のトークンが完全に置き換えられる
    tokens: {
      colors: {
        primary: { value: '#3b82f6' }
        // 他のすべてのデフォルト色が失われる
      }
    }
  }
})
```

### いつ extend を使うべきか

- デフォルトのプリセットを保持しつつ、カスタム値を追加したい場合
- 既存のトークン、ブレークポイント、レシピを拡張したい場合

```tsx
// 良い例：extendを使用
export default defineConfig({
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: { value: '#ff6b6b' } // 既存の色に追加
        }
      }
    }
  }
})

// 注意：extendなしで完全に置き換え
export default defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: { value: '#ff6b6b' } // デフォルトの色がすべて失われる
      }
    }
  }
})
```

## Panda Integration Hooks（統合フック）

Panda CSSのビルドプロセスにフックして、カスタム処理を追加できます。

### 利用可能なフック

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  hooks: {
    // パーサーが完了した後
    'parser:done': ({ files }) => {
      console.log(`解析されたファイル: ${files.length}個`)
    },

    // ジェネレーターが開始する前
    'before:generator': () => {
      console.log('ジェネレーターを開始...')
    },

    // ジェネレーターが完了した後
    'after:generator': () => {
      console.log('ジェネレーターが完了')
    },

    // CSS生成が完了した後
    'cssgen:done': ({ artifact, content }) => {
      console.log(`生成されたアーティファクト: ${artifact}`)
      // カスタム処理を追加可能
      return content
    }
  }
})
```

### CSSを最適化するフック

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  hooks: {
    'cssgen:done': ({ artifact, content }) => {
      if (artifact === 'styles.css') {
        // 未使用のCSS変数を削除
        let optimized = removeUnusedCssVars(content)
        // CSSを圧縮
        optimized = minifyCss(optimized)
        return optimized
      }
      return content
    }
  }
})
```

### ファイル監視のフック

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  hooks: {
    'codegen:done': () => {
      // 型生成が完了した後の処理
      console.log('型生成が完了しました')
    }
  }
})
```

## Global Styles（グローバルスタイル）

グローバルスタイルを定義して、アプリ全体に適用できます。

### globalCss の使用

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  globalCss: {
    html: {
      fontSize: '16px',
      color: 'gray.900',
      backgroundColor: 'white',
      _dark: {
        color: 'gray.100',
        backgroundColor: 'gray.900'
      }
    },
    body: {
      margin: '0',
      lineHeight: '1.5',
      fontFamily: 'system-ui, sans-serif'
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
      borderRadius: '4px',
      _hover: {
        backgroundColor: 'gray.400'
      }
    }
  }
})
```

### 条件付きグローバルスタイル

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  globalCss: {
    // メディアクエリを使用
    '@media (prefers-reduced-motion: reduce)': {
      '*': {
        animationDuration: '0.01ms !important',
        animationIterationCount: '1 !important',
        transitionDuration: '0.01ms !important'
      }
    },
    // ダークモード
    '@media (prefers-color-scheme: dark)': {
      html: {
        color: 'gray.100',
        backgroundColor: 'gray.900'
      }
    }
  }
})
```

### カスタムクラスのグローバルスタイル

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  globalCss: {
    '.no-scrollbar': {
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    '.text-balance': {
      textWrap: 'balance'
    },
    '.container': {
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingX: '4'
    }
  }
})
```

### 動的グローバルスタイル

コード内で動的にグローバルスタイルを適用：

```tsx
import { globalCss } from 'styled-system/css'

// コンポーネント内でグローバルスタイルを適用
function Demo() {
  globalCss({
    body: {
      backgroundColor: 'gray.100'
    }
  })

  return <div>コンテンツ</div>
}
```

## Writing Styles Best Practices（スタイル記述のベストプラクティス）

### 型安全を活用

```tsx
import { css } from 'styled-system/css'

// 型安全なスタイリング
const button = css({
  // TypeScriptが自動補完を提供
  backgroundColor: 'blue.500',
  color: 'white',
  padding: '0.5rem 1rem'
})
```

### 条件付きスタイリングを活用

```tsx
import { css } from 'styled-system/css'

// 動的な値を条件付きで適用
function Button({ variant, size, disabled }) {
  return (
    <button className={css({
      backgroundColor: disabled ? 'gray.300' : 'blue.500',
      opacity: disabled ? 0.5 : 1,
      padding: size === 'sm' ? '0.25rem 0.5rem' : '0.5rem 1rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      _hover: disabled ? {} : { backgroundColor: 'blue.600' }
    })}>
      ボタン
    </button>
  )
}
```

### レスポンシブスタイリング

```tsx
import { css } from 'styled-system/css'

// モバイルファーストでレスポンシブスタイリング
const container = css({
  padding: '2',
  md: { padding: '4' },
  lg: { padding: '6' }
})
```

### テーマを活用

```tsx
import { css } from 'styled-system/css'

// セマンティックトークンを使用
const card = css({
  backgroundColor: 'card.background',
  color: 'card.text',
  borderColor: 'card.border',
  borderRadius: 'card.radius'
})
```

### スタイルの再利用

```tsx
import { css, cva } from 'styled-system/css'

// 再利用可能なスタイル定義
const baseButton = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
})

const buttonVariants = cva({
  base: baseButton,
  variants: {
    variant: {
      primary: { backgroundColor: 'blue.500', color: 'white' },
      secondary: { backgroundColor: 'gray.200', color: 'black' }
    }
  }
})
```
