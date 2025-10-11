import React, { useState, useEffect } from "react";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, onDateChange, submitForm }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const validateForm = (values) => {
    const newErrors = {};
    if (!values.fullName.trim())
      newErrors.fullName = "Please enter your full name.";
    if (!values.email.trim())
      newErrors.email = "Please enter your email address.";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = "Please enter a valid email address.";
    if (!values.date) newErrors.date = "Please select a date.";
    else if (values.date < today)
      newErrors.date = "Date cannot be in the past.";
    if (!values.time) newErrors.time = "Please select a time.";
    if (!values.guests || values.guests < 1 || values.guests > 10)
      newErrors.guests = "Guests must be between 1 and 10.";
    if (!values.occasion) newErrors.occasion = "Please select an occasion.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const valid = validateForm({
      fullName,
      email,
      date,
      time,
      guests,
      occasion,
    });
    setIsValid(valid);
  }, [fullName, email, date, time, guests, occasion]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    onDateChange(selectedDate);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = validateForm({
      fullName,
      email,
      date,
      time,
      guests,
      occasion,
    });
    if (valid) {
      setIsSubmitting(true);
      setStatusMessage("Submitting your reservation...");
      const formData = { fullName, email, date, time, guests, occasion };
      await new Promise((resolve) => setTimeout(resolve, 1500));
      submitForm(formData);
      setIsSubmitting(false);
      setStatusMessage("Reservation successfully submitted!");
    }
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Reservation form"
    >
      <fieldset>
        <legend>Your Booking Information</legend>

        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          aria-describedby={errors.fullName ? "name-error" : undefined}
        />
        {errors.fullName && (
          <span id="name-error" className="error-message">
            {errors.fullName}
          </span>
        )}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <span id="email-error" className="error-message">
            {errors.email}
          </span>
        )}

        <label htmlFor="res-date">Select your date</label>
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

        <label htmlFor="res-time">Select your time</label>
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

        <label htmlFor="guests">How many guests?</label>
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

        <label htmlFor="occasion">What’s the occasion?</label>
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
          {isSubmitting ? "Submitting..." : "Confirm Reservation"}
        </button>

        {statusMessage && (
          <p
            className={`status-message ${isSubmitting ? "loading" : "success"}`}
          >
            {statusMessage}
          </p>
        )}
      </fieldset>
    </form>
  );
}

export default BookingForm;
