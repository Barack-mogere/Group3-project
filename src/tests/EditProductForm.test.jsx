import { render, screen, fireEvent } from "@testing-library/react";
import EditProductForm from "../components/EditProductForm";

const testWatch = {
  id: 1,
  name: "Seiko 5 Sports",
  brand: "Seiko",
  description: "Automatic sports watch.",
  origin: "Japan",
  price: 28500,
  image: "https://example.com/seiko.jpg",
};

test("renders the existing watch information", () => {
  render(
    <EditProductForm watch={testWatch} onSave={() => {}} onCancel={() => {}} />,
  );

  expect(screen.getByLabelText("Watch Name")).toHaveValue("Seiko 5 Sports");
  expect(screen.getByLabelText("Brand")).toHaveValue("Seiko");
  expect(screen.getByLabelText("Description")).toHaveValue(
    "Automatic sports watch.",
  );
  expect(screen.getByLabelText("Origin")).toHaveValue("Japan");
  expect(screen.getByLabelText("Price")).toHaveValue(28500);
  expect(screen.getByLabelText("Image URL")).toHaveValue(
    "https://example.com/seiko.jpg",
  );
});

test("submits updated watch information", () => {
  const handleSave = vi.fn();

  render(
    <EditProductForm
      watch={testWatch}
      onSave={handleSave}
      onCancel={() => {}}
    />,
  );

  const priceInput = screen.getByLabelText("Price");

  fireEvent.change(priceInput, {
    target: { value: "32000" },
  });

  fireEvent.click(screen.getByRole("button", { name: /save changes/i }));

  expect(handleSave).toHaveBeenCalledWith({
    name: "Seiko 5 Sports",
    brand: "Seiko",
    description: "Automatic sports watch.",
    origin: "Japan",
    price: 32000,
    image: "https://example.com/seiko.jpg",
  });
});

test("calls onCancel when cancel is clicked", () => {
  const handleCancel = vi.fn();

  render(
    <EditProductForm
      watch={testWatch}
      onSave={() => {}}
      onCancel={handleCancel}
    />,
  );

  fireEvent.click(screen.getByRole("button", { name: /cancel/i }));

  expect(handleCancel).toHaveBeenCalled();
});
