import React, { useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api"; // ✅ LOKALNI import

// Reducer funkcije
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
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
