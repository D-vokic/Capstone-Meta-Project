import "./About.css";
import restaurant from "../images/restaurant.jpg";
import chef from "../images/restaurant_chef_B.jpg";

function About() {
  return (
    <section className="about container">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className="about-images">
        <img src={restaurant} alt="Little Lemon Restaurant" className="img1" />
        <img src={chef} alt="Chef at Little Lemon" className="img2" />
      </div>
    </section>
  );
}

export default About;
