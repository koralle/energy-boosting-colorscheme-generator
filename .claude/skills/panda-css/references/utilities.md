# Panda CSS Utilities

Panda CSSのユーティリティプロパティの完全なリファレンスです。

## Utility Categories Overview

Panda CSSのユーティリティは以下のカテゴリに分類されています：

| カテゴリ | 説明 |
|---------|------|
| **Layout** | display, position, overflow など |
| **Flexbox** | flex関連のプロパティ |
| **Grid** | grid関連のプロパティ |
| **Spacing** | padding, margin |
| **Sizing** | width, height, maxWidth など |
| **Typography** | font, text, line-height など |
| **Background** | background-color, gradient など |
| **Border** | border, border-radius |
| **Effects** | box-shadow, opacity, filter |
| **Transforms** | transform, transform-origin |
| **Transitions** | transition, transition-property |
| **Interactivity** | cursor, pointer-events |
| **SVG** | fill, stroke など |

## Layout Utilities

### Display

```tsx
css({
  display: 'block',
  display: 'inline-block',
  display: 'flex',
  display: 'inline-flex',
  display: 'grid',
  display: 'inline-grid',
  display: 'hidden',
  display: 'none',
})
```

### Position

```tsx
css({
  position: 'static',
  position: 'relative',
  position: 'absolute',
  position: 'fixed',
  position: 'sticky',
})
```

### Inset（top, right, bottom, left）

```tsx
css({
  // 個別指定
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',

  // 短縮形
  inset: '0',           // 全方向
  inset: '4',           // 全方向に4
  insetX: '4',          // 左右に4
  insetY: '4',          // 上下に4
  insetInline: '4',     // インライン方向（LTRなら左右）
  insetBlock: '4',      // ブロック方向（LTRなら上下）
})
```

### Overflow

```tsx
css({
  overflow: 'hidden',
  overflow: 'visible',
  overflow: 'scroll',
  overflow: 'auto',

  overflowX: 'hidden',
  overflowY: 'auto',
})
```

### Z-Index

```tsx
css({
  zIndex: '0',
  zIndex: '10',
  zIndex: 'auto',
})
```

## Flexbox Utilities

### Flex Direction

```tsx
css({
  flexDirection: 'row',
  flexDirection: 'column',
  flexDirection: 'row-reverse',
  flexDirection: 'column-reverse',
})
```

### Flex Wrap

```tsx
css({
  flexWrap: 'wrap',
  flexWrap: 'nowrap',
  flexWrap: 'wrap-reverse',
})
```

### Align Items

```tsx
css({
  alignItems: 'stretch',
  alignItems: 'flex-start',
  alignItems: 'flex-end',
  alignItems: 'center',
  alignItems: 'baseline',
})
```

### Align Content

```tsx
css({
  alignContent: 'flex-start',
  alignContent: 'flex-end',
  alignContent: 'center',
  alignContent: 'space-between',
  alignContent: 'space-around',
  alignContent: 'stretch',
})
```

### Justify Content

```tsx
css({
  justifyContent: 'flex-start',
  justifyContent: 'flex-end',
  justifyContent: 'center',
  justifyContent: 'space-between',
  justifyContent: 'space-around',
  justifyContent: 'space-evenly',
})
```

### Align Self

```tsx
css({
  alignSelf: 'auto',
  alignSelf: 'flex-start',
  alignSelf: 'flex-end',
  alignSelf: 'center',
  alignSelf: 'stretch',
})
```

### Flex Grow / Shrink / Basis

```tsx
css({
  flexGrow: '0',
  flexGrow: '1',
  flexShrink: '0',
  flexShrink: '1',
  flexBasis: '0',
  flexBasis: 'auto',
})
```

### Flex 短縮形

```tsx
css({
  flex: '1',
  flex: '0 1 auto',
  flex: 'none',
})
```

### Gap

```tsx
css({
  gap: '4',
  gapX: '4',
  gapY: '4',
})
```

## Grid Utilities

### Grid Template Columns / Rows

```tsx
css({
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateColumns: '1fr 2fr 1fr',
  gridTemplateRows: 'auto 1fr auto',
})
```

### Grid Column / Row

```tsx
css({
  gridColumn: '1 / 3',
  gridRow: '1 / 2',
  gridArea: 'header',
})
```

### Grid Auto Flow

