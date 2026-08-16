import { render, screen, fireEvent } from "@testing-library/react";
import ProductForm from "../components/ProductForm";

test("renders the add watch form", () => {
  render(<ProductForm onAddWatch={() => {}} />);

  expect(screen.getByLabelText("Watch Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Brand")).toBeInTheDocument();
  expect(screen.getByLabelText("Description")).toBeInTheDocument();
  expect(screen.getByLabelText("Origin")).toBeInTheDocument();
  expect(screen.getByLabelText("Price")).toBeInTheDocument();
  expect(screen.getByLabelText("Image URL")).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: /add watch/i }),
  ).toBeInTheDocument();
});

test("submits a new watch", () => {
  const handleAddWatch = vi.fn();

  render(<ProductForm onAddWatch={handleAddWatch} />);

  fireEvent.change(screen.getByLabelText("Watch Name"), {
    target: { value: "Seiko 5 Sports" },
  });

  fireEvent.change(screen.getByLabelText("Brand"), {
    target: { value: "Seiko" },
  });

  fireEvent.change(screen.getByLabelText("Description"), {
    target: { value: "Automatic sports watch." },
  });

  fireEvent.change(screen.getByLabelText("Origin"), {
    target: { value: "Japan" },
  });

  fireEvent.change(screen.getByLabelText("Price"), {
    target: { value: "28500" },
  });

  fireEvent.change(screen.getByLabelText("Image URL"), {
    target: { value: "https://example.com/seiko.jpg" },
  });

  fireEvent.click(screen.getByRole("button", { name: /add watch/i }));

  expect(handleAddWatch).toHaveBeenCalledWith({
    name: "Seiko 5 Sports",
    brand: "Seiko",
    description: "Automatic sports watch.",
    origin: "Japan",
    price: 28500,
    image: "https://example.com/seiko.jpg",
  });
});
