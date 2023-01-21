import { useQuery } from "react-query";

export const useCatFact = () => {
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

  return { data, refetch };
};
