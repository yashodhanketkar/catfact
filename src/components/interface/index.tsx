import { ThemeWrapper } from "../../context/Theme";
import { Footer } from "./footer";
import { Header } from "./header";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <ThemeWrapper>
        <Header />
        <main className="flex-grow mb-auto">{children}</main>
        <Footer />
      </ThemeWrapper>
    </div>
  );
};

export default LayoutWrapper;
