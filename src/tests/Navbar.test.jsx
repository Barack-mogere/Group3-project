import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

test("renders the watch store navigation", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  expect(screen.getByText("TIMELESS")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Watches")).toBeInTheDocument();
  expect(screen.getByText("Admin")).toBeInTheDocument();
});
