import { useState } from "react";
import { GrClose, GrContract } from "react-icons/gr";

interface props {
  data: catfact;
  refetch: any;
}

export const CatCardWrapper = (props: props) => {
  const { data, refetch } = props;

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
    <div className={`card${cardSizeAddition}`}>
      <div className="card-button-wrapper">
        <button className="size-button" onClick={handleSize}>
          <GrContract />
        </button>
        <button className="close-button" onClick={handleVisibility}>
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
          className="fact-button"
          type={"button"}
          value={"Next Fact"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
