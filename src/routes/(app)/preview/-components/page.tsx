import { Button } from "@base-ui/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { css } from "../../../../../styled-system/css";
import { PATTERNS } from "../../../../constants/patterns";
import { button } from "../../../../recipes/button.recipe";
import { FortunePaper } from "./FortunePaper";

interface PageProps {
  patternId?: number;
}

export function Page({ patternId }: PageProps) {
  const selectedPattern = patternId !== undefined ? PATTERNS.find((p) => p.id === patternId) : null;

  const handlePrint = () => {
    window.print();
    // 印刷ダイアログが閉じた後に完了画面へ遷移
    setTimeout(() => {
      window.location.href = "/complete";
    }, 1000);
  };

  if (!selectedPattern) {
    return (
      <div
        className={css({
          minHeight: "100vh",
          backgroundColor: "#f9fafb",
          padding: "4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <p>パターンが選択されていません。</p>
        <Button
          render={
            <Link
              to="/input"
              className={button({ visual: "secondary", size: "sm", fluid: false })}
            />
          }
        >
          入力画面へ
        </Button>
      </div>
    );
  }

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
          // 印刷時に非表示
          "@media print": {
            display: "none",
          },
        })}
      >
        <Button
          render={
            <Link
              to="/input"
              className={button({ visual: "secondary", size: "sm", fluid: false })}
            />
          }
        >
          ← 戻る
        </Button>
        <h1
          className={css({
            fontSize: { base: "xl", md: "2xl" },
            fontWeight: "bold",
            color: "primary",
            fontFamily: "serif",
          })}
        >
          プレビュー
        </h1>
      </header>

      {/* 操作ボタンエリア */}
      <section
        className={css({
          marginBottom: "6",
          display: "flex",
          gap: "3",
          justifyContent: "center",
          // 印刷時に非表示
          "@media print": {
            display: "none",
          },
        })}
      >
        <Button
          onClick={handlePrint}
          className={button({ visual: "primary", size: "lg", fluid: false })}
        >
          <span>印刷して完了</span>
          <ArrowRight size={20} />
        </Button>
      </section>

      {/* 鑑定書プレビュー */}
      <div
        className={css({
          display: "block",
        })}
      >
        <FortunePaper pattern={selectedPattern} />
      </div>
    </div>
  );
}
