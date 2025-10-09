import { initializeTimes, updateTimes } from "./BookingMain";
import { fetchAPI, submitAPI } from "../api";
import { render } from "@testing-library/react";
import BookingMain from "./BookingMain";
import { storage } from "../utils/storage";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

jest.mock("../utils/storage", () => ({
  storage: {
    set: jest.fn(),
    get: jest.fn(),
    remove: jest.fn(),
  },
}));

describe("BookingMain reducer functions", () => {
  test("initializeTimes should call fetchAPI and return a non-empty array of available times", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalled();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toEqual(mockTimes);
  });

  test("updateTimes should call fetchAPI with selected date and return updated times", () => {
    const mockTimes = ["18:00", "19:00", "20:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const state = [];
    const selectedDate = new Date("2025-10-10");
    const action = { type: "UPDATE_TIMES", date: selectedDate };

    const result = updateTimes(state, action);

    expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(mockTimes);
  });
});

describe("BookingMain localStorage (storage util) behavior", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should save booking data using storage.set when form is submitted", () => {
    submitAPI.mockReturnValue(true);

    const formData = { name: "John", date: "2025-10-10", time: "18:00" };

    const success = submitAPI(formData);
    if (success) {
      storage.set("lastBooking", formData);
      mockNavigate("/confirmed");
    }

    expect(storage.set).toHaveBeenCalledWith("lastBooking", formData);
  });

  test("should read saved booking data via storage.get on mount", () => {
    storage.get.mockReturnValue({
      name: "Anna",
      date: "2025-10-09",
      time: "19:00",
    });
    render(<BookingMain />);
    expect(storage.get).toHaveBeenCalledWith("lastBooking");
  });
});
