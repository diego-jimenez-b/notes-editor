import useBlockView from "../../hooks/useBlockView";
import { IProps } from "./types";
import * as s from "./styles";

const BackDrop = ({ onClick = () => {}, ...props }: IProps) => {
  useBlockView();
  return (
    <s.Backdrop
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
      {...props}
    />
  );
};

export default BackDrop;
