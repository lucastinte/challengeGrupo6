import { useState, useEffect } from "react";
import React from "react";
import Candidate from "./Candidate/Candidate";
import { getCandidates } from "../../services/serviceApi.js";
const ListOfCandidates = () => {
  const [aspirantes, setCandidates] = useState([]);
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await getCandidates();
        setCandidates(data.data.applicants);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCandidates();
  }, []);

  return (
    <section className="content aspirantes">
      <h2>Aspirantes</h2>
      <article className="person-boxes">
        {aspirantes.map((candidate, index) => (
          <Candidate
            key={index}
            nombre={candidate.name}
            apellido={candidate.lastName}
            profesion={candidate.profession.name}
            imagen={candidate.image}
          />
        ))}
      </article>
    </section>
  );
};

export default ListOfCandidates;
