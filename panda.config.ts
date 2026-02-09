import { defineConfig } from "@pandacss/dev";
import { ENERGY_COLOR_DEFINITIONS } from "./src/constants/energy-colors";

const ENERGY_COLOR_TOKENS = Object.fromEntries(
  Object.entries(ENERGY_COLOR_DEFINITIONS).map(([key, definition]) => [
    key,
    { value: definition.hex },
  ]),
);

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
          energy: ENERGY_COLOR_TOKENS,
          primary: {
            // 知覚的に均一なゴールドスケール
            // 各ステップ間のΔE ≈ 0.076-0.080 (CV: 0.0245)
            50: { value: "oklch(0.96 0.02 90)" },
            100: { value: "oklch(0.914 0.08 90)" },
            200: { value: "oklch(0.84 0.108 90)" },
            300: { value: "oklch(0.762 0.124 90)" },
            400: { value: "oklch(0.683 0.133 90)" },
            500: { value: "oklch(0.603 0.139 90)" },
            600: { value: "oklch(0.524 0.143 90)" },
            700: { value: "oklch(0.444 0.145 90)" },
            800: { value: "oklch(0.364 0.144 90)" },
            900: { value: "oklch(0.285 0.136 90)" },
            950: { value: "oklch(0.22 0.1 90)" },
          },
          gray: {
            // ゴールド要素を含んだ温かみのあるグレー
            // 色相90度（ゴールド）+ わずかなクロミナンス
            50: { value: "oklch(0.97 0.005 90)" },
            100: { value: "oklch(0.88 0.008 90)" },
            200: { value: "oklch(0.80 0.01 90)" },
            300: { value: "oklch(0.71 0.012 90)" },
            400: { value: "oklch(0.62 0.014 90)" },
            500: { value: "oklch(0.53 0.015 90)" },
            600: { value: "oklch(0.44 0.016 90)" },
            700: { value: "oklch(0.35 0.016 90)" },
            800: { value: "oklch(0.27 0.015 90)" },
            900: { value: "oklch(0.18 0.012 90)" },
            950: { value: "oklch(0.10 0.008 90)" },
          },
          green: {
            // gold/gray と調和するグリーンスケール
            // 色相142度、クロミナンスは中間部でピーク（0.11）
            50: { value: "oklch(0.96 0.025 142)" },
            100: { value: "oklch(0.91 0.06 142)" },
            200: { value: "oklch(0.84 0.085 142)" },
            300: { value: "oklch(0.76 0.10 142)" },
            400: { value: "oklch(0.68 0.115 142)" },
            500: { value: "oklch(0.61 0.095 142)" },
            600: { value: "oklch(0.51 0.11 142)" },
            700: { value: "oklch(0.44 0.105 142)" },
            800: { value: "oklch(0.36 0.095 142)" },
            900: { value: "oklch(0.28 0.075 142)" },
            950: { value: "oklch(0.22 0.05 142)" },
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
      textStyles: {
        buttonSm: {
          value: {
            fontSize: "{fontSizes.caption}",
            fontWeight: "400",
            lineHeight: "1.5",
          },
        },
        buttonLg: {
          value: {
            fontSize: "{fontSizes.h5}",
            fontWeight: "700",
            lineHeight: "1.4",
          },
        },
      },
      semanticTokens: {
        colors: {
          success: {
            bg: {
              DEFAULT: { value: "{colors.green.600}" },
              hover: { value: "{colors.green.500}" },
              active: { value: "{colors.green.700}" },
              subtle: { value: "{colors.green.100}" },
            },
            border: {
              DEFAULT: { value: "{colors.green.600}" },
              hover: { value: "{colors.green.500}" },
              strong: { value: "{colors.green.700}" },
            },
            text: {
              DEFAULT: { value: "{colors.green.700}" },
              inverse: { value: "{colors.green.50}" },
              subtle: { value: "{colors.green.600}" },
            },
            fg: {
              DEFAULT: { value: "{colors.green.600}" },
            },
          },
        },
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
          buttonSm: {
            value: "{fontSizes.caption}",
          },
          buttonLg: {
            value: "{fontSizes.h5}",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // Global CSS
  globalCss: {
    ":where(:root, body)": {
      fontFamily: "{fonts.body}",
      inlineSize: "100svi",
      minBlockSize: "100svb",
      overFlowX: "clip",
      color: "gray.700",
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
});
