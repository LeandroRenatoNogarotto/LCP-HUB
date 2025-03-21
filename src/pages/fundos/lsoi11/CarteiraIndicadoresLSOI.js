import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/CarteiraIndicadores.css";

const operacoesLSOI = [
  { nome: "CRI SIGMA", cidade: "São Paulo" },
  { nome: "CRI OMEGA", cidade: "Belo Horizonte" },
  { nome: "CRI EPSILON", cidade: "Curitiba" },
  { nome: "CRI DELTA", cidade: "Salvador" },
];

const CarteiraIndicadoresLSOI = () => {
  return (
    <div className="carteira-container">
      <h2>Carteira e Indicadores - LSOI11</h2>
      <ul className="carteira-list">
        {operacoesLSOI.map((op, index) => (
          <li key={index}>
            <Link to={`/fundos/lsoi11/carteira/${op.nome.toLowerCase().replace(/\s+/g, "-")}`} className="carteira-link">
              {op.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarteiraIndicadoresLSOI;
