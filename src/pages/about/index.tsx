import { data } from "./data";
import { CardWrapper } from "@/components/card";
import { type AuthorData } from "@/components/type";

const RowFactory = ({ name, value }: AuthorData) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <p className="font-bold">{name}</p>
      <p className="break-all">{value}</p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <CardWrapper>
      <div className="flex flex-col gap-2 mt-2 gap-1 items-start p-4 w-[80vw] lg:w-[65ch]">
        {[...data].map((item) => (
          <RowFactory key={item.name} {...item} />
        ))}
      </div>
    </CardWrapper>
  );
};

export default AboutPage;
