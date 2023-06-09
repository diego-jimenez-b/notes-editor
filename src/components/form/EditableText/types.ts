import { MutableRefObject } from "react";
import { SetState } from "../../../types/utilityTypes";

export interface IProps {
  disabled?: boolean;
  initialValue: string;
  onChange: (initialValue: string) => void;
  maxWidth?: string;
  actionsRef?: MutableRefObject<null | EditableTextActions>;
}

export type EditableTextActions = { setEdit: SetState<boolean> };
