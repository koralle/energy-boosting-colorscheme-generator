import { createFileRoute, Link } from "@tanstack/react-router";
import { css } from "../../../../styled-system/css";
import { Layout } from "../../../components/Layout";

export const Route = createFileRoute("/(app)/complete/")({
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
        {/* 完了アイコン */}
        <div
          className={css({
            marginBottom: "6",
            fontSize: "6xl",
          })}
        >
          ✓
        </div>

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
            印刷が完了しました
          </h1>
          <p
            className={css({
              fontSize: "sm",
              color: "text.secondary",
              marginBottom: "6",
            })}
          >
            鑑定書を作成しました。引き続き頑張ってください。
          </p>
        </header>

        {/* アクションボタン */}
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "3",
            alignItems: "center",
          })}
        >
          <Link
            to="/"
            className={css({
              display: "inline-block",
              padding: "3 6",
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
            ホームに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
