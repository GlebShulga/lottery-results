export async function getLastResults() {
  const response = await fetch("http://localhost:8000/bonoloto", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to check numbers: ${response.statusText}`);
  }

  const resp = await response.json();
  const { error, results } = resp;

  if (error) {
    throw new Error(`Error from server: ${error}`);
  }

  return { results };
}
