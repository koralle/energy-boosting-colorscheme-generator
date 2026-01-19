import { createFileRoute, Link } from "@tanstack/react-router";
import { css } from "../../../styled-system/css";
import { Layout } from "../../components/Layout";

export const Route = createFileRoute("/(app)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <div
        className={css({
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
        })}
      >
        {/* ヘッダー */}
        <header
          className={css({
            marginBottom: "8",
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
        <Link
          to="/input"
          className={css({
            display: "inline-block",
            padding: "4 8",
            backgroundColor: "primary",
            color: "white",
            fontWeight: "medium",
            fontSize: "lg",
            borderRadius: "md",
            cursor: "pointer",
            transition: "all 0.2s ease",
            _hover: {
              backgroundColor: "#6d28d9",
            },
            _active: {
              transform: "scale(0.98)",
            },
          })}
        >
          鑑定書作成を開始する
        </Link>
      </div>
    </Layout>
  );
}
