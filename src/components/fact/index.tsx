import { useContext } from "react";
import { FactContext } from "../../context/CatFact";
import { CardWrapper } from "../card";
// import { useTheme } from "../../hooks";
import { ThemeContext } from "../../context/Theme";

export const FactCore = () => {
  // const [handleTheme] = useTheme();
  const { fact, fetchData } = useContext(FactContext);
  const { handleTheme } = useContext(ThemeContext);
  return (
    <CardWrapper>
      <div className="w-[65vw] md:[45vw] lg:w-[25vw] font-comfortaa flex flex-col gap-2">
        <p className="text-lg">{fact.fact}</p>
        <p className="text-center">({fact.length})</p>
      </div>
      <div className="inline-flex justify-center w-full gap-2 mt-2 lg:mt-4">
        <button className="custom-button" onClick={fetchData}>
          Refetch
        </button>
        <button className="custom-button" onClick={handleTheme}>
          Theme
        </button>
      </div>
    </CardWrapper>
  );
};
