# Panda CSS Recipes and Patterns

Panda CSSのレシピと組み込みパターンの使用方法について説明します。

## Slot Recipes（スロットレシピ）

スロットレシピは、複数の子要素（スロット）を持つ複合コンポーネントのスタイリングを簡単にする機能です。

### Slot Recipes とは

スロットレシピを使用すると、Card、Alert、Tabsなどの複数のパーツで構成されるコンポーネントを、一つのレシピとして定義できます。

**通常のレシピとの違い**:
- 通常のレシピ（cva）: 単一の要素にスタイルを適用
- スロットレシピ: 複数のスロット（要素）にそれぞれスタイルを適用

### Slot Recipes の定義

`panda.config.ts` で `defineSlotRecipe` を使用して定義します：

```tsx
// panda.config.ts
import { defineConfig, defineSlotRecipe } from '@pandacss/dev'

export const cardRecipe = defineSlotRecipe({
  className: 'card',
  slots: ['root', 'header', 'body', 'footer'],

  base: {
    root: {
      backgroundColor: 'white',
      borderRadius: 'lg',
      boxShadow: 'md',
      overflow: 'hidden'
    },
    header: {
      padding: '1.5rem',
      borderBottom: '1px solid',
      borderColor: 'gray.200'
    },
    body: {
      padding: '1.5rem'
    },
    footer: {
      padding: '1rem 1.5rem',
      borderTop: '1px solid',
      borderColor: 'gray.200',
      backgroundColor: 'gray.50'
    }
  },

  variants: {
    variant: {
      elevated: {
        root: { boxShadow: 'lg' }
      },
      outlined: {
        root: {
          boxShadow: 'none',
          border: '1px solid',
          borderColor: 'gray.200'
        }
      }
    },
    size: {
      sm: {
        header: { padding: '1rem', fontSize: 'sm' },
        body: { padding: '1rem' },
        footer: { padding: '0.75rem 1rem' }
      },
      md: {
        header: { padding: '1.5rem', fontSize: 'base' },
        body: { padding: '1.5rem' },
        footer: { padding: '1rem 1.5rem' }
      },
      lg: {
        header: { padding: '2rem', fontSize: 'lg' },
        body: { padding: '2rem' },
        footer: { padding: '1.25rem 2rem' }
      }
    }
  },

  defaultVariants: {
    variant: 'elevated',
    size: 'md'
  }
})

export default defineConfig({
  theme: {
    extend: {
      slotRecipes: {
        card: cardRecipe
      }
    }
  }
})
```

### Slot Recipes の使用

生成されたコンポーネントを使用します：

```tsx
import { Card } from 'styled-system/recipes'

function Demo() {
  return (
    <Card>
      <Card.Header>
        <h2>カードタイトル</h2>
      </Card.Header>
      <Card.Body>
        <p>カードのコンテンツがここに入ります。</p>
      </Card.Body>
      <Card.Footer>
        <button>アクション</button>
      </Card.Footer>
    </Card>
  )
}
```

### バリアントを指定する場合

```tsx
import { Card } from 'styled-system/recipes'

function Demo() {
  return (
    <Card variant="outlined" size="lg">
      <Card.Header>
        <h2>アウトラインカード</h2>
      </Card.Header>
      <Card.Body>
        <p>大きなサイズのアウトラインカードです。</p>
      </Card.Body>
      <Card.Footer>
        <button>アクション</button>
      </Card.Footer>
    </Card>
  )
}
```

### 一般的なスロットレシピパターン

#### Alert コンポーネント

```tsx
// panda.config.ts
export const alertRecipe = defineSlotRecipe({
  className: 'alert',
  slots: ['root', 'icon', 'title', 'description'],

  base: {
    root: {
      display: 'flex',
      alignItems: 'start',
      gap: '3',
      padding: '4',
      borderRadius: 'lg',
      borderWidth: '1px',
      borderStyle: 'solid'
    },
    icon: {
      flexShrink: '0',
      width: '5',
      height: '5'
    },
    title: {
      fontWeight: 'medium',
      marginBottom: '1'
    },
    description: {
      fontSize: 'sm',
      color: 'gray.600',
      _dark: { color: 'gray.400' }
    }
  },

  variants: {
    status: {
      info: {
        root: {
          backgroundColor: 'blue.50',
          borderColor: 'blue.200',
          color: 'blue.800'
        },
        icon: { color: 'blue.500' }
      },
      success: {
        root: {
          backgroundColor: 'green.50',
          borderColor: 'green.200',
          color: 'green.800'
        },
        icon: { color: 'green.500' }
      },
      warning: {
        root: {
          backgroundColor: 'yellow.50',
          borderColor: 'yellow.200',
          color: 'yellow.800'
        },
        icon: { color: 'yellow.500' }
      },
      error: {
        root: {
          backgroundColor: 'red.50',
          borderColor: 'red.200',
          color: 'red.800'
        },
        icon: { color: 'red.500' }
      }
    }
  },

  defaultVariants: {
    status: 'info'
  }
})
```

```tsx
import { Alert } from 'styled-system/recipes'

function Demo() {
  return (
    <Alert status="success">
      <Alert.Icon>
        <CheckIcon />
      </Alert.Icon>
      <div>
        <Alert.Title>成功しました！</Alert.Title>
        <Alert.Description>操作が正常に完了しました。</Alert.Description>
      </div>
    </Alert>
  )
}
```

#### Tabs コンポーネント

```tsx
// panda.config.ts
export const tabsRecipe = defineSlotRecipe({
  className: 'tabs',
  slots: ['root', 'list', 'trigger', 'content', 'panel'],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    list: {
      display: 'flex',
      flexDirection: 'row',
      borderBottom: '1px solid',
      borderColor: 'gray.200'
    },
    trigger: {
      padding: '0.75rem 1rem',
      fontWeight: 'medium',
      color: 'gray.600',
      borderBottom: '2px solid',
      borderBottomColor: 'transparent',
      cursor: 'pointer',
      _hover: {
        color: 'gray.900'
      },
      '&[data-state="active"]': {
        color: 'blue.600',
        borderBottomColor: 'blue.600'
      }
    },
    content: {
      padding: '1.5rem 0'
    },
    panel: {
      display: 'none',
      '&[data-state="active"]': {
        display: 'block'
      }
    }
  },

  variants: {
    variant: {
      underline: {
        list: {
          borderBottom: '1px solid',
          borderColor: 'gray.200'
        },
        trigger: {
          borderBottom: '2px solid',
          borderBottomColor: 'transparent'
        }
      },
      enclosed: {
        list: {
          backgroundColor: 'gray.100',
          padding: '0.25rem',
          borderRadius: 'lg',
          gap: '0.25rem'
        },
        trigger: {
          borderRadius: 'md',
          border: 'none',
          backgroundColor: 'transparent',
          '&[data-state="active"]': {
            backgroundColor: 'white',
            boxShadow: 'sm'
          }
        }
      }
    },
    size: {
      sm: {
        trigger: { padding: '0.5rem 0.75rem', fontSize: 'sm' }
      },
      md: {
        trigger: { padding: '0.75rem 1rem', fontSize: 'base' }
      },
      lg: {
        trigger: { padding: '1rem 1.25rem', fontSize: 'lg' }
      }
    }
  },

  defaultVariants: {
    variant: 'underline',
    size: 'md'
  }
})
```

```tsx
import { Tabs } from 'styled-system/recipes'

function Demo() {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Trigger value="tab1">タブ1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">タブ2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">タブ3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content>
        <Tabs.Panel value="tab1">
          <p>タブ1のコンテンツ</p>
        </Tabs.Panel>
        <Tabs.Panel value="tab2">
          <p>タブ2のコンテンツ</p>
        </Tabs.Panel>
        <Tabs.Panel value="tab3">
          <p>タブ3のコンテンツ</p>
        </Tabs.Panel>
      </Tabs.Content>
    </Tabs>
  )
}
```

