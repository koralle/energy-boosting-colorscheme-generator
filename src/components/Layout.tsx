import type { ReactNode } from "react";
import { css } from "../../styled-system/css";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <>
      <Header />
      <main
        id="main"
        className={css({
          paddingX: "fluidXs",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
        })}
      >
        {children}
      </main>
      <Footer />
    </>
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
        borderBottomColor: "gray.200",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      })}
    >
      <p>鑑定ツール</p>
    </header>
  );
}

function Footer() {
  return (
    <footer className={css({ paddingY: 2 })}>
      <p className={css({ textAlign: "center" })}>&copy; 2025 koralle. All rights reserved.</p>
    </footer>
  );
}
