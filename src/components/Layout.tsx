import type { ReactNode } from "react";
import { css } from "../../styled-system/css";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <>
      <header>
        <p>鑑定ツール</p>
      </header>
      <main id="main" className={css({ flex: 1 })}>
        {children}
      </main>
      <footer className={css({ paddingY: 4 })}>
        <p className={css({ textAlign: "center" })}>&copy; 2025 koralle. All rights reserved.</p>
      </footer>
    </>
  );
}
