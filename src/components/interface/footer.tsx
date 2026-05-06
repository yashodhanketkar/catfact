export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="inline-flex justify-between w-full p-2 text-primary-foreground bg-primary">
      <p>CatFact</p>
      <p className="text-sm">Yashodhan Ketkar © 2023 - {year}</p>
    </div>
  );
};
