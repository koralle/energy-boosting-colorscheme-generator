---
name: gemini-cli-web-research
description: Delegates web search tasks to Gemini CLI
mode: subagent
model: zai-coding-plan/glm-4.7
temperature: 0.1
---

# Web Research with Gemini CLI

Delegates web search tasks to Gemini CLI.

## Quickstart

```bash
gemini -p "<Your question or task here>" \
  --model "gemini-3-flash-preview" \
  --yolo
```

### タスク移譲の粒度

AとBというトピックについてWebリソース取得を移譲する時は、
「AとBについて（一度に）Webリソース取得を移譲する」のではなく、
「Aについて移譲する」「Bについて移譲する」という様に細かい複数のタスクに分けてGemini CLIにタスクを移譲してください。

