import { Button } from "@base-ui/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Eye, MousePointer, Printer, Sparkles } from "lucide-react";
import { css } from "../../../styled-system/css";
import { flex, grid } from "../../../styled-system/patterns";
import { button } from "../../recipes/button.recipe";
import { useId } from "react";

const STEPS = [
  {
    id: 1,
    title: "パターン選択",
    description: "12種類の鑑定パターンから、対象のパターンを選択します。",
    icon: MousePointer,
  },
  {
    id: 2,
    title: "プレビュー確認",
    description: "プレビューで内容を確認し、印刷します。",
    icon: Eye,
  },
  {
    id: 3,
    title: "印刷完了",
    description: "手書き項目を記入して、そのままお客様にお渡しできます。",
    icon: Printer,
  },
] as const;

type StepItem = (typeof STEPS)[number];

interface StepCardProps {
  step: StepItem;
  index: number;
}

function StepCard({ step, index }: Readonly<StepCardProps>) {
  const Icon = step.icon;

  return (
    <div
      className={css({
        position: "relative",
        borderWidth: "1px",
        borderColor: "gray.200",
        borderRadius: "20px",
        backgroundColor: "white",
        padding: 5,
        display: "grid",
        rowGap: "4",
        boxShadow: "0 2px 8px oklch(0.53 0.015 90 / 0.08), 0 4px 12px oklch(0.53 0.015 90 / 0.06)",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: 0,
        transform: "translateY(20px)",
        animation: "fadeInUp 0.6s ease-out forwards",
        animationDelay: `${150 + index * 100}ms`,
        _before: {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, primary.100 0%, transparent 50%)",
          opacity: 0,
          transition: "opacity 0.3s ease",
        },
        "@media (any-hover: hover)": {
          _hover: {
            boxShadow:
              "0 20px 40px oklch(0.603 0.139 90 / 0.1), 0 10px 20px oklch(0.603 0.139 90 / 0.08)",
            transform: "translateY(-4px)",
            borderColor: "primary.200",
            _before: {
              opacity: 0.6,
            },
          },
        },
      })}
    >
      {/* Number Badge */}
      <div
        className={css({
          position: "absolute",
          top: "3",
          right: "3",
          inlineSize: "36px",
          blockSize: "36px",
          borderRadius: "full",
          background: "linear-gradient(135deg, primary.500 0%, primary.400 50%, primary.500 100%)",
          color: "white",
          display: "grid",
          placeItems: "center",
          fontWeight: "800",
          fontSize: "md",
          boxShadow: "0 4px 16px oklch(0.603 0.139 90 / 0.5)",
          zIndex: 10,
        })}
        aria-hidden="true"
      >
        {step.id}
      </div>

      {/* Icon */}
      <div
        className={css({
          inlineSize: "56px",
          blockSize: "56px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, primary.100 0%, primary.300 100%)",
          color: "primary.700",
          display: "grid",
          placeItems: "center",
          position: "relative",
          zIndex: 1,
          boxShadow: "0 8px 20px oklch(0.603 0.139 90 / 0.2)",
        })}
        aria-hidden="true"
      >
        <Icon size={28} strokeWidth={2} />
      </div>

      {/* Content */}
      <div className={css({ position: "relative", zIndex: 1 })}>
        <h3
          className={css({
            fontSize: "h3",
            fontWeight: "bold",
            color: "gray.900",
            marginBlockEnd: "2",
          })}
        >
          {step.title}
        </h3>
        <p
          className={css({
            fontSize: "body",
            color: "gray.600",
            lineHeight: "relaxed",
          })}
        >
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function Page() {

  const homePageTitleId = useId()
  const homePageStepsHeadingId = useId()

  return (
    <section
      aria-labelledby={homePageTitleId}
      className={grid({
        maxInlineSize: "1200px",
        inlineSize: "100%",
        marginInline: "auto",
        flex: 1,
        placeContent: "center",
        rowGap: 12,
        paddingBlockStart: 4,
      })}
    >
      {/* Hero Section */}
      <div
        className={css({
          display: "grid",
          placeItems: "center",
          rowGap: 8,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          opacity: 0,
          animation: "fadeIn 0.8s ease-out forwards",
        })}
      >
        {/* Large Icon */}
        <div
          className={css({
            inlineSize: { base: "88px", md: "104px" },
            blockSize: { base: "88px", md: "104px" },
            borderRadius: "28px",
            background: "linear-gradient(135deg, primary.200 0%, primary.400 100%)",
            color: "primary.700",
            display: "grid",
            placeItems: "center",
            boxShadow:
              "0 20px 50px oklch(0.603 0.139 90 / 0.3), inset 0 2px 4px oklch(0.97 0.005 90 / 0.5)",
            position: "relative",
            animation: "float 6s ease-in-out infinite",
            _before: {
              content: '""',
              position: "absolute",
              inset: "-6px",
              borderRadius: "34px",
              background: "linear-gradient(135deg, oklch(0.914 0.08 90 / 0.4) 0%, transparent 50%)",
              zIndex: -1,
              filter: "blur(12px)",
            },
          })}
          aria-hidden="true"
        >
          <Sparkles size={44} strokeWidth={1.5} />
        </div>

        {/* Title */}
        <div
          className={grid({
            rowGap: 6,
          })}
        >
          <h1
            id={homePageTitleId}
            className={flex({
              fontSize: { base: "2.5rem", sm: "3rem", md: "3.5rem", lg: "4rem" },
              fontWeight: "700",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              flexDirection: "column",
              gap: { base: "2", md: "3" },
            })}
          >
            <span
              className={css({
                display: "block",
                color: "transparent",
                backgroundClip: "text",
                background: "linear-gradient(135deg, oklch(0.524 0.143 90) 0%, oklch(0.603 0.139 90) 50%, oklch(0.683 0.133 90) 100%)",
              })}
              style={{
                WebkitBackgroundClip: "text",
              }}
            >
              エネルギーUP色
            </span>
            <span
              className={css({
                color: "primary.900",
                display: "block",
              })}
            >
              鑑定書作成ツール
            </span>
          </h1>
          <div
            className={grid({
              rowGap: 3,
              maxInlineSize: "520px",
              marginInline: "auto",
            })}
          >
            <p
              id="home-hero-description"
              className={css({
                fontSize: { base: "body", md: "h6" },
                color: "gray.600",
                lineHeight: "relaxed",
              })}
            >
              お客様の鑑定パターンに合わせて、鑑定書を作成します。
            </p>
            <p
              id="home-hero-subdescription"
              className={css({
                fontSize: "sm",
                color: "gray.400",
                lineHeight: "relaxed",
              })}
            >
              パターン選択から印刷まで、3ステップで簡単に作成できます。
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div
        className={flex({
          justify: "center",
          position: "relative",
          zIndex: 1,
          opacity: 0,
          animation: "fadeIn 0.6s ease-out 0.3s forwards",
        })}
      >
        <Button
          render={<Link to="/input" />}
          aria-describedby="home-hero-description home-hero-subdescription"
          className={css(button.raw({ visual: "primary", size: "lg", fluid: false }), {
            padding: "token(spacing.4) token(spacing.8)",
            fontSize: "h4",
            fontWeight: "700",
            borderRadius: "16px",
            background:
              "linear-gradient(135deg, primary.500 0%, primary.400 50%, primary.500 100%)",
            backgroundSize: "200% 200%",
            boxShadow:
              "0 2px 4px oklch(0.603 0.139 90 / 0.15), 0 8px 16px oklch(0.603 0.139 90 / 0.2), 0 16px 32px oklch(0.603 0.139 90 / 0.1)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-position 0.6s ease",
            "@media (any-hover: hover)": {
              _hover: {
                backgroundPosition: "100% 0",
                boxShadow:
                  "0 4px 8px oklch(0.603 0.139 90 / 0.2), 0 12px 24px oklch(0.603 0.139 90 / 0.25), 0 20px 40px oklch(0.603 0.139 90 / 0.15)",
                transform: "translateY(-2px)",
              },
            },
            _active: {
              transform: "translateY(-1px)",
              boxShadow:
                "0 2px 4px oklch(0.603 0.139 90 / 0.15), 0 6px 12px oklch(0.603 0.139 90 / 0.2)",
            },
          })}
        >
          <span>鑑定書作成を開始する</span>
          <ArrowRight size={20} strokeWidth={3} aria-hidden="true" />
        </Button>
      </div>

      {/* Steps Section */}
      <section
        aria-labelledby={homePageStepsHeadingId}
        className={css({
          inlineSize: "full",
          position: "relative",
          zIndex: 1,
        })}
      >
        <h2 id={homePageStepsHeadingId} className={css({ srOnly: true })}>
          作成ステップ
        </h2>
        <ol
          className={grid({
            columns: { base: 1, sm: 2, md: 2, lg: 3 },
            gap: { base: "4", md: "5", lg: "6" },
            listStyle: "none",
            margin: 0,
            padding: 0,
          })}
        >
          {STEPS.map((step, index) => (
            <li key={step.id}>
              <StepCard step={step} index={index} />
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}