### スロットレシピの利点

1. **型安全性**: 各スロットが個別のコンポーネントとして生成されるため、型安全
2. **一貫性**: 複合コンポーネント全体で一貫したスタイリング
3. **バリアント**: スロット間で共有されるバリアントを定義可能
4. **再利用性**: コンポーネントライブラリで簡単に再利用可能

## Atomic Recipes（アトミックレシピ）

レシピは、複数のバリアントを持つ再利用可能なスタイルコンポーネントを作成するための機能です。

### Recipe Structure

レシピは4つの主要なプロパティで構成されます：

- **`base`**: コンポーネントの基本スタイル
- **`variants`**: コンポーネントの異なる visual スタイル
- **`compoundVariants`**: 複数のバリアントが組み合わさったときのスタイル
- **`defaultVariants`**: デフォルトのバリアント値

### Creating Recipes with cva

```tsx
import { cva } from 'styled-system/css'

// ボタンレシピ
const button = cva({
  // 基本スタイル
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'medium',
    borderRadius: 'md',
    cursor: 'pointer',
    transition: 'all 150ms'
  },

  // バリアント
  variants: {
    // visual バリアント
    visual: {
      solid: {
        backgroundColor: 'blue.500',
        color: 'white',
        _hover: { backgroundColor: 'blue.600' }
      },
      outline: {
        border: '1px solid',
        borderColor: 'blue.500',
        color: 'blue.500',
        backgroundColor: 'transparent',
        _hover: { backgroundColor: 'blue.50' }
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'blue.500',
        _hover: { backgroundColor: 'blue.50' }
      }
    },
    // size バリアント
    size: {
      sm: {
        fontSize: '0.75rem',
        padding: '0.25rem 0.5rem'
      },
      md: {
        fontSize: '0.875rem',
        padding: '0.5rem 1rem'
      },
      lg: {
        fontSize: '1rem',
        padding: '0.75rem 1.5rem'
      }
    }
  },

  // 複合バリアント
  compoundVariants: [
    {
      visual: 'outline',
      size: 'sm',
      css: {
        borderWidth: '1px',
        fontSize: '0.75rem'
      }
    },
    {
      visual: 'solid',
      size: 'lg',
      css: {
        backgroundColor: 'green.500',
        _hover: { backgroundColor: 'green.600' }
      }
    }
  ],

  // デフォルトバリアント
  defaultVariants: {
    visual: 'solid',
    size: 'md'
  }
})

// 使用
<button className={button({ visual: 'outline', size: 'lg' })}>
  Click me
</button>
```

### Config File Recipes

`panda.config.ts` でレシピを定義することもできます：

```tsx
// panda.config.ts
import { defineConfig, defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
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

## Built-in Patterns

Panda CSSには、一般的なレイアウトパターンを作成するための組み込みパターンが含まれています。

### Flex Pattern

Flexboxレイアウトを作成します：

```tsx
import { flex, Flex } from 'styled-system/jsx'

// 関数として使用
<div className={flex({ direction: 'row', align: 'center', gap: '4' })}>
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// JSXコンポーネントとして使用
<Flex direction="row" align="center" gap="4">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

### Stack Pattern

縦または横方向の要素を配置します：

```tsx
import { stack, Stack } from 'styled-system/jsx'

// 関数として使用
<div className={stack({ direction: 'column', gap: '4', align: 'stretch' })}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// JSXコンポーネントとして使用
<Stack gap="4" padding="4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

### HStack Pattern

水平方向のStack（横方向のレイアウト）：

```tsx
import { hstack, HStack } from 'styled-system/jsx'

// 関数として使用
<div className={hstack({ gap: '6' })}>
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</div>

// JSXコンポーネントとして使用
<HStack gap="6">
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</HStack>
```

### VStack Pattern

垂直方向のStack（縦方向のレイアウト）：

```tsx
import { vstack, VStack } from 'styled-system/jsx'

