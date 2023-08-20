import { useState, useCallback, createContext, useEffect } from "react";

const nullData: catfact = {
  fact: "null",
  length: 0,
};

export const FactContext = createContext<{
  fact: catfact;
  fetchData: () => void;
}>({ fact: nullData, fetchData: () => {} });

export const CatFactWrapper = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<catfact>(nullData);

  const fetchData = useCallback(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        if (!data) throw Error("Can't fetch the data from server");
        else setData(data);
      })
      .catch((err) => {
        console.log((err as Error).message);
      });
  }, []);

  useEffect(() => fetchData(), []);

  return (
    <FactContext.Provider value={{ fact: data, fetchData: fetchData }}>
      {children}
    </FactContext.Provider>
  );
};
