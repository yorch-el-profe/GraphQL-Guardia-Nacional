import Layout from "./components/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:8080",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/sesion" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
