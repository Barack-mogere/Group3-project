import { Link } from "react-router-dom";

function ProductCard({ watch }) {
  return (
    <article className="product-card">
      <img src={watch.image} alt={watch.name} className="product-image" />

      <div className="product-info">
        <h2>{watch.name}</h2>

        <p className="product-brand">{watch.brand}</p>

        <p>{watch.description}</p>

        <p className="product-origin">{watch.origin}</p>

        <p className="product-price">Ksh {watch.price.toLocaleString()}</p>

        <Link to={`/watch/${watch.id}`} className="details-button">
          View Details
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;