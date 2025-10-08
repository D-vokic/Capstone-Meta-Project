import React from "react";
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  return (
    <section className="confirmation-page">
      <div className="confirmation-container">
        <h1>Booking Confirmed!</h1>
        <p>
          Thank you for your reservation at <strong>Little Lemon</strong>.
        </p>
        <p>We’re looking forward to serving you!</p>

        <a href="/" className="btn-home">
          Back to Home
        </a>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
