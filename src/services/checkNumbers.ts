export async function checkNumbers(selectedNumbers: number[]) {
  const response = await fetch("http://localhost:8000/bonoloto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ numbers: selectedNumbers }),
  });

  if (!response.ok) {
    throw new Error(`Failed to check numbers: ${response.statusText}`);
  }

  const resp = await response.json();
  const { error, drawResult, drawDate } = resp;

  if (error) {
    throw new Error(`Error from server: ${error}`);
  }

  return { drawResult, drawDate };
}
