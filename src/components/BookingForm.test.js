import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the 'Make Your Reservation' button", () => {
  render(<BookingForm />);
  const buttonElement = screen.getByText("Make Your Reservation");
  expect(buttonElement).toBeInTheDocument();
});
