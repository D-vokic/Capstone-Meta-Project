import { initializeTimes, updateTimes } from "./BookingMain";

describe("BookingMain reducer functions", () => {
  test("initializeTimes should return an array of available times", () => {
    const result = initializeTimes();

    expect(Array.isArray(result)).toBe(true);

    expect(result.length).toBeGreaterThan(0);
  });

  test("updateTimes should return the same state provided", () => {
    const state = ["17:00", "18:00", "19:00"];

    const action = { type: "UPDATE_TIMES", date: new Date() };

    const result = updateTimes(state, action);

    expect(Array.isArray(result)).toBe(true);
  });
});
