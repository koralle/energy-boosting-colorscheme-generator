import type { Meta, StoryObj } from "@storybook/react-vite";
import { Layout } from "../../../components/Layout";
import { WithRouter } from "../../../test/with-router";
import { Page } from "./-components/page";

const meta: Meta<typeof Page> = {
  title: "画面 / 完了画面",
  component: Page,
  decorators: [(storyFn) => <Layout>{storyFn()}</Layout>],
};
export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  render: () => (
    <WithRouter routeId="/(app)/complete">
      <Page />
    </WithRouter>
  ),
};
