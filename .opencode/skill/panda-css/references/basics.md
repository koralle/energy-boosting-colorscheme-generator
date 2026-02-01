# Panda CSS Basic Concepts

Panda CSSの基本的な概念と使用方法について説明します。

## Styling Methods

### 1. css関数

インラインでスタイルを適用する関数です。

```tsx
import { css } from 'styled-system/css'

// 基本的な使用
<div className={css({ color: 'blue.500' })} />

// 複数のスタイルプロパティ
<div className={css({
  color: 'blue.500',
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '0.5rem'
})} />

// 条件付きスタイリング
<div className={css({
  color: isPrimary ? 'blue.500' : 'gray.500',
  fontSize: { base: 'sm', md: 'md' }
})} />
```

### 2. styled関数

スタイル付きコンポーネントを作成する関数です。

```tsx
import { styled } from 'styled-system/jsx'

// 基本的なコンポーネント
const Card = styled('div', {
  base: {
    backgroundColor: 'white',
    borderRadius: 'lg',
    padding: '1.5rem',
    boxShadow: 'md'
  }
})

// バリアントを持つコンポーネント
const Button = styled('button', {
  base: {
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    fontWeight: 'bold'
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: 'blue.500',
        color: 'white'
      },
      secondary: {
        backgroundColor: 'gray.200',
        color: 'black'
      }
    },
    size: {
      sm: { fontSize: '0.875rem', padding: '0.25rem 0.5rem' },
      md: { fontSize: '1rem', padding: '0.5rem 1rem' },
      lg: { fontSize: '1.125rem', padding: '0.75rem 1.5rem' }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})
```

### 3. cva（Compound Variants API）

再利用可能なスタイルレシピを作成する関数です。

```tsx
import { cva } from 'styled-system/css'

const buttonRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'medium',
    borderRadius: 'md',
    cursor: 'pointer'
  },
  variants: {
    visual: {
      solid: {
        backgroundColor: 'blue.500',
        color: 'white'
      },
      outline: {
        border: '1px solid',
        borderColor: 'blue.500',
        color: 'blue.500'
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'blue.500'
      }
    },
    size: {
      sm: { fontSize: '0.75rem', padding: '0.25rem 0.5rem' },
      md: { fontSize: '0.875rem', padding: '0.5rem 1rem' },
      lg: { fontSize: '1rem', padding: '0.75rem 1.5rem' }
    }
  },
  compoundVariants: [
    {
      visual: 'outline',
      size: 'sm',
      css: {
        borderWidth: '1px'
      }
    }
  ],
  defaultVariants: {
    visual: 'solid',
    size: 'md'
  }
})

// 使用
<button className={buttonRecipe({ visual: 'outline', size: 'lg' })}>
  Click me
</button>
```

## Style Props

Panda CSSでは、CSSプロパティを短縮形で使用できます。

| CSS Property | Panda CSS Prop | Example |
|--------------|----------------|---------|
| color | color / text | `color: 'blue.500'` |
| backgroundColor | bg / backgroundColor | `bg: 'white'` |
| padding | p / padding | `p: '4'` |
| paddingLeft | pl / paddingLeft | `pl: '2'` |
| paddingRight | pr / paddingRight | `pr: '2'` |
| paddingTop | pt / paddingTop | `pt: '2'` |
| paddingBottom | pb / paddingBottom | `pb: '2'` |
| paddingHorizontal | px | `px: '2'` |
| paddingVertical | py | `py: '2'` |
| margin | m / margin | `m: '4'` |
| borderRadius | rounded / borderRadius | `rounded: 'md'` |
| fontSize | fontSize / textSize | `fontSize: 'lg'` |
| fontWeight | fontWeight / fontWeight | `fontWeight: 'bold'` |

## Pseudo-selectors

Pseudo-selectorsは `_` プレフィックスで使用します。

```tsx
css({
  // Hover
  _hover: { color: 'blue.600' },

  // Focus
  _focus: { outline: '2px solid blue' },

  // Active
  _active: { transform: 'scale(0.98)' },

  // Disabled
  _disabled: { opacity: 0.5, cursor: 'not-allowed' },

  // First child
  _first: { marginTop: '0' },

  // Last child
  _last: { marginBottom: '0' },

  // Even/Odd
  _even: { backgroundColor: 'gray.100' },
  _odd: { backgroundColor: 'white' },

  // Before/After
  _before: { content: '""', display: 'block' },
  _after: { content: '""', display: 'block' },

  // Group hover
  _groupHover: { color: 'red' }
})
```

