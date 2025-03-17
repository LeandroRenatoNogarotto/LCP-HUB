import React from "react";
import { useParams } from "react-router-dom";

const fundosData = {
  life11: { nome: "FII - LIFE11", descricao: "Fundo imobiliário focado em investimentos estratégicos.", indicador: "DY: 8.5%" },
  lred11: { nome: "FII - LRED11", descricao: "Fundo especializado em loteamentos residenciais.", indicador: "DY: 7.2%" },
  lsoi11: { nome: "FII - LSOI11", descricao: "Fundo voltado para operações estruturadas.", indicador: "DY: 9.1%" },
  tera11: { nome: "FII - TERA11", descricao: "Fundo diversificado em múltiplos segmentos imobiliários.", indicador: "DY: 6.8%" },
};

const FundoDetalhes = () => {
  const { fundoId } = useParams();
  const fundo = fundosData[fundoId];

  if (!fundo) {
    return <h2>Fundo não encontrado</h2>;
  }

  return (
    <div className="detalhes-container">
      <h1>{fundo.nome}</h1>
      <p>{fundo.descricao}</p>
      <h3>{fundo.indicador}</h3>
    </div>
  );
};

export default FundoDetalhes;
