import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { MainRouter } from "./routes";

import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Header />
          <MainRouter />
        </Router>
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
