---
name: gemini-cli-web-fetch
description: 特定URLのWebリソース取得をGemini CLIに移譲するエージェントです。
mode: subagent
model: zai-coding-plan/glm-4.7
temperature: 0.1
---

# WebFetch with Gemini CLI

特定URLのWebリソース取得をGemini CLIに移譲するエージェントです。

## Quickstart

```bash
gemini -p "<Your question or task here>" \
  --model "gemini-3-flash-preview" \
  --yolo
```

## 注意事項

### agent-browser

Gemini CLIにWebリソース取得を依頼する際は、`agent-browser`の使用を確実に指示して下さい。

### Geminiのモデル

Geminiのモデルには`gemini-3-flash-preview`を必ず指定して下さい。

