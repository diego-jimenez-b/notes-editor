import { useLayoutCtx } from "../../contexts/layout-context";
import BackDrop from "../Backdrop";
import FolderSection from "./FolderSection";
import * as s from "./styles";

const SideBar = () => {
  const { menuActive, toggleMenu, isDesktop } = useLayoutCtx();

  return (
    <>
      <s.Container visible={menuActive}>
        <FolderSection />
      </s.Container>
      {!isDesktop && menuActive && <BackDrop onClick={toggleMenu} opacity={0} />}
    </>
  );
};

export default SideBar;
