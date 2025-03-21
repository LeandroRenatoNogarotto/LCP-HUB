import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../../styles/OperacaoDetalhes.css";

const operacoesDetalhesTERA = {
  "cri-oceano": {
    cidade: "Florianópolis",
    ifm: "82.4%",
    rgsd: "63.5%",
    garantias: "R$ 60,000,000.00",
    historicoVendas: "R$ 140,000,000.00",
    inadimplencia90d: "27.2%",
  },
  "cri-montanha": {
    cidade: "Curitiba",
    ifm: "76.8%",
    rgsd: "59.2%",
  }
};

const OperacaoDetalhesTERA = () => {
  const { nome } = useParams();
  const dados = operacoesDetalhesTERA[nome];

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
        <Link to={`/fundos/tera11/${nome}/evolucao-vendas`} className="operacao-btn">
          📊 Evolução de Vendas
        </Link>
        <Link to={`/fundos/tera11/${nome}/inadimplencia`} className="operacao-btn">
          📉 Histórico de Inadimplência
        </Link>
      </div>
    </div>
  );
};

export default OperacaoDetalhesTERA;
