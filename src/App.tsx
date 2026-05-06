import { Outlet } from "react-router-dom";
import LayoutWrapper from "./components/interface";
import { Cookies } from "./components/interface/cookie";
import PageRouter from "./routes";
import { useEffect } from "react";
import { useCatFactStore } from "./store/catFact";
import { useThemeStore } from "./store/theme";

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
