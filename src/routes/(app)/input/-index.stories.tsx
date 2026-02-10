import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { Layout } from "../../../components/Layout";
import { WithRouter } from "../../../test/with-router";
import { Page } from "./-components/page";

const meta: Meta<typeof Page> = {
  title: "パターン選択画面",
  component: Page,
  decorators: [(storyFn) => <Layout>{storyFn()}</Layout>],
};
export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  render: () => (
    <WithRouter routeId="/(app)/input">
      <Page onSubmitForm={() => Promise.resolve(void 0)} />
    </WithRouter>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const form = canvas.getByRole("form");
    expect(form).toBeVisible();
  },
};
