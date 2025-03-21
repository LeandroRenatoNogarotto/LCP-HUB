import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IndicadoresFII from "./IndicadoresFII";
import "../../../styles/Life11.css"; // Estilos

const Life11 = () => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    // Simulação dos dados extraídos do Excel
    const dadosFII = {
      dataAtualizacao: "12/03/2025",
      pl: 374356700, // Patrimônio Líquido
      quantidadeCotas: 37901307,
      valorCota: 9.877145,
      variacaoCota: 0.003207,
      caixa: 100,
      cnpj: "01.234.567/0001-89",
      administrador: "Vórtx",
      cotaAjustada: 14.877145,
      taxaAdm: 0.0138,
      valorPerformance: 1500000,
      valorAdm: 400000,
    };

    setDados(dadosFII);
  }, []);

  return (
    <div className="life11-container">
      <h2 className="life11-title">Fundos Imobiliários - LIFE11</h2>

      {/* Indicadores formatados em grid */}
      <IndicadoresFII dados={dados} />

      <div className="button-container">
  <Link to="/fundos/life11/Carteira" className="carteira-btn">
    Carteira e Indicadores
  </Link>
  <Link to="/fundos/life11/dividendos" className="carteira-btn">
    Histórico de Dividendos
  </Link>
  <Link to="/fundos/life11/exposicao" className="carteira-btn">
    Exposição por Projeto
  </Link>
</div>

    </div>
  );
};

export default Life11;
