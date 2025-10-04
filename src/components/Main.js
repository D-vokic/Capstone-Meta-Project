import "./Main.css";
import greekSalad from "../images/greeksalad.jpg";
import bruschetta from "../images/bruchetta.svg";
import lemonDessert from "../images/lemondessert.jpg";

function Main() {
  return (
    <main className="specials">
      <div className="container specials-header">
        <h2>Specials</h2>
        <button className="btn-dark">Online Menu</button>
      </div>

      <div className="container specials-grid">
        {/* Greek Salad */}
        <div className="card">
          <img src={greekSalad} alt="Greek Salad" />
          <div className="card-body">
            <div className="card-title">
              <h3>Greek salad</h3>
              <span className="price">$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <a href="/" className="order-link">
              Order a delivery 🚚
            </a>
          </div>
        </div>

        {/* Bruschetta */}
        <div className="card">
          <img src={bruschetta} alt="Bruschetta" />
          <div className="card-body">
            <div className="card-title">
              <h3>Bruschetta</h3>
              <span className="price">$5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <a href="/" className="order-link">
              Order a delivery 🚚
            </a>
          </div>
        </div>

        {/* Lemon Dessert */}
        <div className="card">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <div className="card-body">
            <div className="card-title">
              <h3>Lemon Dessert</h3>
              <span className="price">$5.00</span>
            </div>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <a href="/" className="order-link">
              Order a delivery 🚚
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
