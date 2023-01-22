import { createContext, useState } from "react";
import { DisplayCatFact } from "./facts";
import { Header } from "../components/header";
import ThemeSetter from "../components/theme";

const defaultTheme: themeAllowed = " dark";

export const ThemeContext = createContext<themeAllowed>(defaultTheme);

const Layout = () => {
  const [theme, setTheme] = useState<themeAllowed>(defaultTheme);

  return (
    <>
      <Header />
      <ThemeContext.Provider value={theme}>
        <ThemeSetter setTheme={setTheme} />
        <div className={`content${theme}`}>
          <DisplayCatFact />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Layout;
