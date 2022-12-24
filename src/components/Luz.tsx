import React from "react";

const Luz = ({ color, ligado, name, onClick }) => {
  return (
    <button className="sinalizacao__btn" onClick={onClick} disabled={ligado}>
      <div
        className={`sinalizacao__luz ${
          ligado ? "sinalizacao__luz--ligado" : ""
        }`}
        style={{ backgroundColor: color }}
      ></div>
      <span>Ligar cor {name}</span>
    </button>
  );
};

export default Luz;
