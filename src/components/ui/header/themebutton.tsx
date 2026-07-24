import { useThemeStore } from "@/store/theme";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const ThemeButton = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <button
      className="aspect-square opacity-90 hover:opacity-100 cursor-pointer rounded-full text-2xl p-0 mx-2"
      onClick={() => setTheme(theme)}
    >
      {theme === "dark" ? (
        <MdDarkMode className="fill-amber-500" />
      ) : (
        <MdLightMode className="fill-amber-600" />
      )}
    </button>
  );
};
