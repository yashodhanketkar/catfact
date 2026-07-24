import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const AboutPage = lazy(() => import("../pages/about"));
const FactPage = lazy(() => import("../pages/fact"));

export default function PageRouter() {
  return (
    <Routes>
      <Route path="/catfact/" element={<FactPage />} />
      <Route path="/catfact/about" element={<AboutPage />} />
    </Routes>
  );
}
