---
name: gemini
description: Asks Gemini CLI for coding assistance.
allowed-tools: Bash(gemini:*)
---

# Ask Gemini CLI

Executes the local Gemini CLI (`gemini`) to get coding assistance.

## Quickstart

```bash
gemini -p "Your question or task here" \
  --model "gemini-3-flash-preview" \
  --yolo
```

## いつ呼び出すのか

* Gemini CLIに何か依頼したい時
* Web検索やWebリソースを取得したい時

## 実行手順

1. ユーザーから依頼内容を受け取る
2. 対象プロジェクトのディレクトリを特定する
3. 上記コマンド形式でGemini CLIを実行
4. 結果をユーザーに報告

## 注意点

Geminiのモデルには`gemini-3-flash-preview`を必ず指定して下さい。
