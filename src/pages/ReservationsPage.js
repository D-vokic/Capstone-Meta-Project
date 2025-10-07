import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ReservationsPage.css";

function ReservationsPage() {
  return (
    <>
      <Navbar theme="dark" />

      <main className="reservations-page">
        <section className="hero-section">
          <div className="hero-overlay">
            <h1>Experience the perfect balance of tradition and luxury.</h1>
            <p>
              At Little Lemon, we take great pride in providing our customers
              with the greatest luxurious experience with a touch of{" "}
              <em>tradition</em>.
            </p>
            <p>
              Book a table with us to share in this unforgettable experience.
            </p>
          </div>
        </section>

        <section className="form-section">
          <article className="form-container">
            <h2>Reserve a Table</h2>
            <p>
              Please fill in and submit the form to book your reservation at
              Little Lemon.
            </p>

            <form className="reservation-form">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                required
              />

              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="date">Choose date</label>
              <input type="date" id="date" name="date" required />

              <label htmlFor="time">Choose time</label>
              <select id="time" name="time" required>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>

              <label htmlFor="guests">Number of guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                placeholder="1"
                min="1"
                max="10"
                required
              />

              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" name="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Business Dinner</option>
              </select>

              <button type="submit" className="submit-btn">
                Make Your Reservation
              </button>
            </form>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ReservationsPage;
