import { Button } from "@base-ui/react";
import { Check, Home } from "lucide-react";
import { css } from "../../../../../styled-system/css";
import { PageContainer } from "../../../../components/PageContainer";

export function Page() {
  return (
    <PageContainer layout="centered">
      <section
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        })}
      >
        {/* 完了アイコン */}
        <div
          className={css({
            color: "white",
            width: "100px",
            height: "100px",
            background:
              "linear-gradient(135deg, oklch(0.72 0.12 145) 0%, oklch(0.65 0.14 145) 100%)",
            borderRadius: "50%",
            display: "grid",
            placeContent: "center",
            boxShadow: "0 20px 40px oklch(0.72 0.12 145 / 0.3)",
          })}
        >
          <Check size={48} />
        </div>

        {/* ヘッダー */}
        <header className={css({ marginBlockEnd: 4 })}>
          <hgroup className={css({ display: "flex", flexDirection: "column", gap: 2 })}>
            <h1
              className={css({
                textAlign: "center",
              })}
            >
              <strong>印刷が完了しました</strong>
            </h1>
            <p className={css({ textAlign: "center" })}>鑑定書を作成しました。</p>
          </hgroup>
        </header>

        {/* アクションボタン */}

        <HomeButton />
      </section>
    </PageContainer>
  );
}

function HomeButton() {
  return (
    <Button
      className={css({
        display: "inline flex",
        justifyContent: "space-between",
        gap: 1,
        paddingX: 3,
        paddingY: 2,
        backgroundColor: "primary.500",
        color: "white",
        fontSize: "lg",
        borderRadius: "md",
        cursor: "pointer",
        _hover: {
          backgroundColor: "primary.600",
        },
      })}
    >
      <Home />
      <strong>ホームに戻る</strong>
    </Button>
  );
}
