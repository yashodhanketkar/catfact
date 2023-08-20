import { Routes, Route } from "react-router-dom";
import { FactPage, AboutPage } from "../pages";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FactPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default PageRouter;
