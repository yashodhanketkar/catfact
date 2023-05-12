import { useState } from "react";
import { GrClose, GrContract } from "react-icons/gr";

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
        cardVisibility
          ? "bg-white dark:bg-stone-800 p-2 hover:shadow-lg shadow-stone-950"
          : ""
      } w-fit rounded-xl m-4`}
    >
      <div
        className={`w-full flex gap-2 justify-end ${
          cardVisibility
            ? ""
            : "ring-1 ring-stone-500 dark:ring-stone-200 p-2 rounded-xl"
        }`}
      >
        <button
          className="p-2 rounded-full hover:shadow shadow-stone-500 dark:shadow-stone-400 bg-neutral-200 dark:hover:bg-neutral-400 dark:bg-neutral-500 hover:bg-neutral-100"
          onClick={() => setSmallCard(!smallCard)}
        >
          <GrContract />
        </button>
        <button
          className="p-2 rounded-full hover:shadow shadow-stone-500 dark:shadow-stone-400 bg-neutral-200 dark:hover:bg-neutral-400 dark:bg-neutral-500 hover:bg-neutral-100"
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
          <div className="text-neutral-600 dark:text-neutral-100">
            <div className="text-justify">{data.fact}</div>
            <div className="text-center">Length: {data.length}</div>
          </div>
        ) : (
          <div className="data-fact">Loading</div>
        )}
        <button
          className="px-2 py-1 text-black rounded-full dark:text-stone-100 bg-neutral-200 dark:shadow-stone-400 dark:bg-neutral-500 dark:hover:bg-neutral-400 hover:bg-neutral-100 w-fit hover:shadow-md dark:shadow-sm shadow-stone-950"
          onClick={handleClick}
        >
          Next Fact
        </button>
      </div>
    </div>
  );
};
