import type { ReactNode } from "react";
import { css } from "../../styled-system/css";

interface PageContainerProps {
  children: ReactNode;
  layout?: "centered" | "standard";
}

export function PageContainer({ children, layout = "standard" }: PageContainerProps) {
  const containerStyles = css({
    maxInlineSize: "1000px",
    inlineSize: "fit-content",
    ...(layout === "centered" && {
      flex: 1,
      display: "grid",
      placeContent: "center",
    }),
  });

  return <div className={containerStyles}>{children}</div>;
}