## Common Utility Values

### Spacing Scale

```tsx
css({
  padding: '0',      // 0
  padding: 'px',     // 1px
  padding: '0.5',    // 0.125rem (2px)
  padding: '1',      // 0.25rem (4px)
  padding: '2',      // 0.5rem (8px)
  padding: '3',      // 0.75rem (12px)
  padding: '4',      // 1rem (16px)
  padding: '5',      // 1.25rem (20px)
  padding: '6',      // 1.5rem (24px)
  padding: '8',      // 2rem (32px)
  padding: '10',     // 2.5rem (40px)
  padding: '12',     // 3rem (48px)
  padding: '16',     // 4rem (64px)
  padding: '20',     // 5rem (80px)
  padding: '24',     // 6rem (96px)
})
```

### Font Size Scale

```tsx
css({
  fontSize: 'xs',    // 0.75rem (12px)
  fontSize: 'sm',    // 0.875rem (14px)
  fontSize: 'base',  // 1rem (16px)
  fontSize: 'lg',    // 1.125rem (18px)
  fontSize: 'xl',    // 1.25rem (20px)
  fontSize: '2xl',   // 1.5rem (24px)
  fontSize: '3xl',   // 1.875rem (30px)
  fontSize: '4xl',   // 2.25rem (36px)
  fontSize: '5xl',   // 3rem (48px)
  fontSize: '6xl',   // 3.75rem (60px)
})
```

### Border Radius Scale

```tsx
css({
  borderRadius: 'none',  // 0
  borderRadius: 'sm',    // 0.125rem (2px)
  borderRadius: 'base',  // 0.25rem (4px)
  borderRadius: 'md',    // 0.375rem (6px)
  borderRadius: 'lg',    // 0.5rem (8px)
  borderRadius: 'xl',    // 0.75rem (12px)
  borderRadius: '2xl',   // 1rem (16px)
  borderRadius: 'full',  // 9999px
})
```

### Box Shadow Scale

```tsx
css({
  boxShadow: 'xs',   // small shadow
  boxShadow: 'sm',   // small shadow
  boxShadow: 'base', // base shadow
  boxShadow: 'md',   // medium shadow
  boxShadow: 'lg',   // large shadow
  boxShadow: 'xl',   // extra large shadow
  boxShadow: '2xl',  // 2x extra large shadow
  boxShadow: 'inner',// inner shadow
  boxShadow: 'none', // no shadow
})
```

## Typography

```tsx
css({
  // Font family
  fontFamily: 'sans',
  fontFamily: 'serif',
  fontFamily: 'mono',

  // Font size
  fontSize: 'lg',

  // Font weight
  fontWeight: 'thin',      // 100
  fontWeight: 'extralight', // 200
  fontWeight: 'light',     // 300
  fontWeight: 'normal',    // 400
  fontWeight: 'medium',    // 500
  fontWeight: 'semibold',  // 600
  fontWeight: 'bold',      // 700
  fontWeight: 'extrabold', // 800
  fontWeight: 'black',     // 900

  // Line height
  lineHeight: 'tight',     // 1.25
  lineHeight: 'snug',      // 1.375
  lineHeight: 'normal',    // 1.5
  lineHeight: 'relaxed',   // 1.625
  lineHeight: 'loose',     // 2

  // Letter spacing
  letterSpacing: 'tighter', // -0.05em
  letterSpacing: 'tight',   // -0.025em
  letterSpacing: 'normal',  // 0
  letterSpacing: 'wide',    // 0.025em
  letterSpacing: 'wider',   // 0.05em
  letterSpacing: 'widest',  // 0.1em

  // Text align
  textAlign: 'left',
  textAlign: 'center',
  textAlign: 'right',
  textAlign: 'justify',
})
```

## Layout

```tsx
css({
  // Display
  display: 'block',
  display: 'inline-block',
  display: 'flex',
  display: 'inline-flex',
  display: 'grid',
  display: 'inline-grid',
  display: 'hidden',

  // Flex
  flexDirection: 'row',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  justifyContent: 'center',
  justifyContent: 'flex-end',
  justifyContent: 'space-between',
  justifyContent: 'space-around',
  alignItems: 'stretch',
  alignItems: 'flex-start',
  alignItems: 'center',
  alignItems: 'flex-end',
  gap: '4',
  gapX: '4',
  gapY: '4',

  // Grid
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: '4',

  // Position
  position: 'static',
  position: 'relative',
  position: 'absolute',
  position: 'fixed',
  position: 'sticky',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  zIndex: '10',
})
```
