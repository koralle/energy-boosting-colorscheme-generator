import type { Meta, StoryObj } from "@storybook/react-vite";
import { WithRouter } from "../../test/with-router";
import { Page } from "./-page";

const meta: Meta<typeof Page> = {
  title: "ホーム画面",
  component: Page,
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
