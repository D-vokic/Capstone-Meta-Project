import React, { useState } from "react";
import "./OrderOnlinePage.css";
import bruschetta from "../images/bruchetta.svg";
import greekSalad from "../images/greeksalad.jpg";
import lemonCake from "../images/lemondessert.jpg";
import lemonade from "../images/lemonade.jpg";

function OrderOnlinePage() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("All");

  const menuItems = [
    {
      id: 1,
      category: "Starters",
      name: "Bruschetta",
      description:
        "Grilled bread topped with fresh tomatoes, garlic, and basil.",
      price: 6.5,
      image: bruschetta,
    },
    {
      id: 2,
      category: "Main Dishes",
      name: "Greek Salad",
      description:
        "Fresh salad with tomatoes, cucumbers, olives, and feta cheese.",
      price: 9.0,
      image: greekSalad,
    },
    {
      id: 3,
      category: "Desserts",
      name: "Lemon Cake",
      description: "Light and fluffy lemon sponge with creamy frosting.",
      price: 5.0,
      image: lemonCake,
    },
    {
      id: 4,
      category: "Drinks",
      name: "Fresh Lemonade",
      description: "Refreshing homemade lemonade with mint and honey.",
      price: 3.5,
      image: lemonade,
    },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item, index) => index !== id));
  };

  const filteredItems =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="order-page container">
      <div className="order-hero">
        <h1>Order Online</h1>
        <p>
          Enjoy Little Lemon's authentic Mediterranean cuisine from the comfort
          of your home.
        </p>
      </div>

      <div className="filter-buttons">
        {["All", "Starters", "Main Dishes", "Desserts", "Drinks"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="order-content">
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} className="menu-img" />
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-footer">
                  <span className="menu-price">${item.price.toFixed(2)}</span>
                  <button className="add-btn" onClick={() => addToCart(item)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="cart-panel">
          <h2>Your Order</h2>
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    <span>{item.name}</span>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(index)}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <strong>Total:</strong> ${totalPrice.toFixed(2)}
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}

export default OrderOnlinePage;
