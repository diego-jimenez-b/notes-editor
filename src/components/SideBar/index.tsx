import { useLayoutCtx } from "../../contexts/layout-context";
import BackDrop from "../Backdrop";
import * as s from "./styles";

const SideBar = () => {
  const { menuActive, toggleMenu, isDesktop } = useLayoutCtx();

  return (
    <>
      <s.Container visible={menuActive}>SideBar</s.Container>
      {!isDesktop && menuActive && <BackDrop onClick={toggleMenu} opacity={0} />}
    </>
  );
};

export default SideBar;
