import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/CarteiraIndicadores.css";

const operacoesTERA = [
  { nome: "CRI OCEANO", cidade: "Florianópolis" },
  { nome: "CRI MONTANHA", cidade: "Curitiba" },
  { nome: "CRI DESERTO", cidade: "Brasília" },
  { nome: "CRI FLORESTA", cidade: "Manaus" },
];

const CarteiraIndicadoresTERA = () => {
  return (
    <div className="carteira-container">
      <h2>Carteira e Indicadores - TERA11</h2>
      <ul className="carteira-list">
        {operacoesTERA.map((op, index) => (
          <li key={index}>
            <Link to={`/fundos/tera11/carteira/${op.nome.toLowerCase().replace(/\s+/g, "-")}`} className="carteira-link">
              {op.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarteiraIndicadoresTERA;
