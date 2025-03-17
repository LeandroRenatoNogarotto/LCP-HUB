import React from "react";
import { useParams } from "react-router-dom";
import "../../../styles/OperacaoDetalhes.css";

const operacoesDetalhes = {
  "cri-ema": {
    cidade: "Barra dos Coqueiros",
    ifm: "77.0%",
    rgsd: "56.4%",
    rgsdEstoque: "85%",
    garantias: "R$ 37,828,734.68",
    garantiasEstoque: "R$ 18,900,000.00",
    duration: 2.48,
    recebiveisM0: "R$ 474,514.99",
    recebiveisM1: "R$ 611,210.24",
    inadimplenciaMensal: "72.7%",
    inadimplencia30d: "47.71%",
    inadimplencia60d: "33.30%",
    inadimplencia90d: "35.74%",
    historicoVendas: "R$ 103,669,540.82",
    dividasPrestadores: "R$ 7,000,000.00",
    impostosAbertos: "R$ 10,000,000.00",
    dataEmissao: "05/11/2021",
    rgsdTs: "130%",
    ifmTs: "130%"
  }
};

const OperacaoDetalhes = () => {
  const { nome } = useParams();
  const dados = operacoesDetalhes[nome];

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
    </div>
  );
};

export default OperacaoDetalhes;
