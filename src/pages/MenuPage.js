import React from "react";
import "./MenuPage.css";
import bruschetta from "../images/bruchetta.svg";
import greekSalad from "../images/greeksalad.jpg";
import lemonCake from "../images/lemondessert.jpg";

function MenuPage() {
  const menuItems = [
    {
      name: "Bruschetta",
      description:
        "Grilled bread topped with fresh tomatoes, garlic, and basil.",
      price: "$6.50",
      image: bruschetta,
    },
    {
      name: "Greek Salad",
      description:
        "Fresh salad with tomatoes, cucumbers, olives, and feta cheese.",
      price: "$9.00",
      image: greekSalad,
    },
    {
      name: "Lemon Cake",
      description: "Light and fluffy lemon sponge with creamy frosting.",
      price: "$5.00",
      image: lemonCake,
    },
  ];

  return (
    <section className="menu-page container">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>
          Discover the authentic taste of the Mediterranean — fresh ingredients,
          bold flavors, and homemade recipes prepared with love.
        </p>
      </div>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="menu-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuPage;
