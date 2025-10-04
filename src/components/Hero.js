import "./Hero.css";
import heroImage from "../images/restaurantfood.jpg";

function Hero() {
  return (
    <section className="hero container">
      <div className="container hero-content">
        {/* Left side */}
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn-primary">Reserve a Table</button>
        </div>

        {/* right side */}
        <div className="hero-image">
          <img src={heroImage} alt="Delicious food from Little Lemon" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
