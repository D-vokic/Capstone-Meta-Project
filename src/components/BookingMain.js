import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

export const updateTimes = (state, action) => {
  return state;
};

function BookingMain() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main className="booking-main">
      <section className="booking-section">
        <h1>Reserve Your Table</h1>
        <p>Fill out the form below to make a reservation at Little Lemon.</p>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </section>
    </main>
  );
}

export default BookingMain;
