import type { Meta, StoryObj } from "@storybook/react-vite";
import { Layout } from "../../components/Layout";
import { WithRouter } from "../../test/with-router";
import { Page } from "./-page";

const meta: Meta<typeof Page> = {
  title: "ホーム画面",
  component: Page,
  decorators: [(storyFn) => <Layout>{storyFn()}</Layout>],
};
export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  render: () => (
    <WithRouter routeId="/(app)/">
      <Page />
    </WithRouter>
  ),
};
