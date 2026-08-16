import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const testWatch = {
  id: 1,
  name: "Seiko 5 Sports",
  brand: "Seiko",
  description: "Automatic watch with a classic design.",
  origin: "Japan",
  price: 28500,
  image: "https://example.com/seiko.jpg",
};

test("renders watch information correctly", () => {
  render(
    <BrowserRouter>
      <ProductCard watch={testWatch} />
    </BrowserRouter>,
  );

  expect(screen.getByText("Seiko 5 Sports")).toBeInTheDocument();
  expect(screen.getByText("Seiko")).toBeInTheDocument();
  expect(screen.getByText("Japan")).toBeInTheDocument();
  expect(screen.getByText("Ksh 28,500")).toBeInTheDocument();
});

test("renders a view details link", () => {
  render(
    <BrowserRouter>
      <ProductCard watch={testWatch} />
    </BrowserRouter>,
  );

  const detailsLink = screen.getByRole("link", {
    name: /view details/i,
  });

  expect(detailsLink).toBeInTheDocument();
  expect(detailsLink).toHaveAttribute("href", "/watch/1");
});