```tsx
css({
  gridAutoFlow: 'row',
  gridAutoFlow: 'column',
  gridAutoFlow: 'dense',
})
```

## Spacing Utilities

### Padding

```tsx
css({
  // 全方向
  padding: '4',
  p: '4',

  // 個別指定
  paddingTop: '4',
  paddingRight: '4',
  paddingBottom: '4',
  paddingLeft: '4',

  // 短縮形
  pt: '4',
  pr: '4',
  pb: '4',
  pl: '4',

  // 組み合わせ
  px: '4',     // 左右
  py: '4',     // 上下
  paddingInline: '4',
  paddingBlock: '4',
})
```

### Margin

```tsx
css({
  // 全方向
  margin: '4',
  m: '4',

  // 個別指定
  marginTop: '4',
  marginRight: '4',
  marginBottom: '4',
  marginLeft: '4',

  // 短縮形
  mt: '4',
  mr: '4',
  mb: '4',
  ml: '4',

  // 組み合わせ
  mx: 'auto',  // 左右
  my: '4',     // 上下
  marginInline: '4',
  marginBlock: '4',

  // 自動マージン（中央揃え）
  mx: 'auto',
})
```

## Sizing Utilities

### Width

```tsx
css({
  width: 'full',
  width: 'screen',
  width: '100%',
  width: '50%',
  width: 'auto',
  w: '4',
  minW: '8',
  maxW: '64',
})
```

### Height

```tsx
css({
  height: 'full',
  height: 'screen',
  height: '100%',
  height: 'auto',
  h: '4',
  minH: '8',
  maxH: '64',
})
```

### Max Width / Max Height

```tsx
css({
  maxWidth: 'xs',     // 20rem (320px)
  maxWidth: 'sm',     // 24rem (384px)
  maxWidth: 'md',     // 28rem (448px)
  maxWidth: 'lg',     // 32rem (512px)
  maxWidth: 'xl',     // 36rem (576px)
  maxWidth: '2xl',    // 42rem (672px)
  maxWidth: 'full',   // 100%
  maxHeight: 'screen',
})
```

## Typography Utilities

### Font Family

```tsx
css({
  fontFamily: 'sans',
  fontFamily: 'serif',
  fontFamily: 'mono',
  fontFamily: 'cursive',
  fontFamily: 'system-ui',
})
```

### Font Size

```tsx
css({
  fontSize: 'xs',    // 0.75rem
  fontSize: 'sm',    // 0.875rem
  fontSize: 'base',  // 1rem
  fontSize: 'lg',    // 1.125rem
  fontSize: 'xl',    // 1.25rem
  fontSize: '2xl',   // 1.5rem
  fontSize: '3xl',   // 1.875rem
  fontSize: '4xl',   // 2.25rem
  fontSize: '5xl',   // 3rem
  fontSize: '6xl',   // 3.75rem
  textSize: 'lg',    // 別名
})
```

### Font Weight

```tsx
css({
  fontWeight: 'thin',       // 100
  fontWeight: 'extralight', // 200
  fontWeight: 'light',      // 300
  fontWeight: 'normal',     // 400
  fontWeight: 'medium',     // 500
  fontWeight: 'semibold',   // 600
  fontWeight: 'bold',       // 700
  fontWeight: 'extrabold',  // 800
  fontWeight: 'black',      // 900
})
```

### Letter Spacing

```tsx
css({
  letterSpacing: 'tighter',  // -0.05em
  letterSpacing: 'tight',    // -0.025em
  letterSpacing: 'normal',   // 0
  letterSpacing: 'wide',     // 0.025em
  letterSpacing: 'wider',    // 0.05em
  letterSpacing: 'widest',   // 0.1em
})
```

### Line Height

```tsx
css({
  lineHeight: 'tight',    // 1.25
  lineHeight: 'snug',     // 1.375
  lineHeight: 'normal',   // 1.5
  lineHeight: 'relaxed',  // 1.625
  lineHeight: 'loose',    // 2
  leading: 'tight',       // 別名
})
```

### Text Align

```tsx
css({
  textAlign: 'left',
  textAlign: 'center',
  textAlign: 'right',
  textAlign: 'justify',
})
```

### Text Transform

```tsx
css({
  textTransform: 'uppercase',
  textTransform: 'lowercase',
  textTransform: 'capitalize',
})
```

### Text Decoration

```tsx
css({
  textDecoration: 'underline',
  textDecoration: 'line-through',
  textDecoration: 'none',
})
```

