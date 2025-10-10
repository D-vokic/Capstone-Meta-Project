import React, { useState, useEffect } from "react";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, onDateChange, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // 👈 NEW
  const [statusMessage, setStatusMessage] = useState(""); // 👈 NEW

  const today = new Date().toISOString().split("T")[0];

  const validateForm = () => {
    const newErrors = {};
    if (!date) newErrors.date = "Please select a date.";
    else if (date < today) newErrors.date = "Date cannot be in the past.";
    if (!time) newErrors.time = "Please select a time.";
    if (!guests || guests < 1 || guests > 10)
      newErrors.guests = "Guests must be between 1 and 10.";
    if (!occasion) newErrors.occasion = "Please select an occasion.";

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    validateForm();
  }, [date, time, guests, occasion]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    onDateChange(selectedDate);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm();

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setStatusMessage("Submitting your reservation...");

      const formData = { date, time, guests, occasion };

      await new Promise((res) => setTimeout(res, 800));

      try {
        submitForm(formData);
        setStatusMessage("✅ Reservation submitted successfully!");
      } catch (error) {
        setStatusMessage("❌ Failed to submit reservation. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setStatusMessage("⚠️ Please fix the form errors before submitting.");
    }
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Reservation form"
    >
      <fieldset disabled={isSubmitting}>
        {" "}
        <legend>Reservation Details</legend>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
          min={today}
          aria-describedby={errors.date ? "date-error" : undefined}
        />
        {errors.date && (
          <span id="date-error" className="error-message">
            {errors.date}
          </span>
        )}
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-describedby={errors.time ? "time-error" : undefined}
        >
          <option value="">Select a time</option>
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
        {errors.time && (
          <span id="time-error" className="error-message">
            {errors.time}
          </span>
        )}
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
          placeholder="Enter number of guests"
          aria-describedby={errors.guests ? "guests-error" : undefined}
        />
        {errors.guests && (
          <span id="guests-error" className="error-message">
            {errors.guests}
          </span>
        )}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-describedby={errors.occasion ? "occasion-error" : undefined}
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Wedding">Wedding</option>
          <option value="Other">Other</option>
        </select>
        {errors.occasion && (
          <span id="occasion-error" className="error-message">
            {errors.occasion}
          </span>
        )}
        <button
          type="submit"
          aria-label="Submit reservation form"
          disabled={!isValid || isSubmitting}
          className={!isValid || isSubmitting ? "disabled-btn" : ""}
        >
          {isSubmitting ? "Submitting..." : "Make Your Reservation"}
        </button>
        {statusMessage && (
          <p
            className="status-message"
            role="status"
            aria-live="polite"
            style={{ marginTop: "0.5rem", color: "#495e57" }}
          >
            {statusMessage}
          </p>
        )}
      </fieldset>
    </form>
  );
}

export default BookingForm;
