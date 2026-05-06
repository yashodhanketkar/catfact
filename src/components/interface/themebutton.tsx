import { useThemeStore } from "@/store/theme";

export const ThemeButton = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <button
      className="aspect-square opacity-60 hover:opacity-100 cursor-pointer rounded-full fixed bottom-12 right-4 text-2xl p-0"
      onClick={() => setTheme(theme)}
    >
      {theme === "dark" ? "🌙" : "🌞"}
    </button>
  );
};
