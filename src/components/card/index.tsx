export const CardWrapper = ({
  noPadding = false,
  children,
}: {
  noPadding?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="backdrop">
      <div className={`custom-card  ${noPadding ? "p-0" : "p-4 md:p-8 "}`}>
        {children}
      </div>
    </div>
  );
};
