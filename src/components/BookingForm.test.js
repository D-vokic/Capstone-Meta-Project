import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm HTML5 validation", () => {
  const mockProps = {
    availableTimes: ["17:00", "18:00"],
    dispatch: jest.fn(),
    onDateChange: jest.fn(),
    submitForm: jest.fn(),
  };

  beforeEach(() => {
    render(<BookingForm {...mockProps} />);
  });

  test("date input has required and min attributes", () => {
    const dateInput = screen.getByLabelText(/select your date/i);
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("min");
  });

  test("time select has required attribute", () => {
    const timeSelect = screen.getByLabelText(/select your time/i);
    expect(timeSelect).toBeRequired();
  });

  test("guests input has required, min and max attributes", () => {
    const guestsInput = screen.getByLabelText(/how many guests/i);
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("occasion select has required attribute", () => {
    const occasionSelect = screen.getByLabelText(/what’s the occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});

describe("BookingForm React validation logic", () => {
  const mockProps = {
    availableTimes: ["17:00", "18:00"],
    dispatch: jest.fn(),
    onDateChange: jest.fn(),
    submitForm: jest.fn(),
  };

  const setup = () => render(<BookingForm {...mockProps} />);

  test("disables submit button when fields are invalid", () => {
    setup();
    const submitButton = screen.getByRole("button", {
      name: /submit reservation form/i,
    });
    expect(submitButton).toBeDisabled();
  });

  test("shows error messages for invalid inputs", () => {
    setup();
    const guestsInput = screen.getByLabelText(/how many guests/i);
    fireEvent.change(guestsInput, { target: { value: 0 } });
    const errorMsg = screen.getByText(/guests must be between 1 and 10/i);
    expect(errorMsg).toBeInTheDocument();
  });

  test("enables submit button when all fields are valid", async () => {
    setup();

    const fullNameInput = screen.getByLabelText(/full name/i);
    fireEvent.change(fullNameInput, { target: { value: "John Doe" } });

    const emailInput = screen.getByLabelText(/email address/i);
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });

    const dateInput = screen.getByLabelText(/select your date/i);
    const today = new Date().toISOString().split("T")[0];
    fireEvent.change(dateInput, { target: { value: today } });

    const timeSelect = screen.getByLabelText(/select your time/i);
    fireEvent.change(timeSelect, { target: { value: "18:00" } });

    const guestsInput = screen.getByLabelText(/how many guests/i);
    fireEvent.change(guestsInput, { target: { value: 4 } });

    const occasionSelect = screen.getByLabelText(/what’s the occasion/i);
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    await waitFor(() => {
      const submitButton = screen.getByRole("button", {
        name: /submit reservation form/i,
      });
      expect(submitButton).not.toBeDisabled();
    });
  });

  test("calls submitForm when all fields valid and submitted", async () => {
    render(<BookingForm {...mockProps} />);

    const fullNameInput = screen.getByLabelText(/full name/i);
    fireEvent.change(fullNameInput, { target: { value: "Anna Smith" } });

    const emailInput = screen.getByLabelText(/email address/i);
    fireEvent.change(emailInput, { target: { value: "anna@example.com" } });

    const dateInput = screen.getByLabelText(/select your date/i);
    const today = new Date().toISOString().split("T")[0];
    fireEvent.change(dateInput, { target: { value: today } });

    fireEvent.change(screen.getByLabelText(/select your time/i), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText(/how many guests/i), {
      target: { value: 3 },
    });
    fireEvent.change(screen.getByLabelText(/what’s the occasion/i), {
      target: { value: "Anniversary" },
    });

    const submitButton = screen.getByRole("button", {
      name: /submit reservation form/i,
    });
    fireEvent.click(submitButton);

    await waitFor(
      () => {
        expect(mockProps.submitForm).toHaveBeenCalledTimes(1);
      },
      { timeout: 2000 }
    );

    expect(mockProps.submitForm).toHaveBeenCalledWith({
      fullName: "Anna Smith",
      email: "anna@example.com",
      date: today,
      time: "17:00",
      guests: "3",
      occasion: "Anniversary",
    });
  });
});
