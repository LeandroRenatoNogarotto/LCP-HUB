import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IndicadoresFIILRED from "./IndicadoresFIILRED";  
import "../../../styles/Lred11.css"; // Estilos

const Lred11 = () => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    // Simulação dos dados extraídos do Excel para LRED11
    const dadosFII = {
      dataAtualizacao: "12/03/2025",
      pl: 250000000, // Patrimônio Líquido
      quantidadeCotas: 20000000,
      valorCota: 10.123456,
      variacaoCota: 0.00234,
      caixa: 5000000,
      cnpj: "12.345.678/0001-99",
      administrador: "BTG Pactual",
      cotaAjustada: 12.654321,
      taxaAdm: 0.0125,
      valorPerformance: 1000000,
      valorAdm: 300000,
    };

    setDados(dadosFII);
  }, []);

  return (
    <div className="lred11-container">
      <h2 className="lred11-title">Fundos Imobiliários - LRED11</h2>

      {/* Indicadores formatados em grid */}
      <IndicadoresFIILRED dados={dados}/>

      <div className="button-container">
        <Link to="/fundos/lred11/carteira" className="carteira-btn">
          Carteira e Indicadores
        </Link>
        <Link to="/fundos/lred11/dividendos" className="carteira-btn">
          Histórico de Dividendos
        </Link>
        <Link to="/fundos/lred11/exposicao" className="carteira-btn">
          Exposição por Projeto
        </Link>
      </div>
    </div>
  );
};

export default Lred11;
