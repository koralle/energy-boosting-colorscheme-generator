import type { StorybookConfig } from "@storybook/react-vite";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-a11y"],
  framework: "@storybook/react-vite",
} as const satisfies StorybookConfig;

export default config;
