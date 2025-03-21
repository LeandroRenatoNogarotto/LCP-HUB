import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IndicadoresFIILSOI from "./IndicadoresFIILSOI";
import "../../../styles/Lsoi11.css"; // Criar um CSS para LSOI11

const Lsoi11 = () => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    // Simulação dos dados extraídos do Excel para LSOI11
    const dadosFII = {
      dataAtualizacao: "12/03/2025",
      pl: 180000000, // Patrimônio Líquido
      quantidadeCotas: 15000000,
      valorCota: 8.987654,
      variacaoCota: 0.00145,
      caixa: 3000000,
      cnpj: "13.456.789/0001-55",
      administrador: "BTG Pactual",
      cotaAjustada: 10.876543,
      taxaAdm: 0.0105,
      valorPerformance: 900000,
      valorAdm: 250000,
    };

    setDados(dadosFII);
  }, []);

  return (
    <div className="lsoi11-container">
      <h2 className="lsoi11-title">Fundos Imobiliários - LSOI11</h2>

      {/* Indicadores formatados em grid */}
      <IndicadoresFIILSOI dados={dados} />

      <div className="button-container">
        <Link to="/fundos/lsoi11/carteira" className="carteira-btn">
          Carteira e Indicadores
        </Link>
        <Link to="/fundos/lsoi11/dividendos" className="carteira-btn">
          Histórico de Dividendos
        </Link>
        <Link to="/fundos/lsoi11/exposicao" className="carteira-btn">
          Exposição por Projeto
        </Link>
      </div>
    </div>
  );
};

export default Lsoi11;
