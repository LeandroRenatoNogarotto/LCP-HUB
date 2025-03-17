import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/CarteiraIndicadores.css"; // Importando os estilos

const operacoes = [
  { nome: "CRI EMA", cidade: "Barra dos Coqueiros" },
  { nome: "CRI VANVERA", cidade: "Ariquemes" },
  { nome: "CRI VECTRA", cidade: "Londrina" },
  { nome: "CRI QSJRN", cidade: "Manaus" },
  { nome: "CRI MIRANTE", cidade: "São José" },
  { nome: "CRI POEHMA", cidade: "Gramado" },
  { nome: "CRI MONTE LAZULI", cidade: "Matinhos" },
  { nome: "CRI THL", cidade: "Guaratinguetá" },
  { nome: "CRI Abecker", cidade: "Diversos" },
  { nome: "CRI FAZENDA BAYER", cidade: "Quatro Barras" },
  { nome: "CRI Abecker 2", cidade: "Diversos" },
  { nome: "GREEN MARIA", cidade: "Fazenda Rio Grande" },
  { nome: "GREEN PORTUGAL I", cidade: "Fazenda Rio Grande" },
  { nome: "GREEN PORTUGAL II", cidade: "Fazenda Rio Grande" },
  { nome: "ONE", cidade: "Fazenda Rio Grande" }
    
];

const CarteiraIndicadores = () => {
  return (
    <div className="carteira-container">
      <h2>Carteira e Indicadores</h2>
      <ul className="carteira-list">
        {operacoes.map((op, index) => (
          <li key={index}>
            <Link to={`/fundos/life11/carteira/${op.nome.replace(/\s+/g, "-").toLowerCase()}`} className="carteira-link">
              {op.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarteiraIndicadores;
