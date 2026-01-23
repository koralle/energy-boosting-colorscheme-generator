import { Button } from "@base-ui/react/button";
import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { css } from "../../../styled-system/css";
import { PageContainer } from "../../components/PageContainer";

export function Page() {
  return (
    <PageContainer layout="centered">
      {/* ヘッダー */}
      <header
        className={css({
          marginBottom: "8",
          textAlign: "center",
        })}
      >
        <h1
          className={css({
            fontSize: { base: "xl", md: "3xl" },
            fontWeight: "bold",
            color: "primary",
            marginBottom: "4",
            fontFamily: "serif",
          })}
        >
          エネルギーUP色鑑定書作成ツール
        </h1>
        <p
          className={css({
            fontSize: "sm",
            color: "text.secondary",
          })}
        >
          占い師が依頼者の鑑定を行うための鑑定書を作成します
        </p>
      </header>

      {/* 開始ボタン */}
      <StartButton />
    </PageContainer>
  );
}

function StartButton() {
  return (
    <Button
      className={css({
        display: "inline flex",
        justifyContent: "center",
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
      <strong>鑑定書作成を開始する</strong>
    </Button>
  );
}
