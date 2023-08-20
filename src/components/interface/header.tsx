import { NavBar } from "./navbar";

export const Header = () => {
  return (
    <header className="z-50 inline-flex items-center justify-center w-full p-2 text-white bg-black md:justify-start font-comfortaa">
      <p className="flex-grow text-xl font-bold md:text-2xl">CatFact</p>
      <NavBar />
    </header>
  );
};
