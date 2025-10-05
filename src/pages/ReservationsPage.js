import React, { useState } from "react";
import "./ReservationsPage.css";

function Reservations() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reservation confirmed for ${formData.name} on ${formData.date} at ${formData.time}.`
    );
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
  };

  return (
    <section className="reservations-page container">
      <div className="reservations-header">
        <h1>Reserve a Table</h1>
        <p>
          Experience authentic Mediterranean flavors in a cozy and friendly
          atmosphere. Book your table now and enjoy your Little Lemon moment!
        </p>
      </div>

      <form className="reservations-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="guests">Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="12"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Special Requests (optional)</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any allergies, preferences, or special requests?"
          ></textarea>
        </div>

        <button type="submit" className="reserve-btn">
          Reserve a Table
        </button>
      </form>
    </section>
  );
}

export default Reservations;
