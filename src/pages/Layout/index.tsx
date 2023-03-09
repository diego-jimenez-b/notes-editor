import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import * as s from "./styles";

const Layout = () => (
  <s.Container>
    <SideBar /> <Outlet />
  </s.Container>
);

export default Layout;
