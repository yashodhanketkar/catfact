import { useState, useContext } from "react";
import { GrClose, GrContract } from "react-icons/gr";
import { ThemeContext } from "../../pages/layout";

export const CatCardWrapper = (props: catFactProps) => {
  const { data, refetch } = props;
  const theme = useContext(ThemeContext);

  const [cardSizeAddition, setCardSizeAddition] = useState("");
  const [cardVisibility, setCardVisibility] = useState("");

  let handleClick = () => {
    refetch();
  };

  let handleSize = () => {
    cardSizeAddition ? setCardSizeAddition("") : setCardSizeAddition(" small");
  };

  let handleVisibility = () => {
    cardVisibility ? setCardVisibility("") : setCardVisibility(" collapsed");
  };

  return (
    <div className={`card${cardSizeAddition}${theme}`}>
      <div className="card-button-wrapper">
        <button className={`size-button${theme}`} onClick={handleSize}>
          <GrContract />
        </button>
        <button className={`close-button${theme}`} onClick={handleVisibility}>
          <GrClose />
        </button>
      </div>
      <div className={`card-data${cardVisibility}`}>
        {data ? (
          <>
            <div className="data-fact">{data.fact}</div>
            <div className="data-length">Length: {data.length}</div>
          </>
        ) : (
          <div className="data-fact">Loading</div>
        )}
        <input
          className={`fact-button${theme}`}
          type={"button"}
          value={"Next Fact"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
