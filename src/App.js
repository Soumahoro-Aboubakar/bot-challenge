import BotsCattegories from "./components/BotsCattegories";
import BotsFeatures from "./components/BotsFeatures";
import Collection from "./components/Collection";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <div className="App   w-[85vw] mx-auto">
        <Navbar />
        <Collection />
        <Feature />
        <BotsFeatures /> <BotsCattegories />
        <Footer />
      </div>

    </div>

  );
}

export default App;
