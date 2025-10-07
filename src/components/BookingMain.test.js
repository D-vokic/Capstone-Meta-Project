import { initializeTimes, updateTimes } from "./BookingMain";

describe("BookingMain reducer functions", () => {
  test("initializeTimes should return correct expected values", () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });

  test("updateTimes should return the same state provided", () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const action = { type: "UPDATE", payload: "2025-10-05" };
    const result = updateTimes(currentState, action);
    expect(result).toEqual(currentState);
  });
});
