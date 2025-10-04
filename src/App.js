import "./App.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Main from "./components/Main.js";
import Testimonials from "./components/Testimonials.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
