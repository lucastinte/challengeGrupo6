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
export async function searchProfessions(searchTerm) {
  try {
    const response = await fetch('http://localhost:3001/api/profesions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ searchTerm: searchTerm })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid values');
    }

    return data;
  } catch (error) {
    throw new Error('Internal server error');
  }
}
export async function createApplicant(applicantData) {
  try {
    const formData = new FormData();
    for (const key in applicantData) {
      formData.append(key, applicantData[key]);
    }

    const response = await fetch('http://localhost:3001/api/candidates', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error creating applicant');
    }

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getCandidateById(id) {
  try {
    const response = await fetch(`http://localhost:3001/api/candidates/${id}`);
    const data = await response.json();

    if (response.status !== 200) {
      throw new Error("Invalid values");
    }

    return data;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}
