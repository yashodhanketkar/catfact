import { type CatFact } from "@/components/type";

export const catFactFetcher = async () => {
  const res = await fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      if (!data) throw Error("Can't fetch the data from server");
      else return data;
    });

  return res as CatFact;
};
