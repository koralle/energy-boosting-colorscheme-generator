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

### 4. Template Literals（テンプレートリテラル）

テンプレートリテラル構文を使用して、より柔軟なスタイリングが可能です。

```tsx
import { css } from 'styled-system/css'

// 基本的なテンプレートリテラル
const button = css`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: medium;
`

// 疑似セレクタとネスト
const buttonWithHover = css`
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: blue.600;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`

// 動的な値を含むスタイル
const dynamicButton = (variant: 'primary' | 'secondary') => css`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${variant === 'primary' ? 'blue.500' : 'gray.500'};
  color: ${variant === 'primary' ? 'white' : 'black'};

  &:hover {
    opacity: 0.9;
  }
`

// グローバルスタイルとの組み合わせ
const Card = styled('div', {
  base: css`
    background-color: white;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
  `
})
```

**利点**:
- 完全なCSS構文を使用できる
- 動的な値を簡単に埋め込める
- ネストされたスタイルを記述しやすい
- 既存のCSSをそのまま使用できる

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

## Color Opacity Modifier（カラーオパシティ修飾子）

色のトークンに `/` 構文を使用して透明度を指定できます。

```tsx
import { css } from 'styled-system/css'

// パーセンテージで透明度を指定
css({
  // 50%の透明度
  backgroundColor: 'blue.500/50',
  // 25%の透明度
  color: 'red.500/25',
  // 75%の透明度
  borderColor: 'green.500/75',
})

// 0-1の小数でも指定可能
css({
  backgroundColor: 'blue.500/0.5', // 50%の透明度
  color: 'red.500/0.25', // 25%の透明度
})

// 疑似セレクタと組み合わせ
css({
  backgroundColor: 'blue.500',
  _hover: {
    backgroundColor: 'blue.500/80', // ホバー時に80%の透明度
  },
  _active: {
    backgroundColor: 'blue.500/60', // アクティブ時に60%の透明度
  },
})

// セマンティックトークンでも使用可能
css({
  backgroundColor: 'primary/50',
  color: 'text.secondary/75',
})
```

**利点**:
- 別々の色トークンを定義する必要がない
- 実行時に透明度を動的に計算できる
- ダークモードでの色調整に便利

## JSX Style Context（JSXスタイルコンテキスト）

JSXコンポーネントでは、スタイルが親から子へ自動的に伝播します。

```tsx
import { styled } from 'styled-system/jsx'

// 親コンポーネントで指定したスタイルは子コンポーネントにも継承される
const Container = styled('div', {
  color: 'blue.500',
  fontSize: 'lg',
})

function Demo() {
  return (
    <Container>
      {/* このテキストは blue.500, lg のサイズで表示される */}
      <span>継承されたスタイル</span>
      <div>
        {/* ネストされた要素にも継承される */}
        <p>このテキストも継承されたスタイル</p>
      </div>
    </Container>
  )
}
```

**スタイルの優先順位**:
1. 子コンポーネントで明示的に指定されたスタイル
2. 親コンポーネントから継承されたスタイル
3. デフォルトのスタイル

## Merging Styles（スタイルのマージ）

複数のスタイルを結合する場合、Panda CSSは予測可能な方法でマージを行います。

```tsx
import { css, cx } from 'styled-system/css'

// 複数のcss呼び出しをマージ
function Demo() {
  const baseStyles = css({ color: 'blue.500', fontSize: 'lg' })
  const hoverStyles = css({ _hover: { color: 'blue.600' } })

  // cx関数で結合
  return (
    <div className={cx(baseStyles, hoverStyles, { padding: '4' })}>
      マージされたスタイル
    </div>
  )
}
```

**マージのルール**:

1. **ショートハンドプロパティが優先**
```tsx
css({
  paddingTop: '20px',  // 無視される
  padding: '10px'       // 優先される
})
// 結果: padding: 10px
```

2. **後から指定されたスタイルが優先**
```tsx
const styles1 = css({ color: 'red' })
const styles2 = css({ color: 'blue' })

cx(styles1, styles2)
// 結果: color: blue
```

3. **疑似セレクタはマージされる**
```tsx
const base = css({
  _hover: { color: 'blue.600' },
  fontSize: 'lg'
})

const extended = css({
  _hover: { bg: 'blue.50' },
  padding: '4'
})

cx(base, extended)
// 結果:
// _hover: { color: 'blue.600', bg: 'blue.50' }
// fontSize: 'lg'
// padding: '4'
```
