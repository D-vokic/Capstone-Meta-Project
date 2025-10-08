import React, { useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../api"; // Import lokalnog API-ja

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

// Reducer function to update the appointment when the date changes
// export const updateTimes = (state, action) => {
//   switch (action.type) {
//     case "UPDATE_TIMES":
//       const result = fetchAPI(new Date(action.date));
//       console.log("📅 Selected date:", action.date);
//       console.log("⏰ Available times from API:", result);
//       return result;
//     default:
//       return state;
//   }
// };

function BookingMain() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const handleDateChange = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  useEffect(() => {
    const today = new Date();
    dispatch({ type: "UPDATE_TIMES", date: today });
  }, []);

  return (
    <main className="booking-main">
      <section className="booking-section container">
        <h2 className="booking-title">Reserve a Table</h2>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          onDateChange={handleDateChange}
        />
      </section>
    </main>
  );
}

export default BookingMain;
