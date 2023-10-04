import { CardWrapper } from "../card";

interface IData {
  name: string;
  value: string;
}

const data: IData[] = [
  {
    name: "Developer",
    value: "Yashodhan Ketkar",
  },
  {
    name: "HomePage",
    value: "yashodhan-ketkar.web.app",
  },
  {
    name: "Version",
    value: "2.0.1",
  },
  {
    name: "github",
    value: "/yashodhanketkar/catfact",
  },
  {
    name: "Priority",
    value: "low",
  },
];

const RowFactory = ({ name, value }: IData) => {
  return (
    <div className="inline-flex gap-2">
      <p className="flex-grow font-bold text-right">{name}:</p>
      <p className="w-2/3 break-all">{value}</p>
    </div>
  );
};

export const AboutCore = () => {
  return (
    <CardWrapper noPadding>
      <div className="w-[80vw] lg:w-[25vw] gap-1 p-4 flex flex-col">
        {data.map((item) => (
          <RowFactory key={item.name} {...item} />
        ))}
      </div>
    </CardWrapper>
  );
};
