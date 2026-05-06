import { CardWrapper } from "@/components/card";
import { useCatFactStore } from "@/store/catFact";
import { catFactFetcher } from "@/api/catfact";

const FactPage = () => {
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
          className="p-2 rounded w-fit cursor-pointer 
          bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
          onClick={handleFetch}
        >
          Refetch
        </button>
      </div>
    </CardWrapper>
  );
};

export default FactPage;
