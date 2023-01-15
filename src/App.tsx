import React from "react";
import Layout from "./pages/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import "./static/base.scss";

function App() {
  const client = new QueryClient({});
  return (
    <div className="site">
      <QueryClientProvider client={client}>
        <Layout />
      </QueryClientProvider>
    </div>
  );
}

export default App;
