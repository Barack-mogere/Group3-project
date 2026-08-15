import { useEffect, useState } from "react";
import { createWatch, getWatches, updateWatch } from "../services/api";
import ProductForm from "../components/ProductForm";
import EditProductForm from "../components/EditProductForm";

function AddProduct() {
  const [watches, setWatches] = useState([]);
  const [editingWatch, setEditingWatch] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWatches() {
      try {
        const data = await getWatches();
        setWatches(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchWatches();
  }, []);

  async function handleAddWatch(watch) {
    const newWatch = await createWatch(watch);

    setWatches((previousWatches) => [...previousWatches, newWatch]);

    setSuccessMessage("Watch added successfully!");
  }

  async function handleUpdateWatch(updates) {
    if (!editingWatch) {
      return;
    }

    const updatedWatch = await updateWatch(editingWatch.id, updates);

    setWatches((previousWatches) =>
      previousWatches.map((watch) =>
        watch.id === updatedWatch.id ? updatedWatch : watch,
      ),
    );

    setEditingWatch(null);
    setSuccessMessage("Watch updated successfully!");
  }

  return (
    <main className="admin-page">
      <h1>Administrator Portal</h1>

      {successMessage && <p className="success-message">{successMessage}</p>}

      {error && <p className="form-error">{error}</p>}

      <section className="admin-section">
        <ProductForm onAddWatch={handleAddWatch} />
      </section>

      <section className="admin-watches">
        <h2>Manage Watches</h2>

        {watches.map((watch) => (
          <article key={watch.id} className="admin-watch">
            <div>
              <h3>{watch.name}</h3>

              <p>{watch.brand}</p>

              <p>Ksh {watch.price.toLocaleString()}</p>
            </div>

            <button
              type="button"
              className="edit-button"
              onClick={() => setEditingWatch(watch)}
            >
              Edit
            </button>
          </article>
        ))}
      </section>

      {editingWatch && (
        <section className="edit-section">
          <EditProductForm
            watch={editingWatch}
            onSave={handleUpdateWatch}
            onCancel={() => setEditingWatch(null)}
          />
        </section>
      )}
    </main>
  );
}

export default AddProduct;
