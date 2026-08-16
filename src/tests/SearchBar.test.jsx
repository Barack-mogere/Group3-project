import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("renders the search input", () => {
  render(<SearchBar searchTerm="" onSearchChange={() => {}} />);

  expect(screen.getByPlaceholderText("Search watches...")).toBeInTheDocument();
});

test("updates the search term when the user types", () => {
  const handleSearchChange = vi.fn();

  render(<SearchBar searchTerm="" onSearchChange={handleSearchChange} />);

  const searchInput = screen.getByPlaceholderText("Search watches...");

  fireEvent.change(searchInput, {
    target: { value: "Seiko" },
  });

  expect(handleSearchChange).toHaveBeenCalledWith("Seiko");
});
