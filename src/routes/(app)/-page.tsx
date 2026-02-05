import { Button } from "@base-ui/react/button";
import { Link } from "@tanstack/react-router";
import { css } from "../../../styled-system/css";
import { button as buttonRecipe } from "../../recipes/button.recipe";

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
      <Button
        render={<Link to="/input" />}
        className={buttonRecipe({ visual: "primary", size: "lg" })}
      >
        鑑定書作成を開始する
      </Button>
    </div>
  );
}
