import { FC } from "react";

export const Header: FC = (): JSX.Element => {
  return (
    <header className="px-1 py-1 text-center text-3xl font-semibold bg-neutral-950 text-neutral-300 hover:text-neutral-100">
      <div className="site-name">Cat-Facts</div>
    </header>
  );
};
