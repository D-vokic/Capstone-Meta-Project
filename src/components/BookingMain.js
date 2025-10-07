import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Funkcija koja ažurira sate u zavisnosti od datuma (za sada statično)
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return initializeTimes();
    default:
      return state;
  }
};

function BookingMain() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleDateChange = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  return (
    <main className="booking-main">
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onDateChange={handleDateChange}
      />
    </main>
  );
}

export default BookingMain;
