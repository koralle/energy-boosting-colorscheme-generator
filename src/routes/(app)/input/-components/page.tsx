import { Button } from "@base-ui/react/button";
import { Link } from "@tanstack/react-router";
import { css } from "../../../../../styled-system/css";
import { button } from "../../../../recipes/button.recipe";
import { PatternSelectForm } from "./pattern-select-form";

interface PageProps {
  onSubmitForm: (value: { patternId: number }) => Promise<void>;
}

export function Page({ onSubmitForm }: Readonly<PageProps>) {
  return (
    <div
      className={css({
        maxInlineSize: "1000px",
        inlineSize: "fit-content",
        minInlineSize: "100%",
        flex: 1,
      })}
    >
      {/* ヘッダー */}
      <header
        className={css({
          marginBottom: "6",
          display: "flex",
          alignItems: "center",
          gap: "4",
        })}
      >
        <Button
          render={
            <Link to="/" className={button({ visual: "secondary", size: "sm", fluid: false })} />
          }
        >
          ← 戻る
        </Button>
        <h1
          className={css({
            fontSize: { base: "xl", md: "2xl" },
            fontWeight: "bold",
            color: "gray.800",
          })}
        >
          パターンを選択
        </h1>
      </header>

      <PatternSelectForm onSubmit={onSubmitForm} />
    </div>
  );
}
