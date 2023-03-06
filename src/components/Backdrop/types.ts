import { ComponentPropsWithoutRef } from "react";

export interface IStyledProps {
  opacity?: number;
}

export type IProps = ComponentPropsWithoutRef<"div"> & IStyledProps;
