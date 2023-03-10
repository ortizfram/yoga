import Navbar from "./components/Navbar";
import Acerca from "./pages/Acerca";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Acerca />
      <Contact />
    </div>
  );
};

export default App;