// 関数として使用
<div className={vstack({ gap: '6' })}>
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</div>

// JSXコンポーネントとして使用
<VStack gap="6">
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</VStack>
```

### Grid Pattern

グリッドレイアウトを作成します：

```tsx
import { grid, Grid } from 'styled-system/jsx'

// 関数として使用
<div className={grid({ columns: 3, gap: '4' })}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// JSXコンポーネントとして使用
<Grid columns={3} gap="4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### Container Pattern

コンテナクエリ用のパターン：

```tsx
import { cq, Cq } from 'styled-system/patterns'
import { css } from 'styled-system/css'

// 関数として使用
<div className={cq({ name: 'sidebar' })}>
  <div className={css({
    fontSize: { base: 'sm', '@sidebar/sm': 'md' }
  })}>
    Responsive to container
  </div>
</div>

// JSXコンポーネントとして使用
<Cq name="sidebar">
  <div className={css({
    fontSize: { base: 'sm', '@sidebar/sm': 'md' }
  })}>
    Responsive to container
  </div>
</Cq>
```

### Circle Pattern

円形の要素を作成します：

```tsx
import { circle, Circle } from 'styled-system/jsx'

// 関数として使用
<div className={circle({ size: '10', bg: 'blue.500' })} />

// JSXコンポーネントとして使用
<Circle size="10" bg="blue.500" />
```

### Box Pattern

基本的なボックス要素：

```tsx
import { box, Box } from 'styled-system/jsx'

// 関数として使用
<div className={box({ p: '4', bg: 'white', rounded: 'lg' })} />

// JSXコンポーネントとして使用
<Box p="4" bg="white" rounded="lg" />
```

### Link Pattern

リンク要素：

```tsx
import { link, Link } from 'styled-system/jsx'

// 関数として使用
<a href="/about" className={link({ color: 'blue.500', _hover: { color: 'blue.600' } })}>
  About
</a>

// JSXコンポーネントとして使用
<Link href="/about" color="blue.500" _hover={{ color: 'blue.600' }}>
  About
</Link>
```

## Component Patterns

### Card Component

```tsx
import { styled } from 'styled-system/jsx'

const Card = styled('div', {
  base: {
    bg: 'white',
    borderRadius: 'lg',
    boxShadow: 'md',
    p: '6',
    transition: 'all 150ms'
  },
  variants: {
    variant: {
      elevated: {
        boxShadow: 'lg',
        _hover: { boxShadow: 'xl', transform: 'translateY(-2px)' }
      },
      flat: {
        boxShadow: 'none',
        border: '1px solid',
        borderColor: 'gray.200'
      }
    }
  },
  defaultVariants: {
    variant: 'elevated'
  }
})
```

### Button Component

```tsx
import { cva } from 'styled-system/css'

const button = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'medium',
    borderRadius: 'md',
    cursor: 'pointer',
    transition: 'all 150ms',
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: 'blue.500',
        color: 'white',
        _hover: { backgroundColor: 'blue.600' }
      },
      secondary: {
        backgroundColor: 'gray.200',
        color: 'black',
        _hover: { backgroundColor: 'gray.300' }
      },
      outline: {
        border: '1px solid',
        borderColor: 'blue.500',
        color: 'blue.500',
        backgroundColor: 'transparent',
        _hover: { backgroundColor: 'blue.50' }
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'blue.500',
        _hover: { backgroundColor: 'blue.50' }
      }
    },
    size: {
      xs: { fontSize: '0.625rem', padding: '0.125rem 0.25rem' },
      sm: { fontSize: '0.75rem', padding: '0.25rem 0.5rem' },
      md: { fontSize: '0.875rem', padding: '0.5rem 1rem' },
      lg: { fontSize: '1rem', padding: '0.75rem 1.5rem' },
      xl: { fontSize: '1.125rem', padding: '1rem 2rem' }
    }
  },
  compoundVariants: [
    {
      variant: 'outline',
      size: ['xs', 'sm'],
      css: { borderWidth: '1px' }
    }
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})
```

