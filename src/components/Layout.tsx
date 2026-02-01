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
    <header className={css({ paddingY: 4, paddingX: 4 })}>
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
