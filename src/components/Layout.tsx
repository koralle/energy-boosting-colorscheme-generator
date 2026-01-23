import type { ReactNode } from "react";
import { css } from "../../styled-system/css";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateRows: "max-content 1fr max-content",
        minBlockSize: "100svb",
      })}
    >
      <Header />
      <main
        id="main"
        className={css({
          paddingX: "fluidXs",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header
      className={css({
        paddingX: "fluidXs",
        paddingY: 2,
        borderBlockEnd: "1px solid token(colors.gray.700)",
      })}
    >
      <p>鑑定ツール</p>
    </header>
  );
}

function Footer() {
  return (
    <footer className={css({ paddingX: "fluidXs", paddingY: 1 })}>
      <p className={css({ textAlign: "center" })}>&copy; 2025 koralle. All rights reserved.</p>
    </footer>
  );
}
