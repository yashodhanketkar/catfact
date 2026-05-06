import { NavBar } from "./navbar";
import { ThemeButton } from "./themebutton";

export const Header = () => {
  return (
    <header className="z-50 inline-flex items-center justify-center w-full p-2 bg-primary text-primary-foreground md:justify-start">
      <p className="grow text-xl font-bold md:text-2xl">CatFact</p>
      <NavBar />
      <ThemeButton />
    </header>
  );
};
