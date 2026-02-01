---
name: ask-claude
description: Asks Claude Code for coding assistance.
license: MIT
compatibility: opencode
---

# Ask claude CLI

Executes the local claude CLI (`claude`) to get coding assistance.

## Quickstart

```bash
claude -p "Your question or task here" \
  --append-system-prompt "あなたは優秀なシニアエンジニアです。OpenCodeからの質問や相談に乗ってあげてください。" \
  --alloedTools "Bash,Read,Edit"
```

