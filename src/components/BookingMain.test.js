import { initializeTimes, updateTimes } from "./BookingMain";
import { fetchAPI } from "../api";

jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
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
