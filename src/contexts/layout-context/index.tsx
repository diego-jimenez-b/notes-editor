import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MQ } from "../../theme";
import { ILayoutCtx } from "./types";

const LayoutContext = createContext({} as ILayoutCtx);

const LayoutContextProvider = ({ children }: { children: ReactNode }) => {
  const [menuActive, setMenuActive] = useState(false);
  const isDesktop = useMediaQuery(MQ.md);

  const ctxState = useMemo(
    () => ({ menuActive, toggleMenu: () => setMenuActive((s) => !s), isDesktop }),
    [menuActive, isDesktop]
  );

  return <LayoutContext.Provider value={ctxState}>{children}</LayoutContext.Provider>;
};

export default LayoutContextProvider;
export const useLayoutCtx = () => useContext(LayoutContext);
