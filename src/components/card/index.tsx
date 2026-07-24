function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card text-card-foreground rounded-xl shadow shadow-card-foreground/20 mt-[25vh]">
      {children}
    </div>
  );
}

export default CardWrapper;
