export const theme = {
  color: {
    NEUTRAL: {
      100: "#F8F9FA",
      200: "#E9ECEF",
      300: "#DEE2E6",
      400: "#CED4DA",
      500: "#ADB5BD",
      600: "#6C757D",
      700: "#495057",
      800: "#343A40",
      900: "#212529",
    },
    PRIMARY: {
      100: "#BAC4E9",
      200: "#8C9DDA",
      300: "#647CCE",
      400: "#4260C3",
      500: "#3651A9",
      600: "#2D438C",
      700: "#253874",
      800: "#1F2E60",
      900: "#1A2650",
    },
  },
  boxShadow: {
    small: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    medium: "0px 0px 24px 4px rgba(0, 14, 51, 0.2)",
  },
} as const;

export const MQ = {
  xs: "(min-width: 481px)",
  sm: "(min-width: 769px)",
  md: "(min-width: 1025px)",
  lg: "(min-width: 1200px)",
} as const;

export const $MQ = {
  xs: `@media ${MQ.xs}`,
  sm: `@media ${MQ.sm}`,
  md: `@media ${MQ.md}`,
  lg: `@media ${MQ.lg}`,
} as const;

export type Theme = typeof theme;
