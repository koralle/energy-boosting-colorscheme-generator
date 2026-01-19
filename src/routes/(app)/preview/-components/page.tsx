import { Link } from "@tanstack/react-router";
import { css } from "../../../../../styled-system/css";
import { PATTERNS } from "../../../../constants/patterns";
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
        <Link to="/input" className={css({ marginLeft: "2" })}>
          入力画面へ
        </Link>
      </div>
    );
  }

  return (
    <div
      className={css({
        maxWidth: "800px",
        margin: "0 auto",
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
        <Link
          to="/input"
          className={css({
            padding: "2",
            color: "text.secondary",
            _hover: {
              color: "primary",
            },
          })}
        >
          ← 戻る
        </Link>
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
        <button
          type="button"
          onClick={handlePrint}
          className={css({
            padding: "3 6",
            backgroundColor: "primary",
            color: "white",
            fontWeight: "medium",
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
          印刷して完了
        </button>
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