### Input Component

```tsx
import { styled } from 'styled-system/jsx'

const Input = styled('input', {
  base: {
    width: '100%',
    px: '3',
    py: '2',
    bg: 'white',
    border: '1px solid',
    borderColor: 'gray.300',
    borderRadius: 'md',
    fontSize: 'md',
    transition: 'all 150ms',
    _placeholder: {
      color: 'gray.400'
    },
    _focus: {
      outline: 'none',
      borderColor: 'blue.500',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    },
    _disabled: {
      bg: 'gray.100',
      cursor: 'not-allowed'
    },
    _invalid: {
      borderColor: 'red.500'
    }
  },
  variants: {
    size: {
      sm: { px: '2', py: '1', fontSize: 'sm' },
      md: { px: '3', py: '2', fontSize: 'md' },
      lg: { px: '4', py: '3', fontSize: 'lg' }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})
```

### Badge Component

```tsx
import { cva } from 'styled-system/css'

const badge = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    px: '2',
    py: '0.5',
    fontSize: 'xs',
    fontWeight: 'medium',
    borderRadius: 'md'
  },
  variants: {
    variant: {
      success: {
        backgroundColor: 'green.100',
        color: 'green.800'
      },
      warning: {
        backgroundColor: 'yellow.100',
        color: 'yellow.800'
      },
      error: {
        backgroundColor: 'red.100',
        color: 'red.800'
      },
      info: {
        backgroundColor: 'blue.100',
        color: 'blue.800'
      }
    },
    size: {
      sm: { fontSize: '0.625rem', px: '1.5', py: '0.25' },
      md: { fontSize: '0.75rem', px: '2', py: '0.5' },
      lg: { fontSize: '0.875rem', px: '2.5', py: '0.75' }
    }
  },
  defaultVariants: {
    variant: 'info',
    size: 'md'
  }
})
```

### Avatar Component

```tsx
import { styled } from 'styled-system/jsx'

const Avatar = styled('div', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'full',
    backgroundColor: 'gray.200',
    color: 'gray.600',
    fontWeight: 'medium',
    overflow: 'hidden'
  },
  variants: {
    size: {
      xs: { width: '6', height: '6', fontSize: '0.625rem' },
      sm: { width: '8', height: '8', fontSize: '0.75rem' },
      md: { width: '10', height: '10', fontSize: '0.875rem' },
      lg: { width: '12', height: '12', fontSize: '1rem' },
      xl: { width: '16', height: '16', fontSize: '1.125rem' }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})
```

### Tooltip Component

```tsx
import { styled } from 'styled-system/jsx'

const Tooltip = styled('div', {
  base: {
    position: 'absolute',
    px: '2',
    py: '1',
    backgroundColor: 'gray.900',
    color: 'white',
    fontSize: 'sm',
    borderRadius: 'md',
    whiteSpace: 'nowrap',
    opacity: 0,
    visibility: 'hidden',
    transition: 'all 150ms',
    _groupHover: {
      opacity: 1,
      visibility: 'visible'
    }
  },
  variants: {
    placement: {
      top: {
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        mb: '1'
      },
      bottom: {
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        mt: '1'
      },
      left: {
        right: '100%',
        top: '50%',
        transform: 'translateY(-50%)',
        mr: '1'
      },
      right: {
        left: '100%',
        top: '50%',
        transform: 'translateY(-50%)',
        ml: '1'
      }
    }
  },
  defaultVariants: {
    placement: 'top'
  }
})
```

## Best Practices

1. **再利用可能なレシピを作成**: よく使うコンポーネントはレシピとして定義
2. **バリアントを適切に設計**: ユーザーが柔軟にカスタマイズできるように
3. **複合バリアントを活用**: 複数のバリアントが組み合わさったときのスタイルを定義
4. **組み込みパターンを活用**: Flex、Stack、Grid などのパターンを再利用
5. **一貫性を保つ**: デザインシステム全体で一貫性を保つようにレシピを設計
