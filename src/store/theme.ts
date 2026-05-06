import { create } from "zustand";
import type { ThemeType } from "@/components/type";

interface IThemeState {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  fetchTheme: () => void;
}

const handleTheme = (theme: ThemeType): ThemeType => {
  let newTheme: ThemeType;

  switch (theme) {
    case "light":
      newTheme = "dark";
      break;
    case "dark":
      newTheme = "light";
      break;
    default:
      newTheme = "dark";
      break;
  }

  handleThemeChage(newTheme);
  return newTheme as ThemeType;
};

const handleThemeChage = (theme: ThemeType) => {
  const root = window.document.documentElement;
  root.classList.remove("dark", "light", "system");
  root.classList.add(theme as string);
  localStorage.setItem("theme", theme || "dark");
};

export const useThemeStore = create<IThemeState>((set) => ({
  theme: localStorage.getItem("theme") as ThemeType,
  setTheme: (theme) => {
    const newTheme = handleTheme(theme);
    set({ theme: newTheme });
  },
  fetchTheme: () => {
    const theme = localStorage.getItem("theme");
    handleThemeChage(theme as ThemeType);
  },
}));
