import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, onDateChange }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    onDateChange(selectedDate); // obaveštava BookingMain da je datum promenjen
    dispatch({ type: "UPDATE_TIMES", date: selectedDate }); // ažurira sate
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      date,
      time,
      guests,
      occasion,
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes && availableTimes.length > 0 ? (
          availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))
        ) : (
          <option value="">No available times</option>
        )}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        placeholder="1"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="">Select Occasion</option>
        <option value="Wedding">Wedding</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
}

export default BookingForm;
