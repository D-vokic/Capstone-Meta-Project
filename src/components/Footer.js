import "./Footer.css";
import Logo from "../images/Logo.svg";
import Restaurant from "../images/restaurant.jpg"; // dodaj odgovarajuću sliku restorana

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-container">
        {/* Logo i slika restorana */}
        <div className="footer-logo">
          <img src={Logo} alt="Little Lemon logo" className="logo" />
          <img
            src={Restaurant}
            alt="Little Lemon restaurant"
            className="restaurant"
          />
        </div>

        {/* Doormat Navigation */}
        <div className="footer-column">
          <h5>Doormat Navigation</h5>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h5>Contact</h5>
          <ul>
            <li>123 Main Street, Chicago, IL</li>
            <li>Tel: (312) 555-1234</li>
            <li>Email: info@littlelemon.com</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-column">
          <h5>Social Media Links</h5>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
