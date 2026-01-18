import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            value: "#7c3aed", // 紫（エネルギーUP色をイメージ）
          },
          text: {
            primary: { value: "#1f2937" },
            secondary: { value: "#6b7280" },
          },
        },
        fonts: {
          serif: {
            value: "Cormorant Garamond, 'Noto Serif JP', serif",
          },
          sans: {
            value: "'Noto Sans JP', sans-serif",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // Global CSS
  cssVarsRoot: ":where(:where, :where, :where))",
  globalCss: {
    body: {
      bg: "white",
      color: "text.primary",
      fontFamily: "sans",
    },

    // 印刷用スタイル
    "@media print": {
      body: {
        bg: "white",
      },

      // ページ区切りの制御
      "*": {
        boxShadow: "none !important",
      },

      // リンクのURLを表示
      'a[href^="http"]': {
        "&::after": {
          content: " attr(href)",
          fontSize: "0.8em",
          color: "#666",
        },
      },

      // 印刷時の改ページを防ぐ要素
      ".no-break": {
        breakInside: "avoid",
      },

      // ページの余白
      "@page": {
        size: "A4",
        margin: "10mm",
      },
    },
  },
});
