import { create } from "zustand";
import { type CatFact } from "@/components/type";
import { catFactFetcher } from "@/api/catfact";

interface ICatFactState {
  catfact: CatFact;
  loading: boolean;
  setFact: (catfact: CatFact) => void;
  fetchData: () => void;
}

export const useCatFactStore = create<ICatFactState>((set) => ({
  catfact: { fact: "", length: 0 },
  loading: true,
  fetchData: async () => {
    const res = await catFactFetcher();
    set({ catfact: res, loading: false });
  },
  setFact: (catfact) => set({ catfact }),
}));
