---
name: ui-skills
description: Opinionated constraints for building better interfaces with agents.
---

# UI Skills

When invoked, apply these opinionated constraints for building better interfaces.

## How to use

- `/ui-skills`  
  Apply these constraints to any UI work in this conversation.

- `/ui-skills <file>`  
  Review the file against all constraints below and output:
  - violations (quote the exact line/snippet)
  - why it matters (1 short sentence)
  - a concrete fix (code-level suggestion)

## Stack

- MUST use Panda CSS for styling
- MUST use `motion` when JavaScript animation is required
- SHOULD use Panda CSS's built-in animations for entrance and micro-animations
- MUST use Panda CSS's `cx` utility or `clsx` for class logic
- MUST respect existing token definitions in `panda.config.ts` before introducing new design tokens

## Components

- MUST use accessible component primitives for anything with keyboard or focus behavior (`Base UI`, `React Aria`, `Radix`)
- MUST use the project’s existing component primitives first
- NEVER mix primitive systems within the same interaction surface
- SHOULD prefer [`Base UI`](https://base-ui.com/react/components) for new primitives if compatible with the stack
- MUST add an `aria-label` to icon-only buttons
- NEVER rebuild keyboard or focus behavior by hand unless explicitly requested

## Interaction

- MUST use an `AlertDialog` for destructive or irreversible actions
- SHOULD use structural skeletons for loading states
- NEVER use `height="screen"`, use `height="svb"` (Panda CSS camelCase)
- MUST respect `safeAreaInsets` for fixed elements (Panda CSS camelCase)
- MUST show errors next to where the action happens
- NEVER block paste in `input` or `textarea` elements

## Animation

- NEVER add animation unless it is explicitly requested
- MUST animate only compositor props (`transform`, `opacity`)
- NEVER animate layout properties (`inlineSize`, `blockSize`, `blockStart`, `inlineStart`, `margin`, `padding`)
- SHOULD avoid animating paint properties (`background`, `color`) except for small, local UI (text, icons)
- SHOULD use `ease-out` on entrance
- NEVER exceed `200ms` for interaction feedback
- MUST pause looping animations when off-screen
- SHOULD respect `prefers-reduced-motion`
- NEVER introduce custom easing curves unless explicitly requested
- SHOULD avoid animating large images or full-screen surfaces

## Typography

- MUST use `textBalance` for headings and `textPretty` for body/paragraphs (Panda CSS camelCase properties)
- MUST use `tabularNums` for data (Panda CSS camelCase property)
- SHOULD use `textOverflow="truncate"` or line-clamp utilities for dense UI
- NEVER modify `letterSpacing` unless explicitly requested

## Layout

- MUST use a fixed `zIndex` scale (Panda CSS camelCase, no arbitrary values)
- MUST use logical properties: `inlineSize` instead of `width`, `blockSize` instead of `height`
- MUST use logical properties for spacing: `blockStart`, `blockEnd`, `inlineStart`, `inlineEnd` instead of `top`, `bottom`, `left`, `right`
- SHOULD use Panda CSS conditional properties for square elements instead of separating them

## Performance

- NEVER animate large `blur()` or `backdrop-filter` surfaces
- NEVER apply `will-change` outside an active animation
- NEVER use `useEffect` for anything that can be expressed as render logic

## Design

- NEVER use gradients unless explicitly requested
- NEVER use purple or multicolor gradients
- NEVER use glow effects as primary affordances
- SHOULD use Panda CSS default shadow scale unless explicitly requested
- MUST give empty states one clear next action
- SHOULD limit accent color usage to one per view
- SHOULD use existing theme tokens in `panda.config.ts` before introducing new ones
