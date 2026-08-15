import { useId, useState } from "react";

function ProductForm({ onAddWatch }) {
  const nameId = useId();
  const brandId = useId();
  const descriptionId = useId();
  const originId = useId();
  const priceId = useId();
  const imageId = useId();

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    description: "",
    origin: "",
    price: "",
    image: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
  event.preventDefault();

  if (
    !formData.name ||
    !formData.brand ||
    !formData.description ||
    !formData.origin ||
    !formData.price ||
    !formData.image
  ) {
    setError("Please fill in all fields.");
    return;
  }

  setError("");
  const newWatch = {
  ...formData,
  price: Number(formData.price),
};

try {
  await onAddWatch(newWatch);

  setFormData({
    name: "",
    brand: "",
    description: "",
    origin: "",
    price: "",
    image: "",
  });
} catch (error) {
  setError(error.message);
}
}

   return (
  <form className="product-form" onSubmit={handleSubmit}>
    <h1>Add New Watch</h1>

    {error && <p className="form-error">{error}</p>}

    <div className="form-group">
      <label htmlFor={nameId}>Watch Name</label>
      <input
        id={nameId}
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="e.g. Seiko 5 Sports"
      />
    </div>

    <div className="form-group">
      <label htmlFor={brandId}>Brand</label>
      <input
        id={brandId}
        type="text"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        placeholder="e.g. Seiko"
      />
    </div>

    <div className="form-group">
      <label htmlFor={descriptionId}>Description</label>
      <textarea
        id={descriptionId}
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Describe the watch"
        rows="4"
      />
    </div>

    <div className="form-group">
      <label htmlFor={originId}>Origin</label>
      <input
        id={originId}
        type="text"
        name="origin"
        value={formData.origin}
        onChange={handleChange}
        placeholder="e.g. Japan"
      />
    </div>

    <div className="form-group">
      <label htmlFor={priceId}>Price</label>
      <input
        id={priceId}
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="e.g. 28500"
        min="0"
      />
    </div>

    <div className="form-group">
      <label htmlFor={imageId}>Image URL</label>
      <input
        id={imageId}
        type="url"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="https://example.com/watch.jpg"
      />
    </div>

    <button type="submit" className="submit-button">
      Add Watch
    </button>
  </form>
);
export default ProductForm;