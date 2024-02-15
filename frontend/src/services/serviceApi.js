export async function getProfesions() {
  try {
    const response = await fetch(`http://localhost:3001/api/profesions`);
    const data = await response.json();

    if (response.status !== 200) {
      response.status(400).send("Valores invalidos");
    }
    return data;
  } catch (error) {
    response.status(500).send(error);
  }
}
export async function getCandidates() {
  try {
    const response = await fetch(`http://localhost:3001/api/candidates`);
    const data = await response.json();

    if (response.status !== 200) {
      response.status(400).send("Valores invalidos");
    }
    return data;
  } catch (error) {
    response.status(500).send(error);
  }
}
