import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/CarteiraIndicadores.css"; // Importando os estilos

const operacoesLRED = [
  { nome: "CRI ALPHA", cidade: "São Paulo" },
  { nome: "CRI BETA", cidade: "Rio de Janeiro" },
  { nome: "CRI GAMMA", cidade: "Curitiba" },
  { nome: "CRI DELTA", cidade: "Belo Horizonte" },
  { nome: "CRI EPSILON", cidade: "Porto Alegre" },
  { nome: "CRI THETA", cidade: "Salvador" },
  { nome: "CRI ZETA", cidade: "Brasília" },
  { nome: "CRI KAPPA", cidade: "Fortaleza" }
];

const CarteiraIndicadoresLRED = () => {
  return (
    <div className="carteira-container">
      <h2>Carteira e Indicadores - LRED11</h2>
      <ul className="carteira-list">
        {operacoesLRED.map((op, index) => (
          <li key={index}>
            <Link to={`/fundos/lred11/carteira/${op.nome.replace(/\s+/g, "-").toLowerCase()}`} className="carteira-link">
              {op.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarteiraIndicadoresLRED;
