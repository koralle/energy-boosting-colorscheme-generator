import { Button } from "@base-ui/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import { button } from "../../recipes/button.recipe";

const STEPS = [
  {
    id: 1,
    title: "パターン選択",
    description: "12種類の鑑定パターンから、対象のパターンを選択します。",
  },
  {
    id: 2,
    title: "プレビュー確認",
    description: "プレビューで内容を確認し、印刷します。",
  },
  {
    id: 3,
    title: "印刷完了",
    description: "手書き項目を記入して、そのままお客様にお渡しできます。",
  },
] as const;

type StepItem = (typeof STEPS)[number];

interface StepCardProps {
  step: StepItem;
  stepNumber: number;
}

function StepCard({ step, stepNumber }: Readonly<StepCardProps>) {
  return (
    <div
      className={css({
        borderWidth: "1px",
        borderColor: "gray.200",
        borderRadius: "12px",
        backgroundColor: "white",
        paddingX: "4",
        paddingY: "3",
        display: "grid",
        rowGap: "2",
      })}
    >
      <div className={flex({ align: "center", gap: "2" })}>
        <span
          className={css({
            inlineSize: "24px",
            blockSize: "24px",
            borderRadius: "full",
            backgroundColor: "primary.100",
            color: "primary.700",
            display: "grid",
            placeItems: "center",
            fontWeight: "bold",
            fontSize: "sm",
          })}
          aria-hidden="true"
        >
          {stepNumber}
        </span>
        <h3 className={css({ fontSize: "body", fontWeight: "bold", color: "gray.900" })}>
          {step.title}
        </h3>
      </div>
      <p className={css({ fontSize: "sm", color: "gray.700" })}>{step.description}</p>
    </div>
  );
}

export function Page() {
  return (
    <div
      className={css({
        maxInlineSize: "1000px",
        inlineSize: "fit-content",
        minInlineSize: "100%",
        flex: 1,
        display: "grid",
        placeContent: "center",
        rowGap: "6",
      })}
    >
      <div
        className={css({
          display: "grid",
          placeItems: "center",
          rowGap: "4",
        })}
      >
        <div
          className={css({
            inlineSize: "56px",
            blockSize: "56px",
            borderRadius: "full",
            backgroundColor: "primary.100",
            color: "primary.700",
            display: "grid",
            placeItems: "center",
          })}
          aria-hidden="true"
        >
          <Sparkles size={28} />
        </div>

        <h1
          className={css({
            fontSize: "h1",
            fontWeight: "bold",
            color: "gray.800",
            textAlign: "center",
          })}
        >
          エネルギーUP色鑑定書作成ツール
        </h1>
        <p
          className={css({
            fontSize: "body",
            color: "text.secondary",
            textAlign: "center",
            maxInlineSize: "600px",
            marginInline: "auto",
          })}
        >
          お客様の鑑定パターンに合わせて、鑑定書を作成します。パターン選択から印刷まで、
          3ステップで簡単に作成できます。
        </p>
      </div>

      <section aria-labelledby="home-steps-heading" className={css({ inlineSize: "full" })}>
        <h2 id="home-steps-heading" className={css({ srOnly: true })}>
          作成ステップ
        </h2>
        <ol
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
            gap: { base: "2", md: "3" },
            listStyle: "none",
            margin: 0,
            padding: 0,
          })}
        >
          {STEPS.map((step) => (
            <li key={step.id}>
              <StepCard step={step} stepNumber={step.id} />
            </li>
          ))}
        </ol>
      </section>

      <div className={flex({ justify: "center" })}>
        <Button
          render={<Link to="/input" />}
          className={button({ visual: "primary", size: "lg", fluid: false })}
        >
          <span>鑑定書を作成する</span>
          <ArrowRight size={20} aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
