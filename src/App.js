import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Main from "./components/Main.js";
import Testimonials from "./components/Testimonials.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import AboutPage from "./pages/AboutPage.js"; // ✅ nova stranica

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Main />
              <Testimonials />
              <About />
              <Footer />
            </>
          }
        />

        {/* About page */}
        <Route
          path="/about"
          element={
            <>
              <AboutPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
