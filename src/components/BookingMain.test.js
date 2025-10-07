import { render, screen } from "@testing-library/react";

jest.mock("react-router-dom");

import App from "./App";

test("renders the Little Lemon logo in the navbar", () => {
  render(<App />);
  const logoElement = screen.getByAltText(/little lemon/i);
  expect(logoElement).toBeInTheDocument();
});
