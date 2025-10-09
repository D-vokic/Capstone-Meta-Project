import React, { useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api";
import { storage } from "../utils/storage";

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

function BookingMain() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    console.log("📤 Submitting form:", formData);

    storage.set("lastBooking", formData);

    const success = submitAPI(formData);
    if (success) {
      console.log("✅ Booking confirmed!");
      navigate("/confirmed");
    } else {
      console.error("❌ Booking failed.");
    }
  };

  useEffect(() => {
    const today = new Date();
    dispatch({ type: "UPDATE_TIMES", date: today });

    const savedBooking = storage.get("lastBooking");
    if (savedBooking) {
      console.log("🗂️ Found previous booking:", savedBooking);
    }
  }, []);

  const handleDateChange = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  return (
    <main className="booking-main">
      <section className="booking-section container">
        <h2 className="booking-title">Reserve a Table</h2>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          onDateChange={handleDateChange}
          submitForm={submitForm}
        />
      </section>
    </main>
  );
}

export default BookingMain;
export { initializeTimes, updateTimes };
