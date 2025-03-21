import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const IndicadoresFIILSOI = ({ dados }) => {
  if (!dados) {
    return <p className="indicadores-loading">Carregando dados...</p>;
  }

  const indicadores = [
    { label: "Data de Atualização", value: dados.dataAtualizacao },
    { label: "Patrimônio Líquido (R$)", value: dados.pl.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) },
    { label: "Quantidade de Cotas", value: dados.quantidadeCotas.toLocaleString("pt-BR") },
    { label: "Valor da Cota (R$)", value: dados.valorCota.toFixed(5) },
    { label: "Variação da Cota (%)", value: `${(dados.variacaoCota * 100).toFixed(2)}%` },
    { label: "Cota Ajustada (R$)", value: dados.cotaAjustada.toFixed(5) },
    { label: "Caixa (R$)", value: dados.caixa.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) },
    { label: "CNPJ", value: dados.cnpj },
    { label: "Administrador", value: dados.administrador },
    { 
      label: "Valor Performance (R$)", 
      value: dados.valorPerformance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      info: "A taxa de Performance é de 15% sobre o que exceder 90% do CDI."
    },
    { 
      label: "Valor Administração (R$)", 
      value: dados.valorAdm.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      info: "A taxa de Administração é de 1,25% a.a."
    }
  ];

  return (
    <div className="indicadores-container">
      <h3 className="indicadores-title">Indicadores do LSOI11</h3>
      <div className="indicadores-grid">
        {indicadores.map((item, index) => (
          <div key={index} className="indicador-item">
            <span className="indicador-label">
              {item.label}
              {item.info && (
                <span className="tooltip-container">
                  <FaInfoCircle className="info-icon" />
                  <span className="tooltip-text">{item.info}</span>
                </span>
              )}
            </span>
            <span className="indicador-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndicadoresFIILSOI;
