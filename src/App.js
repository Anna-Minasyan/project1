import {Header} from "./components/Header";
import About from "./components/About";
import Facts from "./components/Facts";
import Features from "./components/Features";
import Service from "./components/Service";
import Roadmap from "./components/Roadmap";
import TokenSale from "./components/TokenSale";
import Faqs from "./components/Faqs";
import Layout from "./components/Layout";
import AboutPage from "./components/AboutPage";

function App() {

     return (
      <div className='container-fluid'>
      <Layout>
          <Header />
          <About />
          <Facts />
          <Features />
          <Service />
          <Roadmap />
          <TokenSale />
          <Faqs />
      </Layout>
          <AboutPage/>

      </div>
  );
}

export default App;
