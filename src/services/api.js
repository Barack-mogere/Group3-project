const API_URL = "http://localhost:3000";

export async function getWatches() {
  const response = await fetch(`${API_URL}/watches`);

  if (!response.ok) {
    throw new Error("Failed to fetch watches");
  }

  return response.json();
}
