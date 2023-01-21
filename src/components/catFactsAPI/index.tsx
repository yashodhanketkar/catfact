import { CatCardWrapper } from "./catFactCard";

interface props {
  data: catfact;
  refetch: any;
}

export const CatCard = (props: props) => {
  return <CatCardWrapper data={props.data} refetch={props.refetch} />;
};
