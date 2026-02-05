# Panda CSS Theming

Panda CSSでのテーマ、デザイントークン、セマンティックトークンの設定方法について説明します。

## Design Tokens

### Basic Tokens

`panda.config.ts` で基本のデザイントークンを定義します：

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

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
      },
      fontSizes: {
        xs: { value: '0.75rem' },
        sm: { value: '0.875rem' },
        base: { value: '1rem' },
        lg: { value: '1.125rem' }
      }
    }
  }
})
```

### Token Usage

```tsx
import { css } from 'styled-system/css'

css({
  color: 'red',           // #EE0F0F
  padding: '4',           // 1rem
  fontFamily: 'body',     // system-ui, sans-serif
  fontSize: 'lg'          // 1.125rem
})
```

## Semantic Tokens

セマンティックトークンは、基本トークンに意味を持たせたものです。

### Defining Semantic Tokens

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    tokens: {
      colors: {
        red: { value: '#EE0F0F' },
        green: { value: '#0FEE0F' }
      }
    },
    semanticTokens: {
      colors: {
        danger: { value: '{colors.red}' },
        success: { value: '{colors.green}' }
      }
    }
  }
})
```

### Color Modes with Semantic Tokens

セマンティックトークンを使用して、ライト/ダークモードを設定：

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          // 基本色
          primary: {
            value: { base: '#0070f3', _dark: '#3291ff' }
          },
          secondary: {
            value: { base: '#7928ca', _dark: '#9f4aea' }
          },

          // グレースケール
          gray: {
            100: { value: { base: '#f7f7f7', _dark: '#1a1a1a' } },
            200: { value: { base: '#eaeaea', _dark: '#222222' } },
            300: { value: { base: '#999999', _dark: '#333333' } },
            400: { value: { base: '#888888', _dark: '#444444' } },
            500: { value: { base: '#666666', _dark: '#555555' } },
          },

          // コンポーネント色
          button: {
            primary: {
              DEFAULT: { value: { base: '#0066cc', _dark: '#3399ff' } },
              hover: { value: { base: '#0052a3', _dark: '#66b3ff' } }
            },
            secondary: {
              DEFAULT: { value: { base: '#6b21a8', _dark: '#a855f7' } }
            }
          }
        }
      }
    }
  }
})
```

### Using Semantic Tokens

```tsx
import { css } from 'styled-system/css'

// セマンティックトークンを使用
<button className={css({
  backgroundColor: 'button.primary',
  color: 'white',
  _hover: {
    backgroundColor: 'button.primary.hover'
  }
})}>
  Click me
</button>
```

## Dark Mode

### Dark Mode Configuration

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  conditions: {
    extend: {
      // デフォルトのダークモード条件をカスタマイズ
      dark: '.dark &, [data-theme="dark"] &'
    }
  }
})
```

### Dark Mode Usage

```tsx
import { css } from 'styled-system/css'

// 条件付きスタイリング
css({
  color: { base: 'black', _dark: 'white' },
  backgroundColor: { base: 'white', _dark: 'black' }
})

// _dark疑似クラスを使用
css({
  color: 'black',
  _dark: { color: 'white' }
})
```

## Typography Tokens

### Font Family

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: '"Inter", sans-serif' },
        body: { value: '"Inter", sans-serif' },
        mono: { value: '"Fira Code", monospace' }
      }
    }
  },
  globalCss: {
    html: {
      '--global-font-heading': '"Inter", sans-serif',
      '--global-font-body': '"Inter", sans-serif',
      '--global-font-mono': '"Fira Code", monospace'
    }
  }
})
```

### Font Sizes and Weights

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    tokens: {
      fontSizes: {
        'xs': { value: '0.75rem' },      // 12px
        'sm': { value: '0.875rem' },     // 14px
        'base': { value: '1rem' },       // 16px
        'lg': { value: '1.125rem' },     // 18px
        'xl': { value: '1.25rem' },      // 20px
        '2xl': { value: '1.5rem' },      // 24px
        '3xl': { value: '1.875rem' },    // 30px
        '4xl': { value: '2.25rem' },     // 36px
      },
      fontWeights: {
        'thin': { value: '100' },
        'extralight': { value: '200' },
        'light': { value: '300' },
        'normal': { value: '400' },
        'medium': { value: '500' },
        'semibold': { value: '600' },
        'bold': { value: '700' },
        'extrabold': { value: '800' },
        'black': { value: '900' },
      },
      lineHeights: {
        'tight': { value: '1.25' },
        'snug': { value: '1.375' },
        'normal': { value: '1.5' },
        'relaxed': { value: '1.625' },
        'loose': { value: '2' },
      }
    }
  }
})
```

