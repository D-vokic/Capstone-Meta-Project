import React from "react";
import "./AboutPage.css";
import restaurant from "../images/restaurant.jpg";

function AboutPage() {
  return (
    <section className="about-page container">
      <div className="about-page-text">
        <h1>About Little Lemon</h1>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant focused on
          traditional recipes served with a modern twist. We pride ourselves on
          using the freshest ingredients and providing a warm and welcoming
          atmosphere for all guests.
        </p>
      </div>
      <div className="about-page-image">
        <img src={restaurant} alt="Little Lemon Restaurant" />
      </div>
    </section>
  );
}

export default AboutPage;
