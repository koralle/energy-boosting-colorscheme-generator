import { Button } from "@base-ui/react/button";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronRight, Download, Share2, User } from "lucide-react";
import { css } from "../../../styled-system/css";
import { button as buttonRecipe } from "../../recipes/button.recipe";

const meta: Meta<typeof Button> = {
  title: "Components / Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (storyFn) => (
      <div
        className={css({
          display: "grid",
          placeContent: "center",
          minBlockSize: "100svb",
          padding: "24px",
        })}
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
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
      })}
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
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
      })}
    >
      <Button className={buttonRecipe({ visual: "primary", size: "sm" })}>
        <Download size={16} />
        <span className={css({ marginLeft: "8px" })}>ダウンロード</span>
      </Button>
      <Button className={buttonRecipe({ visual: "primary", size: "lg" })}>
        <User size={20} />
        <span className={css({ marginLeft: "8px" })}>マイページ</span>
      </Button>
      <Button className={buttonRecipe({ visual: "secondary", size: "sm" })}>
        <Share2 size={16} />
        <span className={css({ marginLeft: "8px" })}>シェア</span>
      </Button>
    </div>
  ),
};

export const WithIconRight: Story = {
  render: () => (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
      })}
    >
      <Button className={buttonRecipe({ visual: "primary", size: "sm" })}>
        <span className={css({ marginRight: "8px" })}>次へ</span>
        <ChevronRight size={16} />
      </Button>
      <Button className={buttonRecipe({ visual: "primary", size: "lg" })}>
        <span className={css({ marginRight: "8px" })}>詳細を見る</span>
        <ChevronRight size={20} />
      </Button>
      <Button className={buttonRecipe({ visual: "secondary", size: "sm" })}>
        <span className={css({ marginRight: "8px" })}>もっと見る</span>
        <ChevronRight size={16} />
      </Button>
    </div>
  ),
};

export const WithIconOnly: Story = {
  render: () => (
    <div
      className={css({
        display: "flex",
        gap: "16px",
        padding: "24px",
      })}
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

export const Fluid: Story = {
  render: () => (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
        inlineSize: "400px",
        border: "2px dashed",
        borderColor: "gray.300",
      })}
    >
      <Button className={buttonRecipe({ visual: "primary", size: "lg", fluid: true })}>
        fluid: true
      </Button>
      <Button className={buttonRecipe({ visual: "secondary", size: "lg", fluid: true })}>
        fluid: true
      </Button>
      <Button className={buttonRecipe({ visual: "primary", size: "lg", fluid: false })}>
        fluid: false
      </Button>
      <Button className={buttonRecipe({ visual: "secondary", size: "lg", fluid: false })}>
        fluid: false
      </Button>
    </div>
  ),
};

export const FluidComparison: Story = {
  render: () => (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        padding: "24px",
      })}
    >
      <div>
        <p className={css({ marginBottom: "8px", fontWeight: "bold" })}>
          幅400pxのコンテナ内で fluid: true
        </p>
        <div
          className={css({
            inlineSize: "400px",
            border: "2px dashed",
            borderColor: "gray.300",
            padding: "16px",
          })}
        >
          <Button className={buttonRecipe({ visual: "primary", size: "lg", fluid: true })}>
            親要素の幅いっぱい
          </Button>
        </div>
      </div>
      <div>
        <p className={css({ marginBottom: "8px", fontWeight: "bold" })}>
          同じコンテナ内で fluid: false（デフォルト）
        </p>
        <div
          className={css({
            inlineSize: "400px",
            border: "2px dashed",
            borderColor: "gray.300",
            padding: "16px",
          })}
        >
          <Button className={buttonRecipe({ visual: "primary", size: "lg", fluid: false })}>
            コンテンツに合わせた幅
          </Button>
        </div>
      </div>
    </div>
  ),
};
