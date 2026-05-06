export const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-card text-card-foreground rounded-xl shadow mt-[25vh]">
      {children}
    </div>
  );
};
