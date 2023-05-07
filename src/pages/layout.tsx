import { createContext, useState } from "react";
import { DisplayCatFact } from "./facts";
import { Header } from "../components/header";
import ThemeSetter from "../components/theme";
import Footer from "../components/footer";

const defaultTheme: themeAllowed = " dark";

export const ThemeContext = createContext<themeAllowed>(defaultTheme);

const Layout = () => {
  const [theme, setTheme] = useState<themeAllowed>(defaultTheme);

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Header />
      <ThemeContext.Provider value={theme}>
        <ThemeSetter setTheme={setTheme} />
        <div className={`content${theme} mb-auto justify-center flex`}>
          <DisplayCatFact />
        </div>
      </ThemeContext.Provider>
      <Footer />
    </div>
  );
};

export default Layout;
