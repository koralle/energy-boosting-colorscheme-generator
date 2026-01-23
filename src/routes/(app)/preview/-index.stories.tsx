import type { Meta, StoryObj } from "@storybook/react-vite";
import { Layout } from "../../../components/Layout";
import { WithRouter } from "../../../test/with-router";
import { Page } from "./-components/page";

const meta: Meta<typeof Page> = {
  title: "画面 / プレビュー画面",
  component: Page,
  decorators: [(storyFn) => <Layout>{storyFn()}</Layout>],
};
export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  name: "パターンIDが正常の時",
  args: {
    patternId: 1,
  },
  render: (args) => (
    <WithRouter routeId="/(app)/preview">
      <Page patternId={args.patternId} />
    </WithRouter>
  ),
};

export const InvalidPatternId: Story = {
  name: "パターンIDが不正の時",
  args: {
    // @ts-expect-error
    patternId: "invalid",
  },
  render: (args) => (
    <WithRouter routeId="/(app)/preview">
      <Page patternId={args.patternId} />
    </WithRouter>
  ),
};
