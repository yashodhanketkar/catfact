import { DisplayCatFact } from "./facts";
import { Header } from "../components/header";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Header />
      <div className="flex justify-center mb-auto">
        <DisplayCatFact />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
