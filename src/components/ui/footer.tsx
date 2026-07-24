export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="inline-flex justify-between w-full p-2 text-primary-foreground bg-primary">
      <div className="container mx-auto grid grid-cols-2 gap-2 pt-4 pb-2">
        <p className="text-left font-semibold">CatFact</p>
        <p className="text-sm text-right">
          Copyright © 2023 - {year} Yashodhan Ketkar
        </p>
      </div>
    </div>
  );
};
