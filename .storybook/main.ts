import type { StorybookConfig } from '@storybook/react-vite';

const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(ts|tsx)"
  ],
  "addons": [],
  "framework": "@storybook/react-vite"
} as const satisfies StorybookConfig;

export default config;
