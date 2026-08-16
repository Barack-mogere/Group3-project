import { useEffect, useState } from "react";
import { getWatches } from "../services/api";

function useWatches() {
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

  return {
    watches,
    setWatches,
    loading,
    error,
  };
}

export default useWatches;
