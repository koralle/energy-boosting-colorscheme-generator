import { cva } from "../../styled-system/css";

export const button = cva({
  base: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 1,
    position: "relative",
    cursor: "pointer",
    textAlign: "center",
    touchAction: "manipulation",
    minInlineSize: "fit-content",
    transition: "background-color 160ms ease, box-shadow 160ms ease, transform 120ms ease",
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
    _active: {
      transform: "translateY(1px)",
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
        boxShadow:
          "0 1px 2px oklch(0.603 0.139 90 / 0.16), 0 5px 10px oklch(0.603 0.139 90 / 0.12)",
        "@media (any-hover: hover)": {
          _hover: {
            backgroundColor: "primary.600",
            boxShadow:
              "0 2px 4px oklch(0.603 0.139 90 / 0.18), 0 8px 14px oklch(0.524 0.143 90 / 0.16)",
          },
        },
        _active: {
          backgroundColor: "primary.700",
          boxShadow:
            "inset 0 1px 2px oklch(0.444 0.145 90 / 0.26), 0 1px 2px oklch(0.603 0.139 90 / 0.1)",
        },
      },
      secondary: {
        backgroundColor: "white",
        color: "gray.700",
        border: "1px solid",
        borderColor: "gray.300",
        boxShadow: "0 1px 2px oklch(0.53 0.015 90 / 0.08)",
        "@media (any-hover: hover)": {
          _hover: {
            backgroundColor: "gray.50",
            borderColor: "gray.400",
            boxShadow: "0 3px 8px oklch(0.53 0.015 90 / 0.1)",
          },
        },
        _active: {
          backgroundColor: "gray.100",
          borderColor: "gray.500",
          boxShadow:
            "inset 0 1px 2px oklch(0.44 0.016 90 / 0.16), 0 1px 2px oklch(0.53 0.015 90 / 0.05)",
        },
      },
    },
    size: {
      sm: {
        padding: "token(spacing.1) token(spacing.2)",
        textStyle: "buttonSm",
        borderRadius: "8px",
      },
      lg: {
        padding: "token(spacing.2) token(spacing.4)",
        textStyle: "buttonLg",
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
