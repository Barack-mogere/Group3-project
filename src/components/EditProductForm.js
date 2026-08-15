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