## Background Utilities

### Background Color

```tsx
css({
  backgroundColor: 'blue.500',
  bg: 'blue.500',           // 短縮形
})
```

### Background Image

```tsx
css({
  backgroundImage: 'url(/image.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})
```

### Gradient

```tsx
css({
  background: 'linear-gradient(to right, blue.500, purple.500)',
  backgroundImage: 'linear-gradient(to bottom, transparent, black)',
})
```

## Border Utilities

### Border Width

```tsx
css({
  borderWidth: '1',
  borderWidth: '2',
  borderWidth: '4',
  borderWidth: '8',
})
```

### Border Style

```tsx
css({
  borderStyle: 'solid',
  borderStyle: 'dashed',
  borderStyle: 'dotted',
  borderStyle: 'double',
})
```

### Border Color

```tsx
css({
  borderColor: 'blue.500',
})
```

### Border Radius

```tsx
css({
  borderRadius: 'none',  // 0
  borderRadius: 'sm',    // 0.125rem
  borderRadius: 'base',  // 0.25rem
  borderRadius: 'md',    // 0.375rem
  borderRadius: 'lg',    // 0.5rem
  borderRadius: 'xl',    // 0.75rem
  borderRadius: '2xl',   // 1rem
  borderRadius: '3xl',   // 1.5rem
  borderRadius: 'full',  // 9999px
  rounded: 'lg',         // 短縮形
  roundedTop: 'lg',
  roundedBottom: 'lg',
})
```

### Border 短縮形

```tsx
css({
  border: '1px solid blue.500',
  borderTop: '1px solid',
  borderRight: '1px solid',
  borderBottom: '1px solid',
  borderLeft: '1px solid',
})
```

## Effects Utilities

### Box Shadow

```tsx
css({
  boxShadow: 'xs',     // 小さな影
  boxShadow: 'sm',     // 小さな影
  boxShadow: 'base',   // 基本的な影
  boxShadow: 'md',     // 中程度の影
  boxShadow: 'lg',     // 大きな影
  boxShadow: 'xl',     // 特大の影
  boxShadow: '2xl',    // 超特大の影
  boxShadow: 'inner',  // 内側の影
  boxShadow: 'none',   // 彩なし
  shadow: 'md',        // 短縮形
})
```

### Opacity

```tsx
css({
  opacity: '0',
  opacity: '25',
  opacity: '50',
  opacity: '75',
  opacity: '100',
})
```

### Filter

```tsx
css({
  filter: 'blur(4px)',
  filter: 'brightness(1.2)',
  filter: 'contrast(1.1)',
  filter: 'grayscale(1)',
  filter: 'hue-rotate(90deg)',
  filter: 'invert(1)',
  filter: 'saturate(1.5)',
  filter: 'sepia(1)',
})
```

## Transforms Utilities

```tsx
css({
  transform: 'translateX(4px)',
  transform: 'translateY(-2px)',
  transform: 'scale(1.1)',
  transform: 'rotate(45deg)',
  transform: 'skewX(10deg)',
  transformOrigin: 'center',
  transformOrigin: 'top',
  transformOrigin: 'top left',
})
```

## Transitions Utilities

```tsx
css({
  transition: 'all 150ms ease-in-out',
  transitionDuration: '150ms',
  transitionTimingFunction: 'ease-in-out',
  transitionDelay: '0ms',
})
```

## Interactivity Utilities

### Cursor

```tsx
css({
  cursor: 'auto',
  cursor: 'default',
  cursor: 'pointer',
  cursor: 'wait',
  cursor: 'move',
  cursor: 'not-allowed',
  cursor: 'grab',
  cursor: 'grabbing',
})
```

### Pointer Events

```tsx
css({
  pointerEvents: 'auto',
  pointerEvents: 'none',
})
```

### User Select

```tsx
css({
  userSelect: 'auto',
  userSelect: 'text',
  userSelect: 'none',
})
```

## Custom Utilities

カスタムユーティリティを定義することもできます：

```tsx
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  theme: {
    extend: {
      utilities: {
        // カスタムユーティリティを定義
        'text-shadow': {
          className: 'text-shadow',
          values: 'spacing',
          transform: (value) => ({
            textShadow: `0 2px 4px ${value}`
          }),
          shorthand: 'textShadow'
        }
      }
    }
  }
})
```
