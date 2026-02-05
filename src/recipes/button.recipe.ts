import { cva } from "../../styled-system/css";

export const button = cva({
  base: {
    display: "inline flex",
    justifyContent: "center",
    columnGap: 1,
    position: "relative",
    cursor: "pointer",
    textAlign: "center",
    touchAction: "manipulation",
    minInlineSize: "fit-content",
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
      outlineColor: "gray.600",
      outlineOffset: "2px",
    },
    "@media (prefers-reduced-motion: reduce)": {
      transform: "none !important",
    },
  },
  variants: {
    visual: {
      primary: {
        backgroundColor: "primary.500",
        color: "white",
        border: "none",
        boxShadow: "0 1px 2px oklch(0.603 0.139 90 / 0.15), 0 4px 8px oklch(0.603 0.139 90 / 0.1)",
        "@media (any-hover: hover)": {
          _hover: {
            backgroundColor: "primary.600",
          },
        },
      },
      secondary: {
        backgroundColor: "white",
        color: "gray.700",
        border: "1px solid",
        borderColor: "gray.300",
        "@media (any-hover: hover)": {
          _hover: {
            backgroundColor: "gray.50",
            borderColor: "gray.400",
          },
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
        padding: "token(spacing.2) token(spacing.4)",
        fontSize: "h5",
        fontWeight: "bold",
        borderRadius: "12px",
      },
    },
    fluid: {
      true: {
        width: "stretch",
      },
      false: {
        width: "fit-content",
      },
    },
  },
  defaultVariants: {
    visual: "primary",
    size: "sm",
    fluid: false,
  },
});
