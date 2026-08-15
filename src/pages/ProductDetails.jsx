import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getWatchById } from "../services/api";

function ProductDetails() {
  const { id } = useParams();

  const [watch, setWatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWatch() {
      try {
        const data = await getWatchById(id);
        setWatch(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWatch();
  }, [id]);

  if (loading) {
    return <p>Loading watch...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!watch) {
    return <p>Watch not found.</p>;
  }

  return (
    <main className="product-details">
      <Link to="/shop" className="back-button">
        ← Back to Shop
      </Link>

      <section className="details-container">
        <div className="details-image">
          <img src={watch.image} alt={watch.name} />
        </div>

        <div className="details-info">
          <p className="details-brand">{watch.brand}</p>

          <h1>{watch.name}</h1>

          <p className="details-description">{watch.description}</p>

          <p>
            <strong>Origin:</strong> {watch.origin}
          </p>

          <p className="details-price">Ksh {watch.price.toLocaleString()}</p>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
