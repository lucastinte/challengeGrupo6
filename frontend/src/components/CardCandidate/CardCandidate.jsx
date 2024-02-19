import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCandidateById } from "../../services/serviceApi";

const CardCandidate = () => {
  const { id } = useParams(); // Obtenemos el ID del candidato de los parámetros de la URL
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    const fetchCandidateData = async () => {
      try {
        const data = await getCandidateById(id);
        setCandidate(data.data.applicant);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCandidateData();
  }, [id]); // Asegúrate de ejecutar el efecto cada vez que cambie el ID del candidato

  if (!candidate) {
    return <div>Loading...</div>;
  }
  const apiUrl = 'http://localhost:3001/api/candidates/images/';
  const imageUrl = `${apiUrl}${candidate.image}`;

  return (
    <div className="card"  style={{ maxWidth: "500px",  }}>
      <div className="card-header">
        <h3 className="card-title">{candidate.name} {candidate.lastName}</h3>
      </div>
      <div className="card-body">
        <img className="card-img-top" src={imageUrl} alt={`${candidate.name} ${candidate.lastName}`} />
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Dni:</strong> {candidate.dni}</li>
          <li className="list-group-item"><strong>Profesion:</strong> {candidate.profession.name}</li>
          <li className="list-group-item"><strong>Sexo:</strong> {candidate.gender.name}</li>
          <li className="list-group-item"><strong>Telefono:</strong> {candidate.phone}</li>
          <li className="list-group-item"><strong>Email:</strong> {candidate.email}</li>
          <li className="list-group-item"><strong>LinkedIn:</strong> <a href={candidate.linkedinProfile} target="_blank" rel="noreferrer">{candidate.linkedinProfile}</a></li>
        </ul>
      </div>
    </div>
  );
};

export default CardCandidate;
