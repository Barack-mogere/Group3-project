const API_URL = "http://localhost:3000";

export async function getWatches() {
  const response = await fetch(`${API_URL}/watches`);

  if (!response.ok) {
    throw new Error("Failed to fetch watches");
  }

  return response.json();
}

export async function getWatchById(id) {
  const response = await fetch(`${API_URL}/watches/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch watch");
  }

  return response.json();
}

export async function createWatch(watch) {
  const response = await fetch(`${API_URL}/watches`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(watch),
  });

  if (!response.ok) {
    throw new Error("Failed to create watch");
  }

  return response.json();
}

export async function updateWatch(id, updates) {
  const response = await fetch(`${API_URL}/watches/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update watch");
  }

  return response.json();
}
