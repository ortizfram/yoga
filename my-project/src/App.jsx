import Navbar from "./components/Navbar";
import Acerca from "./pages/Acerca";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Acerca />
      <Contact />
    </div>
  );
}

export default App;
