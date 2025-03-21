import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IndicadoresFIITERA from "./IndicadoresFIITERA";
import "../../../styles/Tera11.css"; // Criar um CSS para TERA11

const Tera11 = () => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    // Simulação dos dados extraídos do Excel para TERA11
    const dadosFII = {
      dataAtualizacao: "12/03/2025",
      pl: 300000000, // Patrimônio Líquido
      quantidadeCotas: 25000000,
      valorCota: 12.345678,
      variacaoCota: 0.00321,
      caixa: 7000000,
      cnpj: "14.567.890/0001-66",
      administrador: "BTG Pactual",
      cotaAjustada: 15.876543,
      taxaAdm: 0.0120,
      valorPerformance: 1200000,
      valorAdm: 350000,
    };

    setDados(dadosFII);
  }, []);

  return (
    <div className="tera11-container">
      <h2 className="tera11-title">Fundos Imobiliários - TERA11</h2>

      {/* Indicadores formatados em grid */}
      <IndicadoresFIITERA dados={dados} />

      <div className="button-container">
        <Link to="/fundos/tera11/carteira" className="carteira-btn">
          Carteira e Indicadores
        </Link>
        <Link to="/fundos/tera11/dividendos" className="carteira-btn">
          Histórico de Dividendos
        </Link>
        <Link to="/fundos/tera11/exposicao" className="carteira-btn">
          Exposição por Projeto
        </Link>
      </div>
    </div>
  );
};

export default Tera11;
