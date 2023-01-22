import { useContext } from "react";
import { ThemeContext } from "../../pages/layout";
// import { CgDarkMode } from "react-icons/cg";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

export default function ThemeSetter(props: themeProps) {
  const theme = useContext(ThemeContext);
  const setTheme = props.setTheme;

  let handleThemeChange = () => {
    theme === " light" ? setTheme(" dark") : setTheme(" light");
  };

  return (
    <>
      <button
        className={`dark-mode-button${theme}`}
        onClick={handleThemeChange}
      >
        {theme === " dark" ? <MdDarkMode /> : <MdOutlineDarkMode />}
      </button>
    </>
  );
}
