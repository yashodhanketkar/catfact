import { FC } from "react";
import { useTheme } from "../../hooks/useTheme";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

export const Header: FC = (): JSX.Element => {
  const [handleTheme] = useTheme();
  const theme = localStorage.getItem("theme");
  return (
    <header className="px-1 py-1 text-3xl font-semibold text-center bg-neutral-950 text-neutral-300 hover:text-neutral-100">
      <div className="site-name">
        Cat-Facts
        <button className="absolute right-4 top-1" onClick={handleTheme}>
          {theme === "dark" ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
      </div>
    </header>
  );
};
