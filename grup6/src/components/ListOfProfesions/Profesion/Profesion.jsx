import React from "react";

const Profesion = ({ nombre }) => {
  return (
    <button
      type="button"
      className="list-group-item list-group-item-action text-center"
    >
      {nombre}
    </button>
  );
};

export default Profesion;
