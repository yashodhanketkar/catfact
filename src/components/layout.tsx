import { Footer } from "./ui/footer";
import { Header } from "./ui/header/header";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="mb-auto mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
