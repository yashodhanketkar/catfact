import { Footer } from "./footer";
import { Header } from "./header";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="mb-auto mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
