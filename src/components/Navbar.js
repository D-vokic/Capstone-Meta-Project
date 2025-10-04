import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="App-nav container">
      <img src={logo} className="App-logo" alt="Little Lemon Logo" />

      {/* Hamburger dugme */}
      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Linkovi */}
      <ul className={`App-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={() => setIsOpen(false)}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" onClick={() => setIsOpen(false)}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order-online" onClick={() => setIsOpen(false)}>
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
