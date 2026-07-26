export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground p-2 w-full">
      <div className="mx-auto container">
        <p className="text-left font-semibold">CatFact</p>
        <p className="text-sm md:text-right">Copyright © 2023 - {year} Yashodhan Ketkar</p>
      </div>
    </footer>
  );
};
