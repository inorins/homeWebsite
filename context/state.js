import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
let newtop = false;
export function AppWrapper({ children }) {
  const [top, setTop] = useState(false);

  useEffect(() => {
    // check scrolled index
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY > 210;
      // find window height
      // const windowHeight = window.innerHeight;
      if (isTop !== newtop) {
        newtop = isTop;
        setTop(isTop)
      };
    });
  }, []);

  const sharedState = { top, setTop };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
