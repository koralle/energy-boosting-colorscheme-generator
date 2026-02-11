import { Button } from "@base-ui/react";
import { Link } from "@tanstack/react-router";
import { Check, Circle, Home } from "lucide-react";
import { css } from "../../../../../styled-system/css";
import { flex, grid } from "../../../../../styled-system/patterns";
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
      <output aria-live="polite">
        <div
          className={grid({
            placeContent: "center",
            marginBottom: "6",
          })}
        >
          <div
            className={grid({
              placeContent: "center",
              inlineSize: "80px",
              blockSize: "80px",
              position: "relative",
            })}
          >
            <Circle
              size={80}
              className={css({
                color: "green.500",
                fill: "green.500",
              })}
            />
            <div
              className={css({
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              })}
            >
              <Check
                aria-hidden="true"
                size={48}
                strokeWidth={4}
                className={css({ color: "white" })}
              />
            </div>
          </div>
        </div>
      </output>

      <div
        className={css({
          marginBottom: "6",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4",
        })}
      >
        <h1
          className={css({
            //fontSize: { base: "xl", md: "2xl" },
            fontSize: "h1",
            fontWeight: "bold",
            color: "gray.800",
          })}
        >
          印刷が完了しました
        </h1>
        <p
          className={css({
            fontSize: "h5",
            color: "text.secondary",
            textAlign: "center",
          })}
        >
          鑑定書の雛形が準備できました。
          <br />
          手書き箇所をご記入の上、お客様にお渡しください。
        </p>
      </div>

      <div
        className={flex({
          gap: 4,
          justifyContent: "center",
        })}
      >
        <Button
          render={
            <Link to="/" className={button({ visual: "primary", size: "lg", fluid: false })} />
          }
        >
          <Home />
          <span>ホームに戻る</span>
        </Button>
      </div>
    </div>
  );
}
