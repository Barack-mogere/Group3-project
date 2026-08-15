import { useEffect, useState } from "react";

function EditProductForm({ watch,onSave }) {
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