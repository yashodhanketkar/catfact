import { useState, useContext } from "react";
import { GrClose, GrContract } from "react-icons/gr";
import { ThemeContext } from "../../pages/layout";

export const CatCardWrapper = (props: catFactProps) => {
  const { data, refetch } = props;

  const [smallCard, setSmallCard] = useState(false);
  const [cardVisibility, setCardVisibility] = useState(true);

  let handleClick = () => {
    refetch();
  };

  return (
    <div
      className={`${smallCard ? "max-w-prose" : "max-w-[80%]"} ${
        cardVisibility ? "bg-white p-2 hover:shadow-xl shadow-stone-950" : ""
      } w-fit rounded-xl m-4`}
    >
      <div
        className={`w-full flex gap-2 justify-end ${
          cardVisibility ? "" : "ring-1 ring-stone-500 p-2 rounded-xl"
        }`}
      >
        <button
          className="p-2 rounded-full hover:shadow shadow-stone-500 bg-neutral-200 hover:bg-neutral-100"
          onClick={() => setSmallCard(!smallCard)}
        >
          <GrContract />
        </button>
        <button
          className="p-2 rounded-full hover:shadow shadow-stone-500 bg-neutral-200 hover:bg-neutral-100"
          onClick={() => setCardVisibility(!cardVisibility)}
        >
          <GrClose />
        </button>
      </div>
      <div
        className={`${
          cardVisibility ? "flex" : "invisible"
        } flex-col p-2 items-center gap-2`}
      >
        {data ? (
          <div className="text-neutral-600">
            <div className="text-justify">{data.fact}</div>
            <div className="text-center">Length: {data.length}</div>
          </div>
        ) : (
          <div className="data-fact">Loading</div>
        )}
        <button
          className="text-black bg-neutral-200 hover:bg-neutral-100 w-fit rounded-full px-2 py-1 hover:shadow-md shadow-stone-950"
          onClick={handleClick}
        >
          Next Fact
        </button>
      </div>
    </div>
  );
};
