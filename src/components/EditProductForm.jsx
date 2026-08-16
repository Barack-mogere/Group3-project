import { useEffect, useState } from "react";

function EditProductForm({ watch, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    description: "",
    origin: "",
    price: "",
    image: "",
  });

  const [error, setError] = useState({});

  useEffect(() => {
    if (watch) {
      setFormData({
        name: watch.name,
        brand: watch.brand,
        description: watch.description,
        origin: watch.origin,
        price: watch.price,
        image: watch.image,
      });
    }
  }, [watch]);

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

    const updatedWatch = {
      ...formData,
      price: Number(formData.price),
    };

    try {
      await onSave(updatedWatch);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Edit Watch</h2>

      {error && <p className="form-error">{error}</p>}

      <div className="form-group">
        <label htmlFor="edit-name">Watch Name:</label>
        <input
          type="text"
          id="edit-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="edit-brand">Brand:</label>
        <input
          type="text"
          id="edit-brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="edit-description">Description:</label>
        <textarea
          type="text"
          id="edit-description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="edit-origin">Origin:</label>
        <textarea
          id="edit-origin"
          type="text"
          name="origin"
          value={formData.origin}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="edit-price">Price:</label>
        <input
          type="number"
          id="edit-price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="0"
        />
      </div>

      <div className="form-group">
        <label htmlFor="edit-image">Image URL:</label>
        <input
          type="url"
          id="edit-image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="edit-image">Image URL:</label>
        <input
          type="text"
          id="edit-image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-button">
        Save Changes
      </button>

      <button type="button" className="cancel-button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default EditProductForm;
