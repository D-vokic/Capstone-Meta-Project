import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Main from "./components/Main.js";
import Testimonials from "./components/Testimonials.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import AboutPage from "./pages/AboutPage.js";
import MenuPage from "./pages/MenuPage.js";
import ReservationsPage from "./pages/ReservationsPage.js";
import BookingPage from "./pages/BookingPage.js";
import OrderOnlinePage from "./pages/OrderOnlinePage.js";
import LoginPage from "./pages/LoginPage.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
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

        <Route
          path="/about"
          element={
            <>
              <AboutPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/menu"
          element={
            <>
              <MenuPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/reservations"
          element={
            <>
              <ReservationsPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/booking"
          element={
            <>
              <BookingPage />
            </>
          }
        />

        <Route
          path="/order-online"
          element={
            <>
              <OrderOnlinePage />
              <Footer />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <LoginPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
