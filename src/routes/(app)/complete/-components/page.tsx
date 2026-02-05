import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { css } from "../../../../../styled-system/css";
import { Button } from "@base-ui/react";
import { button } from "../../../../recipes/button.recipe";

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
        <Button
          render={
            <Link to="/" className={button({ visual: "primary", size: "lg", fluid: true })} />
          }
        >
          <Home size={20} />
          <span className={css({ marginLeft: "8px" })}>ホームに戻る</span>
        </Button>
      </div>
    </div>
  );
}
