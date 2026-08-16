import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

test("renders the navigation links", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Shop")).toBeInTheDocument();
  expect(screen.getByText("Admin Portal")).toBeInTheDocument();
});
