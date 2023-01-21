import { FC } from "react";
import { DisplayCatFact } from "./facts";
import { Header } from "../components/header";

const Layout: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="content">
        <DisplayCatFact />
      </div>
    </>
  );
};

export default Layout;
