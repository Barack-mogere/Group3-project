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