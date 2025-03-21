import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../../styles/OperacaoDetalhes.css";

const operacoesDetalhesLSOI = {
  "cri-sigma": {
    cidade: "São Paulo",
    ifm: "85.2%",
    rgsd: "65.8%",
    garantias: "R$ 50,000,000.00",
    historicoVendas: "R$ 130,000,000.00",
    inadimplencia90d: "25.5%",
  },
  "cri-omega": {
    cidade: "Belo Horizonte",
    ifm: "78.9%",
    rgsd: "58.3%",
  }
};

const OperacaoDetalhesLSOI = () => {
  const { nome } = useParams();
  const dados = operacoesDetalhesLSOI[nome];

  return (
    <div className="operacao-container">
      <h2 className="operacao-title">{nome.toUpperCase()}</h2>
      {dados ? (
        <div className="indicadores-section">
          <h3>INDICADORES DA OPERAÇÃO</h3>
          <div className="indicadores-grid">
            {Object.entries(dados).map(([chave, valor], index) => (
              <div key={index} className="indicador-item">
                <span className="indicador-nome">{chave.replace(/([A-Z])/g, ' $1').trim()}</span>
                <span className="indicador-valor">{valor}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="operacao-loading">Dados não encontrados.</p>
      )}

      <div className="operacao-buttons">
        <Link to={`/fundos/lsoi11/${nome}/evolucao-vendas`} className="operacao-btn">
          📊 Evolução de Vendas
        </Link>
        <Link to={`/fundos/lsoi11/${nome}/inadimplencia`} className="operacao-btn">
          📉 Histórico de Inadimplência
        </Link>
      </div>
    </div>
  );
};

export default OperacaoDetalhesLSOI;
