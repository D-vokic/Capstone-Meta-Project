// import React, { useState } from "react";
// import "./ReservationsPage.css";

// function Reservations() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     date: "",
//     time: "",
//     guests: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `Reservation confirmed for ${formData.name} on ${formData.date} at ${formData.time}.`
//     );
//     setFormData({
//       name: "",
//       email: "",
//       date: "",
//       time: "",
//       guests: "",
//       message: "",
//     });
//   };

//   return (
//     <section className="reservations-page container">
//       <div className="reservations-header">
//         <h1>Reserve a Table</h1>
//         <p>
//           Experience authentic Mediterranean flavors in a cozy and friendly
//           atmosphere. Book your table now and enjoy your Little Lemon moment!
//         </p>
//       </div>

//       <form className="reservations-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Full Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="date">Date</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="time">Time</label>
//             <input
//               type="time"
//               id="time"
//               name="time"
//               value={formData.time}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="guests">Guests</label>
//             <input
//               type="number"
//               id="guests"
//               name="guests"
//               min="1"
//               max="12"
//               value={formData.guests}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="message">Special Requests (optional)</label>
//           <textarea
//             id="message"
//             name="message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Any allergies, preferences, or special requests?"
//           ></textarea>
//         </div>

//         <button type="submit" className="reserve-btn">
//           Reserve a Table
//         </button>
//       </form>
//     </section>
//   );
// }

// export default Reservations;

// import React, { useState } from "react";
// import "./ReservationsPage.css";
// import restaurantInterior from "../images/restaurant-interior.png";

// function ReservationsPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     guests: "",
//     occasion: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `Thank you ${formData.name}! Your reservation for ${formData.guests} guests on ${formData.date} at ${formData.time} has been received.`
//     );
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       date: "",
//       time: "",
//       guests: "",
//       occasion: "",
//     });
//   };

//   return (
//     <section
//       className="reservations-page container"
//       style={{ backgroundImage: `url(${restaurantInterior})` }}
//     >
//       <div className="reservations-overlay">
//         <div className="reservations-text">
//           <h1>Experience the perfect balance of tradition and luxury.</h1>
//           <p>
//             At Little Lemon, we take great pride in providing our customers with
//             the greatest luxurious experience with a touch of <em>tradition</em>
//             .
//           </p>
//           <p>Book a table with us to share in this experience.</p>
//         </div>

//         <form className="reservations-form" onSubmit={handleSubmit}>
//           <h2>Reserve a Table</h2>
//           <p>
//             Please fill in and submit the form to book your reservation at
//             Little Lemon.
//           </p>

//           <div className="form-group">
//             <label htmlFor="name">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Arija Konstantin"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="text@email.com"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="phone">Telephone</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="000 439 000 000"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="occasion">Occasion (optional)</label>
//             <select
//               id="occasion"
//               name="occasion"
//               value={formData.occasion}
//               onChange={handleChange}
//             >
//               <option value="">Select occasion</option>
//               <option value="Birthday">Birthday</option>
//               <option value="Engagement">Engagement</option>
//               <option value="Anniversary">Anniversary</option>
//             </select>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="guests">Guests</label>
//               <input
//                 type="number"
//                 id="guests"
//                 name="guests"
//                 min="1"
//                 max="12"
//                 value={formData.guests}
//                 onChange={handleChange}
//                 placeholder="2"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="date">Date</label>
//               <input
//                 type="date"
//                 id="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="time">Time</label>
//               <input
//                 type="time"
//                 id="time"
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <button type="submit" className="reserve-btn">
//             Reserve
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ReservationsPage;

import React, { useState } from "react";
import "./ReservationsPage.css";
import restaurantInterior from "../images/restaurant-interior.png";

function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.name}! Your reservation for ${formData.guests} guests on ${formData.date} at ${formData.time} has been received.`
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      message: "",
    });
  };

  return (
    <section
      className="reservations-page container"
      style={{ backgroundImage: `url(${restaurantInterior})` }}
    >
      <div className="reservations-overlay">
        <div className="reservations-text">
          <h1>Experience the perfect balance of tradition and luxury.</h1>
          <p>
            At Little Lemon, we take great pride in providing our customers with
            the greatest luxurious experience with a touch of <em>tradition</em>
            .
          </p>
          <p>Book a table with us to share in this experience.</p>
        </div>

        <form className="reservations-form" onSubmit={handleSubmit}>
          <h2>Reserve a Table</h2>
          <p>
            Please fill in and submit the form to book your reservation at
            Little Lemon.
          </p>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Arija Konstantin"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="someone@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telephone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="000 85 023 0000"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion (optional)</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="">Select occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Engagement">Engagement</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests">Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="12"
                value={formData.guests}
                onChange={handleChange}
                placeholder="2"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Special Requests (optional)</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any allergies, preferences, or special requests?"
            ></textarea>
          </div>

          <button type="submit" className="reserve-btn">
            Reserve
          </button>
        </form>
      </div>
    </section>
  );
}

export default ReservationsPage;
