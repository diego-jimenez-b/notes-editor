import { ComponentPropsWithoutRef, ReactNode } from "react";

interface IProps {
  color?: string;
  size?: number;
  children?: ReactNode;
}

export type IIcon = IProps & ComponentPropsWithoutRef<"svg">;
export const Icon = ({ color = "currentColor", stroke = "currentColor", size, children, ...rest }: IIcon) => (
  <svg
    color={color}
    stroke={stroke}
    height={size ? `${size}px` : "1em"}
    width={size ? `${size}px` : "1em"}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    {children}
  </svg>
);
