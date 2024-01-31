// ListaProfesiones.jsx
import React from "react";
import Profesion from "./Profesion/Profesion";

const ListOfProfesions = () => {
  const profesions = [
    "Abogado",
    "Arquitecto",
    "Botánico",
    "Computista",
    "Economista",
    "Técnico de sonido",
    "Profesor",
    "Linguista",
  ];

  return (
    <section className="content profesiones">
      <h2 className="mt-3">Profesiones</h2>
      <div className="list-group shadow-sm p-3 mb-5 rounded">
        <h4
          className="list-group-item list-group-item-action active text-center"
          aria-current="true"
        >
          Listado de Profesiones
        </h4>
        {profesions.map((profesion, index) => (
          <Profesion key={index} nombre={profesion} />
        ))}
      </div>
    </section>
  );
};

export default ListOfProfesions;
