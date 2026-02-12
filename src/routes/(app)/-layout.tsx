import type { ReactNode } from "react";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <div
      className={flex({
        minBlockSize: "100svh",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      })}
    >
      {/* Full Viewport Background */}
      <div
        className={css({
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        })}
      >
        {/* Gradient Orb 1 - Top Left (Subtle) */}
        <div
          className={css({
            position: "absolute",
            top: { base: "80px", md: "-120px" },
            left: { base: "-60px", md: "-80px" },
            inlineSize: { base: "260px", md: "550px" },
            blockSize: { base: "260px", md: "550px" },
            borderRadius: "full",
            background:
              "radial-gradient(circle, oklch(0.95 0.12 75 / 0.6) 0%, oklch(0.9 0.14 85 / 0.4) 35%, oklch(0.85 0.1 95 / 0.2) 60%, transparent 75%)",
            filter: "blur(45px)",
            opacity: { base: 0.35, md: 0.6 },
            animation: "float 8s ease-in-out infinite",
          })}
          aria-hidden="true"
        />

        {/* Gradient Orb 2 - Bottom Right (Subtle) */}
        <div
          className={css({
            position: "absolute",
            bottom: { base: "-50px", md: "-100px" },
            right: { base: "-40px", md: "-80px" },
            inlineSize: { base: "300px", md: "480px" },
            blockSize: { base: "300px", md: "480px" },
            borderRadius: "full",
            background:
              "radial-gradient(circle, oklch(0.92 0.11 70 / 0.55) 0%, oklch(0.86 0.13 80 / 0.35) 35%, oklch(0.8 0.1 100 / 0.18) 60%, transparent 75%)",
            filter: "blur(40px)",
            opacity: { base: 0.45, md: 0.55 },
            animation: "float 10s ease-in-out infinite reverse",
          })}
          aria-hidden="true"
        />

        {/* Gradient Orb 3 - Center (Subtle glow) */}
        <div
          className={css({
            position: "absolute",
            top: { base: "25%", md: "30%" },
            left: "50%",
            transform: "translateX(-50%)",
            inlineSize: { base: "420px", md: "650px" },
            blockSize: { base: "420px", md: "650px" },
            borderRadius: "full",
            background:
              "radial-gradient(circle, oklch(0.97 0.06 90 / 0.5) 0%, oklch(0.94 0.08 85 / 0.3) 40%, oklch(0.9 0.06 95 / 0.12) 65%, transparent 80%)",
            filter: "blur(50px)",
            opacity: { base: 0.4, md: 0.5 },
            animation: "pulse 12s ease-in-out infinite",
          })}
          aria-hidden="true"
        />

        {/* Subtle Grid Pattern */}
        <div
          className={css({
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(oklch(0.603 0.139 90 / 0.04) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.603 0.139 90 / 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            opacity: 0.22,
          })}
          aria-hidden="true"
        />
      </div>

      <Header />
      <main
        id="main"
        className={flex({
          paddingX: "fluidXs",
          paddingY: 3,
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
          position: "relative",
          zIndex: 1,
        })}
      >
        {children}
      </main>
      <Footer />

      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translateX(-50%) scale(1.1);
          }
        }
      `}</style>
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
        position: "relative",
        zIndex: 1,
      })}
    >
      <p className={css({ textAlign: "center" })}>&copy; 2025 koralle. All rights reserved.</p>
    </footer>
  );
}
