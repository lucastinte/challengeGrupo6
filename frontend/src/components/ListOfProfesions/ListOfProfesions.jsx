import { useState, useEffect } from "react";
import React from "react";
import Profesion from "./Profesion/Profesion";
import { getProfesions } from "../../services/serviceApi.js";

const ListOfProfesions = () => {
  const [profesiones, setProfesions] = useState([]);
  useEffect(() => {
    const fetchProfesions = async () => {
      try {
        const data = await getProfesions();
        setProfesions(data.data.professions);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchProfesions();
  }, []);

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
        {profesiones.map((profesion, index) => (
          <Profesion key={index} nombre={profesion} />
        ))}
      </div>
    </section>
  );
};

export default ListOfProfesions;
