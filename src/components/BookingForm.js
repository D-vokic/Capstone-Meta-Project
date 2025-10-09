// import React, { useState } from "react";
// import "./BookingForm.css";

// function BookingForm({ availableTimes, dispatch, onDateChange, submitForm }) {
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [guests, setGuests] = useState(1);
//   const [occasion, setOccasion] = useState("");

//   const handleDateChange = (e) => {
//     const selectedDate = e.target.value;
//     setDate(selectedDate);
//     onDateChange(selectedDate);
//     dispatch({ type: "UPDATE_TIMES", date: selectedDate });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       date,
//       time,
//       guests,
//       occasion,
//     };
//     console.log("📤 Form submitted:", formData);
//     submitForm(formData);
//   };

//   return (
//     <form className="booking-form" onSubmit={handleSubmit}>
//       <label htmlFor="res-date">Choose date</label>
//       <input
//         type="date"
//         id="res-date"
//         value={date}
//         onChange={handleDateChange}
//         required
//       />

//       <label htmlFor="res-time">Choose time</label>
//       <select
//         id="res-time"
//         value={time}
//         onChange={(e) => setTime(e.target.value)}
//         required
//       >
//         {availableTimes && availableTimes.length > 0 ? (
//           availableTimes.map((t) => (
//             <option key={t} value={t}>
//               {t}
//             </option>
//           ))
//         ) : (
//           <option value="">No available times</option>
//         )}
//       </select>

//       <label htmlFor="guests">Number of guests</label>
//       <input
//         type="number"
//         id="guests"
//         min="1"
//         max="10"
//         value={guests}
//         onChange={(e) => setGuests(e.target.value)}
//         required
//       />

//       <label htmlFor="occasion">Occasion</label>
//       <select
//         id="occasion"
//         value={occasion}
//         onChange={(e) => setOccasion(e.target.value)}
//         required
//       >
//         <option value="">Select occasion</option>
//         <option value="Birthday">Birthday</option>
//         <option value="Anniversary">Anniversary</option>
//       </select>

//       <input type="submit" value="Make Your Reservation" />
//     </form>
//   );
// }

// export default BookingForm;

import React, { useState, useEffect } from "react";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, onDateChange, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isValid, setIsValid] = useState(false); // ✅ React validation state
  const [errors, setErrors] = useState({}); // ✅ error messages for inputs

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, time, guests, occasion]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    onDateChange(selectedDate);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (isValid) {
      const formData = { date, time, guests, occasion };
      console.log("📤 Form submitted:", formData);
      submitForm(formData);
    } else {
      console.warn("⚠️ Form invalid — cannot submit");
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        min={today}
      />
      {errors.date && <span className="error-message">{errors.date}</span>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
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
      {errors.time && <span className="error-message">{errors.time}</span>}

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
      />
      {errors.guests && <span className="error-message">{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Other">Other</option>
      </select>
      {errors.occasion && (
        <span className="error-message">{errors.occasion}</span>
      )}

      <input
        type="submit"
        value="Make Your Reservation"
        disabled={!isValid} // ✅ disabled until form passes validation
        className={!isValid ? "disabled-btn" : ""}
      />
    </form>
  );
}

export default BookingForm;
