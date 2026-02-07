import type { ReactNode } from "react";
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <div
      className={flex({
        minBlockSize: "100svh",
        flexDirection: "column",
      })}
    >
      <Header />
      <main
        id="main"
        className={flex({
          paddingX: "fluidXs",
          paddingY: 3,
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
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
        position: "sticky",
        top: 0,
        zIndex: 100,
        paddingY: 2,
        paddingX: 2,
        backgroundColor: "color-mix(in srgb, white 80%, transparent)",
        backdropFilter: "blur(8px)",
        borderBottomWidth: "1px",
        borderBottomColor: "gray.50",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.06)",
      })}
    >
      <p>鑑定ツール</p>
    </header>
  );
}

function Footer() {
  return (
    <footer
      className={css({
        paddingY: 2,
        borderTopWidth: "1px",
        borderTopColor: "gray.100",
      })}
    >
      <p className={css({ textAlign: "center" })}>&copy; 2025 koralle. All rights reserved.</p>
    </footer>
  );
}
