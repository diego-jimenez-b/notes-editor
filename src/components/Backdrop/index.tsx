import useBlockView from "../../hooks/useBlockView";
import { IProps } from "./types";
import * as s from "./styles";

const BackDrop = (props: IProps) => {
  useBlockView();
  return <s.Backdrop {...props} />;
};

export default BackDrop;
