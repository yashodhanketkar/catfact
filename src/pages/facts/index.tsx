import { FC } from "react";
import { useCatFact } from "../../hooks";
import { CatCard } from "../../components/catFactsAPI";

export const DisplayCatFact: FC = (): JSX.Element => {
  const { data, refetch } = useCatFact();

  return <>{data && <CatCard data={data} refetch={refetch} />}</>;
};
