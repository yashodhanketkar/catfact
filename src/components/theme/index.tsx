import { useContext, useEffect, useLayoutEffect } from "react";
import { ThemeContext } from "../../pages/layout";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useCookies } from "react-cookie";

export default function ThemeSetter(props: themeProps) {
  const theme = useContext(ThemeContext);
  const [cookie, setCookie] = useCookies(["theme"]);
  const setTheme = props.setTheme;

  useLayoutEffect(() => {
    if (cookie.theme) setTheme(cookie.theme);
  }, [setTheme, cookie]);

  useEffect(() => {
    if (theme) setCookie("theme", theme, { path: "themeCookie" });
  }, [theme, setCookie]);

  let handleThemeChange = () => {
    theme === " light" ? setTheme(" dark") : setTheme(" light");
  };

  return (
    <>
      <button
        className="absolute top-1 right-1 text-white p-1"
        onClick={handleThemeChange}
      >
        {theme === " dark" ? (
          <MdDarkMode size={28} />
        ) : (
          <MdOutlineDarkMode size={28} />
        )}
      </button>
    </>
  );
}
