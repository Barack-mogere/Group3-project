import { useEffect, useState } from "react";
import { getWatches } from "../services/api";
import ProductList from "../components/ProductList";

function Products() {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWatches() {
      try {
        const data = await getWatches();
        setWatches(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWatches();
  }, []);

  if (loading) {
    return <p>Loading watches...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>Our Watches</h1>

      <p>Browse our collection of premium watches.</p>

      <p>We have {watches.length} watches available.</p>
      <ProductList watches={watches} />
    </main>
  );
}

export default Products;
