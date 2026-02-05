import type { StorybookConfig } from "@storybook/react-vite";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-vitest", "@storybook/addon-storysource"],
  framework: "@storybook/react-vite",
} as const satisfies StorybookConfig;

export default config;
