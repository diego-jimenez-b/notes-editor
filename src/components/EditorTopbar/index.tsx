import { useLayoutCtx } from "../../contexts/layout-context";
import { ChevronIcon, MenuIcon } from "../../icons";
import { SetState } from "../../types/utilityTypes";
import EditableText from "../form/EditableText";
import * as s from "./styles";

interface IProps {
  title: string;
  showToolbar: boolean;
  setShowToolbar: SetState<boolean>;
}

const EditorTopbar = ({ title, showToolbar, setShowToolbar }: IProps) => {
  const { isDesktop, toggleMenu } = useLayoutCtx();

  return (
    <s.Container>
      {!isDesktop && <MenuIcon onClick={toggleMenu} />}
      <s.Content>
        <EditableText initialValue={title} onChange={() => {}} />
      </s.Content>
      <ChevronIcon
        onClick={() => setShowToolbar((s) => !s)}
        style={{ transform: `rotate(${showToolbar ? 0 : -90}deg)` }}
      />
    </s.Container>
  );
};

export default EditorTopbar;
