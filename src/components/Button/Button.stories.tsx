import { Button } from "@base-ui/react/button";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronRight, Download, Share2, User } from "lucide-react";
import { button as buttonRecipe } from "../../recipes/button.recipe";

const meta: Meta<typeof Button> = {
  title: "Components / Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (storyFn) => (
      <div
        style={{
          display: "grid",
          placeContent: "center",
          minBlockSize: "100svb",
          padding: "24px",
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: "text",
      description: "ボタンのラベルテキスト",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const PrimarySmall: Story = {
  render: () => <Button className={buttonRecipe({ visual: "primary", size: "sm" })}>ボタン</Button>,
};

export const PrimaryLarge: Story = {
  render: () => <Button className={buttonRecipe({ visual: "primary", size: "lg" })}>ボタン</Button>,
};

export const SecondarySmall: Story = {
  render: () => (
    <Button className={buttonRecipe({ visual: "secondary", size: "sm" })}>ボタン</Button>
  ),
};

export const SecondaryLarge: Story = {
  render: () => (
    <Button className={buttonRecipe({ visual: "secondary", size: "lg" })}>ボタン</Button>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
      }}
    >
      <Button className={buttonRecipe({ visual: "primary", size: "sm" })}>Primary Small</Button>
      <Button className={buttonRecipe({ visual: "primary", size: "lg" })}>Primary Large</Button>
      <Button className={buttonRecipe({ visual: "secondary", size: "sm" })}>Secondary Small</Button>
      <Button className={buttonRecipe({ visual: "secondary", size: "lg" })}>Secondary Large</Button>
    </div>
  ),
};

export const WithIconLeft: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
      }}
    >
      <Button className={buttonRecipe({ visual: "primary", size: "sm" })}>
        <Download size={16} />
        <span style={{ marginLeft: "8px" }}>ダウンロード</span>
      </Button>
      <Button className={buttonRecipe({ visual: "primary", size: "lg" })}>
        <User size={20} />
        <span style={{ marginLeft: "8px" }}>マイページ</span>
      </Button>
      <Button className={buttonRecipe({ visual: "secondary", size: "sm" })}>
        <Share2 size={16} />
        <span style={{ marginLeft: "8px" }}>シェア</span>
      </Button>
    </div>
  ),
};

export const WithIconRight: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
      }}
    >
      <Button className={buttonRecipe({ visual: "primary", size: "sm" })}>
        <span style={{ marginRight: "8px" }}>次へ</span>
        <ChevronRight size={16} />
      </Button>
      <Button className={buttonRecipe({ visual: "primary", size: "lg" })}>
        <span style={{ marginRight: "8px" }}>詳細を見る</span>
        <ChevronRight size={20} />
      </Button>
      <Button className={buttonRecipe({ visual: "secondary", size: "sm" })}>
        <span style={{ marginRight: "8px" }}>もっと見る</span>
        <ChevronRight size={16} />
      </Button>
    </div>
  ),
};

export const WithIconOnly: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "24px",
      }}
    >
      <Button className={buttonRecipe({ visual: "primary", size: "sm" })}>
        <Download size={16} />
      </Button>
      <Button className={buttonRecipe({ visual: "secondary", size: "sm" })}>
        <Share2 size={16} />
      </Button>
    </div>
  ),
};
