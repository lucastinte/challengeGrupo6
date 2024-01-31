import React from "react";
import Candidate from "./Candidate/Candidate";
const ListOfCandidates = () => {
  const candidates = [
    {
      name: "Gloria Medina",
      position: "Administrador",
      image: "./img/foto1.jpg",
    },
  ];

  return (
    <section className="content aspirantes">
      <h2>Aspirantes</h2>
      <article className="person-boxes">
        {candidates.map((candidate, index) => (
          <Candidate key={index} {...candidate} />
        ))}
      </article>
    </section>
  );
};

export default ListOfCandidates;
