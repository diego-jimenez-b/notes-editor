import { Icon, IIcon } from "./Icon";

export const ChevronIcon = (props: IIcon) => (
  <Icon viewBox="0 0 24 24" fill="none" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </Icon>
);
