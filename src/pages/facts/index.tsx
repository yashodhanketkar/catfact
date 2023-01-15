import React, { FC, useState } from "react";
import { useQuery } from "react-query";

type catfact = { fact: string; length: number };

const Facts: FC = () => {
  const [cardSizeAddition, setCardSizeAddition] = useState("");
  const [cardVisibility, setCardVisibility] = useState("");

  const { data, refetch } = useQuery(
    ["facts"],
    async (): Promise<catfact> => {
      const response = await fetch("https://catfact.ninja/fact");
      const json = response.json();
      return json;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

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
        <input
          className="size-button"
          type={"button"}
          value={"O"}
          onClick={handleSize}
        />
        <input
          className="close-button"
          type={"button"}
          value={"X"}
          onClick={handleVisibility}
        />
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

export default Facts;
