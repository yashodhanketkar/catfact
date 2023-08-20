import LayoutWrapper from "../components/interface";
import { Outlet } from "react-router-dom";
import PageRouter from "../routes";
import { CatFactWrapper } from "../context/CatFact";
import { Cookies } from "../components/interface/cookie";

export const Layout = () => {
  return (
    <LayoutWrapper>
      <CatFactWrapper>
        <PageRouter />
        <Outlet />
        <Cookies />
      </CatFactWrapper>
    </LayoutWrapper>
  );
};
