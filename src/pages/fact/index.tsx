import { useCatFactStore } from "@/store/catFact";
import { catFactFetcher } from "@/api/catfact";
import { lazy } from "react";

const CardWrapper = lazy(() => import("@/components/card"));

export default function FactPage() {
  const { catfact, setFact } = useCatFactStore();

  const handleFetch = async () => {
    try {
      const fact = await catFactFetcher();
      setFact(fact);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CardWrapper>
      <div className="flex flex-col gap-2 mt-2 gap-1 items-center p-4 w-[80vw] lg:w-[65ch]">
        <div className="max-w-[65ch] font-comfortaa lg:text-justify flex flex-col gap-2 p-4">
          <p className="text-lg">{catfact.fact}</p>
          <p className="text-center">({catfact.length})</p>
        </div>
        <button
          className="p-2 rounded w-fit cursor-pointer bg-secondary text-secondary-foreground hover:opacity-80"
          onClick={handleFetch}
        >
          Refetch
        </button>
      </div>
    </CardWrapper>
  );
}
