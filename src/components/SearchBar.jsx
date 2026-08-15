import { useEffect, useId, useRef } from "react";

function searchBar({ searchTerm, onSearchChange }) {
    const searchId = useId();
    const searchRef = useRef(null);

    useEffect(() => {
        searchRef.current.focus();
    }, []);

    // return (
        // <div className="search-container">
            // <
        // </div>
}