## Spacing Tokens

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    tokens: {
      spacing: {
        '0': { value: '0' },
        'px': { value: '1px' },
        '0.5': { value: '0.125rem' },   // 2px
        '1': { value: '0.25rem' },      // 4px
        '2': { value: '0.5rem' },       // 8px
        '3': { value: '0.75rem' },      // 12px
        '4': { value: '1rem' },         // 16px
        '5': { value: '1.25rem' },      // 20px
        '6': { value: '1.5rem' },       // 24px
        '8': { value: '2rem' },         // 32px
        '10': { value: '2.5rem' },      // 40px
        '12': { value: '3rem' },        // 48px
        '16': { value: '4rem' },        // 64px
        '20': { value: '5rem' },        // 80px
        '24': { value: '6rem' },        // 96px
      }
    }
  }
})
```

## Border Radius Tokens

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    tokens: {
      radii: {
        'none': { value: '0' },
        'sm': { value: '0.125rem' },    // 2px
        'base': { value: '0.25rem' },   // 4px
        'md': { value: '0.375rem' },    // 6px
        'lg': { value: '0.5rem' },      // 8px
        'xl': { value: '0.75rem' },     // 12px
        '2xl': { value: '1rem' },       // 16px
        '3xl': { value: '1.5rem' },     // 24px
        'full': { value: '9999px' },
      }
    }
  }
})
```

## Shadow Tokens

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    tokens: {
      shadows: {
        'xs': { value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
        'sm': { value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' },
        'base': { value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
        'md': { value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
        'lg': { value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
        'xl': { value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
        'inner': { value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' },
        'none': { value: '0 0 #0000' },
      }
    }
  }
})
```

## Z-Index Tokens

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    tokens: {
      zIndices: {
        'hide': { value: '-1' },
        'base': { value: '0' },
        'dropdown': { value: '1000' },
        'sticky': { value: '1100' },
        'fixed': { value: '1200' },
        'modalBackdrop': { value: '1300' },
        'modal': { value: '1400' },
        'popover': { value: '1500' },
        'tooltip': { value: '1600' },
      }
    }
  }
})
```

## Animation Tokens

```tsx
// panda.config.ts
import { defineConfig, defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  spin: {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  },
  ping: {
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: '0'
    }
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
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  }
})
```

## Complete Theme Example

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    tokens: {
      colors: {
        // ブランドカラー
        primary: {
          50: { value: '#eff6ff' },
          100: { value: '#dbeafe' },
          200: { value: '#bfdbfe' },
          300: { value: '#93c5fd' },
          400: { value: '#60a5fa' },
          500: { value: '#3b82f6' },
          600: { value: '#2563eb' },
          700: { value: '#1d4ed8' },
          800: { value: '#1e40af' },
          900: { value: '#1e3a8a' },
        }
      },
      spacing: { /* ... */ },
      fonts: { /* ... */ },
      fontSizes: { /* ... */ },
    },
    semanticTokens: {
      colors: {
        bg: {
          primary: { value: { base: '#ffffff', _dark: '#0a0a0a' } },
          secondary: { value: { base: '#f5f5f5', _dark: '#1a1a1a' } },
        },
        fg: {
          primary: { value: { base: '#0a0a0a', _dark: '#f5f5f5' } },
          secondary: { value: { base: '#666666', _dark: '#a3a3a3' } },
        }
      }
    }
  }
})
```
