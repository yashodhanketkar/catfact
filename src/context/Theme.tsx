import { createContext, useCallback, useEffect, useState } from "react";

export const ThemeContext = createContext({
  darkTheme: false,
  handleTheme: () => {},
});

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
    } else if (localStorage.theme === "light" || !("theme" in localStorage)) {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  let handleTheme = () => {
    if (!darkTheme) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
