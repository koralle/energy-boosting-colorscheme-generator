# アイコン

アイコンは指定がない限り[Lucide](https://lucide.dev/)のアイコンを使用します。

## QuickStart

```tsx
import { ThumbsUp } from "lucide-react";

function LikeButton() {
  return (
    <button style={{ color: "#fff" }}>
      <ThumbsUp />
      Like
    </button>
  );
}
```

## 基本的な使い方

### 色を変える

```tsx
import { Smile } from "lucide-react";

function App() {
  return (
    <div className="app">
      <Smile color="#3e9392" />
    </div>
  );
}

export default App;
```

または

```tsx
import { ThumbsUp } from "lucide-react";

function LikeButton() {
  return (
    <button style={{ color: "#fff" }}>
      <ThumbsUp />
      Like
    </button>
  );
}

export default LikeButton;


```


>[!NOTE]
> 詳細は[公式ドキュメント](https://lucide.dev/guide/basics/color)を参考にして下さい。

### アイコンの大きさを変更する

```tsx
import { Landmark } from "lucide-react";

function App() {
  return (
    <div className="app">
      <Landmark size={64} />
    </div>
  );
}

export default App;
```

> [!NOTE]
> 詳細は[公式ドキュメント](https://lucide.dev/guide/basics/sizing)を参考にして下さい。

### 線の太さを変更する

```tsx
import { FolderLock } from "lucide-react";

function App() {
  return (
    <div className="app">
      <FolderLock strokeWidth={1} />
    </div>
  );
}

export default App;
```

> [!NOTE]
> 詳細は[公式ドキュメント](https://lucide.dev/guide/basics/stroke-width)を参考にして下さい。


## 注意事項

使用できそうなアイコンの候補が複数ある場合、 AskUserQuestionを使って確認を仰ぐ様にして下さい。
