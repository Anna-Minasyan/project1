import {Header} from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Facts from "./components/Facts";
import Features from "./components/Features";
import Service from "./components/Service";
import Roadmap from "./components/Roadmap";
import TokenSale from "./components/TokenSale";
import Faqs from "./components/Faqs";

function App() {

     return (
      <div className='container-fluid'>

          <Navbar />
         <Header />
          <About />
          <Facts />
          <Features />
          <Service />
          <Roadmap />
          <TokenSale />
          <Faqs />

      </div>
  );
}

export default App;
