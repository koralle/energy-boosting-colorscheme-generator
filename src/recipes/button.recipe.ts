import { cva } from "../../styled-system/css";

export const button = cva({
  base: {
    display: "inline flex",
    justifyContent: "center",
    columnGap: 1,
    position: "relative",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    textAlign: "center",
    touchAction: "manipulation",
    _before: {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      minInlineSize: "44px",
      minBlockSize: "44px",
      background: "transparent",
      zIndex: -1,
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "primary.500",
      outlineOffset: "2px",
    },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      transform: "none !important",
    },
  },
  variants: {
    visual: {
      primary: {
        backgroundColor: "primary.500",
        color: "white",
        border: "none",
        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
        "@media (any-hover: hover)": {
          _hover: {
            backgroundColor: "primary.600",
            transform: "translateY(-1px)",
          },
        },
        _active: {
          transform: "translateY(0)",
        },
      },
      secondary: {
        backgroundColor: "white",
        border: "1px solid",
        borderColor: "gray.300",
        "@media (any-hover: hover)": {
          _hover: {
            backgroundColor: "gray.50",
          },
        },
        _active: {
          backgroundColor: "gray.100",
        },
      },
    },
    size: {
      sm: {
        padding: "token(spacing.1) token(spacing.2)",
        fontSize: "caption",
        borderRadius: "8px",
      },
      lg: {
        padding: "token(spacing.2) token(spacing.6)",
        fontSize: "h5",
        fontWeight: "bold",
        borderRadius: "12px",
      },
    },
  },
  defaultVariants: {
    visual: "primary",
    size: "sm",
  },
});
