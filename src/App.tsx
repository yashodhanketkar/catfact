import { Outlet } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useCatFactStore } from "./store/catFact";
import { useThemeStore } from "./store/theme";

const LayoutWrapper = lazy(() => import("./components/layout"));
const PageRouter = lazy(() => import("./routes"));
const Cookies = lazy(() => import("./components/cookie"));

function App() {
  const { fetchData } = useCatFactStore();
  const { fetchTheme } = useThemeStore();

  useEffect(() => {
    fetchData();
    fetchTheme();
  }, [fetchData, fetchTheme]);

  return (
    <LayoutWrapper>
      <PageRouter />
      <Outlet />
      <Cookies />
    </LayoutWrapper>
  );
}

export default App;
