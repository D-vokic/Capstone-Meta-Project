import React from "react";
import BookingForm from "../components/BookingForm";
import "./BookingPage.css";
import Footer from "../components/Footer";

function BookingPage() {
  return (
    <>
      <main className="booking-page">
        <section className="booking-intro">
          <h1>Reserve Your Table</h1>
          <p>Fill out the form below to make a reservation at Little Lemon.</p>
        </section>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
