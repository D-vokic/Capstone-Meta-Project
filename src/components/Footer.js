import "./Footer.css";
import logo from "../images/Logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon logo" />
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4>Doormat Navigation</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order-online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>123 Main Street, Chicago, IL</p>
          <p>+1 (312) 123-4567</p>
          <p>info@littlelemon.com</p>
        </div>

        {/* Social media */}
        <div className="footer-col">
          <h4>Social Media Links</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
