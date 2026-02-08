import { cva } from "../../../../../styled-system/css";

/**
 * RadioCardコンポーネントのスタイルレシピ
 *
 * 選択状態（checked）に応じて見た目が変化するカードUI
 */
export const radioCard = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    padding: 3,
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    textAlign: "start",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "gray.600",
      outlineOffset: "2px",
    },
    _active: {
      transform: "translateY(0)",
    },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      transform: "none !important",
    },
  },
  variants: {
    checked: {
      false: {
        borderColor: "gray.300",
        backgroundColor: "white",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.06)",
        _hover: {
          borderColor: "gray.400",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-2px)",
        },
      },
      true: {
        borderColor: "primary.500",
        backgroundColor: "primary.50",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.1)",
        _hover: {
          borderColor: "primary.600",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-2px)",
        },
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});
