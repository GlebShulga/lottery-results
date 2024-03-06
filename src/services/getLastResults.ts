export async function getLastResults() {
  const apiUrl =
    (process.env.API_BASIC_URL || process.env.NEXT_PUBLIC_API_BASIC_URL) ??
    "http://localhost:8000";

  const response = await fetch(apiUrl, {
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
