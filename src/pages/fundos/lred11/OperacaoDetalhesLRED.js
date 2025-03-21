import React from "react";
import { Link, useParams } from "react-router-dom"; 
import "../../../styles/OperacaoDetalhes.css";

const operacoesDetalhesLRED = {
  "cri-alpha": {
    cidade: "São Paulo",
    ifm: "80.5%",
    rgsd: "60.2%",
    rgsdEstoque: "90%",
    garantias: "R$ 45,000,000.00",
    garantiasEstoque: "R$ 20,500,000.00",
    duration: 3.2,
    recebiveisM0: "R$ 550,000.00",
    recebiveisM1: "R$ 700,150.00",
    inadimplenciaMensal: "65.4%",
    inadimplencia30d: "40.12%",
    inadimplencia60d: "30.05%",
    inadimplencia90d: "28.77%",
    historicoVendas: "R$ 120,300,500.00",
    dividasPrestadores: "R$ 5,500,000.00",
    impostosAbertos: "R$ 9,200,000.00",
    dataEmissao: "15/08/2022",
    rgsdTs: "140%",
    ifmTs: "135%",
    codigoCetip: "789123",
    PU: "R$ 1,100.00",
    quantidadeCotas: "1,200,000",
    responsável: "Maria Fernandes"
  },
  "cri-beta": {
    cidade: "Rio de Janeiro",
    ifm: "78.3%",
    rgsd: "58.1%",
  }
};

const OperacaoDetalhesLRED = () => {
  const { nome } = useParams();
  const dados = operacoesDetalhesLRED[nome];

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

      {/* 📌 BOTÕES ABAIXO DOS INDICADORES */}
      <div className="operacao-buttons">
        <Link to={`/fundos/lred11/${nome}/evolucao-vendas`} className="operacao-btn">
          📊 Evolução de Vendas
        </Link>
        <Link to={`/fundos/lred11/${nome}/inadimplencia`} className="operacao-btn">
          📉 Histórico de Inadimplência
        </Link>
      </div>
    </div>
  );
};

export default OperacaoDetalhesLRED;
