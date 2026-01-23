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
            // シグモイド関数で生成した明度変化
            // 明度 = 0.1 + 0.9 × (1 / (1 + exp(-0.5 × (x - 5))))
            50: { value: "oklch(0.98 0.02 90)" },
            100: { value: "oklch(0.95 0.04 90)" },
            200: { value: "oklch(0.90 0.06 90)" },
            300: { value: "oklch(0.84 0.09 90)" },
            400: { value: "oklch(0.78 0.12 90)" },
            500: { value: "oklch(0.75 0.15 90)" }, // メインゴールド
            600: { value: "oklch(0.68 0.16 90)" },
            700: { value: "oklch(0.58 0.17 90)" },
            800: { value: "oklch(0.45 0.17 90)" },
            900: { value: "oklch(0.32 0.16 90)" },
            950: { value: "oklch(0.20 0.12 90)" },
          },
          gray: {
            // シグモイド関数で生成した明度変化（グレースケール）
            // 明度 = 0.05 + 0.93 × (1 / (1 + exp(-0.5 × (x - 6.3))))
            50: { value: "oklch(0.05 0 0)" },
            100: { value: "oklch(0.06 0 0)" },
            200: { value: "oklch(0.07 0 0)" },
            300: { value: "oklch(0.10 0 0)" },
            400: { value: "oklch(0.27 0 0)" },
            500: { value: "oklch(0.75 0 0)" },
            600: { value: "oklch(0.87 0 0)" },
            700: { value: "oklch(0.93 0 0)" },
            800: { value: "oklch(0.95 0 0)" },
            900: { value: "oklch(0.96 0 0)" },
            950: { value: "oklch(0.97 0 0)" },
          },
        },
        // 8ポイントグリッドシステムに基づく基本スペース（8px単位）
        spacing: {
          0: { value: "0" },
          1: { value: "8px" }, // 最小単位
          2: { value: "16px" },
          3: { value: "24px" },
          4: { value: "32px" },
          5: { value: "40px" },
          6: { value: "48px" },
          7: { value: "56px" },
          8: { value: "64px" },
          9: { value: "72px" },
          10: { value: "80px" },
          11: { value: "88px" },
          12: { value: "96px" },
        },
        fonts: {
          body: {
            value: "sans-serif",
          },
        },
      },
      // セマンティックトークン - サイズベースの命名（8px刻み）
      semanticTokens: {
        spacing: {
          // 固定値の余白
          xxs: { value: "{spacing.1}" }, // 8px
          xs: { value: "{spacing.2}" }, // 16px
          sm: { value: "{spacing.3}" }, // 24px
          md: { value: "{spacing.4}" }, // 32px
          lg: { value: "{spacing.6}" }, // 48px
          xl: { value: "{spacing.8}" }, // 64px
          "2xl": { value: "{spacing.10}" }, // 80px
          "3xl": { value: "{spacing.12}" }, // 96px

          // スケールする余白（400px〜800pxの間で変化）
          // 計算式: clamp(最小値, slope * vw + intercept, 最大値)
          fluidXxs: { value: "clamp(8px, 2vw, 16px)" }, // 8px (400px) ~ 16px (800px)
          fluidXs: { value: "clamp(16px, calc(2vw + 8px), 24px)" }, // 16px (400px) ~ 24px (800px)
          fluidSm: { value: "clamp(24px, calc(2vw + 16px), 32px)" }, // 24px (400px) ~ 32px (800px)
          fluidMd: { value: "clamp(32px, calc(4vw + 16px), 48px)" }, // 32px (400px) ~ 48px (800px)
          fluidLg: { value: "clamp(48px, calc(4vw + 32px), 64px)" }, // 48px (400px) ~ 64px (800px)
          fluidXl: { value: "clamp(64px, calc(4vw + 48px), 80px)" }, // 64px (400px) ~ 80px (800px)
          fluid2Xl: { value: "clamp(80px, calc(4vw + 64px), 96px)" }, // 80px (400px) ~ 96px (800px)
        },
        // Type Scale Generatorを用いて算出
        // https://landin.gs/tools/type-scale-generator/
        fontSizes: {
          body: {
            value: "1rem",
          },
          caption: {
            value: "0.889rem",
          },
          smallest: {
            value: "0.79rem",
          },
          h1: {
            value: "clamp(1.52rem, 1.014rem + 2.027vw, 2.027rem)",
          },
          h2: {
            value: "clamp(1.352rem, 0.901rem + 1.802vw, 1.802rem)",
          },
          h3: {
            value: "clamp(1.202rem, 0.801rem + 1.602vw, 1.602rem)",
          },
          h4: {
            value: "clamp(1.068rem, 0.712rem + 1.424vw, 1.424rem)",
          },
          h5: {
            value: "clamp(0.95rem, 0.633rem + 1.266vw, 1.266rem)",
          },
          h6: {
            value: "clamp(0.844rem, 0.563rem + 1.125vw, 1.125rem)",
          },
        },
      },
    },
  },
  globalCss: {
    ":where(:root, body)": {
      fontFamily: "{fonts.body}",
      inlineSize: "100svi",
      minBlockSize: "100svb",
      overFlowX: "clip",
    },
    ":where(body)": {
      display: "block flex",
      flexDirection: "column",
      gap: 0,
    },
    ":where(h1)": {
      margin: 0,
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
