import { CatCardWrapper } from "./catFactCard";

export const CatCard = (props: catFactProps) => {
  return <CatCardWrapper data={props.data} refetch={props.refetch} />;
};
