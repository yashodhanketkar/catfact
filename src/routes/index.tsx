import { Routes, Route } from "react-router-dom";
import { FactPage, AboutPage } from "../pages";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/catfact/" element={<FactPage />} />
      <Route path="/catfact/about" element={<AboutPage />} />
    </Routes>
  );
};

export default PageRouter;
