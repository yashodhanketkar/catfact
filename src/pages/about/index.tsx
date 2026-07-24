import { data } from "./data";
import { type AuthorData } from "@/components/type";

const RowFactory = ({ name, value }: AuthorData) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <p className="font-bold capitalize">{name}</p>
      {value.match("http") ? (
        <a href={value} className="break-all">
          Source
        </a>
      ) : (
        <p className="break-all">{value}</p>
      )}
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center text-foreground">
      <h1 className="text-xl font-bold">Simple PWA app showcase</h1>
      <div className="flex flex-col gap-2 mt-2 gap-1 items-start p-4 w-[80vw] lg:w-[65ch]">
        {[...data].map((item) => (
          <RowFactory key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
