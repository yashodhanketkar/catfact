import { NavBar } from "./navbar";
import { ThemeButton } from "./themebutton";

export const Header = () => {
  return (
    <header
      className="z-50 inline-flex items-center justify-center mx-auto p-2 bg-primary text-primary-foreground
      w-full md:container
       md:my-4 md:rounded-xl"
    >
      <p className="grow text-xl font-bold md:text-2xl ml-2">CatFact</p>
      <NavBar />
      <ThemeButton />
    </header>
  );
};
