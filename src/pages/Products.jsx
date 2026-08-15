import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import useWatches from "../hooks/useWatches";

function Products() {
  const { watches, loading, error } = useWatches();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredWatches = watches.filter((watch) => {
    const search = searchTerm.toLowerCase();

    return (
      watch.name.toLowerCase().includes(search) ||
      watch.brand.toLowerCase().includes(search) ||
      watch.origin.toLowerCase().includes(search)
    );
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p className="form-error">{error}</p>;
  }

  return (
    <main className="products-page">
      <h1>Our Watches</h1>

      <p className="products-description">
        Browse our collection of premium watches.
      </p>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <p className="watch-count">
        We have {filteredWatches.length} watches available
      </p>

      <ProductList watches={filteredWatches} />
    </main>
  );
}

export default Products;
