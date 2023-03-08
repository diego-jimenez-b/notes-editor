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
