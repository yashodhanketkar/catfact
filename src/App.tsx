import Layout from "./pages/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { CookiesProvider } from "react-cookie";

function App() {
  const client = new QueryClient({});
  return (
    <div className="site">
      <CookiesProvider>
        <QueryClientProvider client={client}>
          <Layout />
        </QueryClientProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;
