import { useEffect, useId, useRef } from "react";

function SearchBar({ searchTerm, onSearchChange }) {
  const searchId = useId();
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div className="search-container">
      <label htmlFor={searchId}>Search watches</label>

      <input
        ref={searchRef}
        id={searchId}
        type="text"
        placeholder="Search watches..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
