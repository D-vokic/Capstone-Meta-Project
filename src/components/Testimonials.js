// import "./Testimonials.css";

// function Testimonials() {
//   const testimonials = [
//     {
//       id: 1,
//       name: "John Doe",
//       rating: "⭐⭐⭐⭐⭐",
//       text: "The food was absolutely amazing and the service was fantastic!",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       rating: "⭐⭐⭐⭐",
//       text: "I really enjoyed my dinner here. Highly recommend the bruschetta.",
//     },
//     {
//       id: 3,
//       name: "Alex Johnson",
//       rating: "⭐⭐⭐⭐⭐",
//       text: "A hidden gem! Cozy atmosphere and delicious food.",
//     },
//     {
//       id: 4,
//       name: "Maria Garcia",
//       rating: "⭐⭐⭐⭐",
//       text: "The desserts are to die for. I’ll definitely come back again!",
//     },
//   ];

//   return (
//     <section className="testimonials container">
//       <h2>Testimonials</h2>
//       <div className="testimonials-grid">
//         {testimonials.map((review) => (
//           <div key={review.id} className="testimonial-card">
//             <div className="testimonial-rating">{review.rating}</div>
//             <h3 className="testimonial-name">{review.name}</h3>
//             <p className="testimonial-text">{review.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Testimonials;

import "./Testimonials.css";
import arija from "../images/arija.jpg";
import john from "../images/john.jpg";
import jane from "../images/jane.jpg";
import mark from "../images/mark.jpg";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Arija Konstantin",
      rating: "⭐⭐⭐⭐⭐",
      text: "The food was absolutely amazing and the service was fantastic!",
      image: arija,
    },
    {
      id: 2,
      name: "John Doe",
      rating: "⭐⭐⭐⭐",
      text: "I really enjoyed my dinner here. Highly recommend the bruschetta.",
      image: john,
    },
    {
      id: 3,
      name: "Jane Smith",
      rating: "⭐⭐⭐⭐⭐",
      text: "A hidden gem! Cozy atmosphere and delicious food.",
      image: jane,
    },
    {
      id: 4,
      name: "Mark Johnson",
      rating: "⭐⭐⭐⭐",
      text: "The desserts are to die for. I’ll definitely come back again!",
      image: mark,
    },
  ];

  return (
    <section className="testimonials container">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((review) => (
          <div key={review.id} className="testimonial-card">
            <div className="testimonial-rating">{review.rating}</div>
            <img
              src={review.image}
              alt={review.name}
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{review.name}</h3>
            <p className="testimonial-text">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
