import { useState } from "react";
import React from "react";
import Luz from "./Luz";

const Sinalizacao = ({ colors = [] }) => {
  const [colorAtual, setColorAtual] = useState("");

  return (
    <div>
      <div className="sinalizacao">
        {colors.map(({ color, name }) => (
          <Luz
            color={color}
            name={name}
            ligado={color === colorAtual}
            onClick={() => setColorAtual(color)}
            key={color}
          />
        ))}
      </div>
    </div>
  );
};

export default Sinalizacao;
