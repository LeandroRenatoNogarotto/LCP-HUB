import React from "react";
import "../styles/Macro.css";

const Macro = () => {
  // 🔹 Dados estáticos, placeholders que serão substituídos pelo dataset futuramente
  const dadosMacro = {
    igpm: "4.56%",
    ipca: "5.12%",
    cdi: "13.65%",
    selic: "13.75%",
    ifix: "3,245.32",
    ibovespa: "132,452.48"
  };

  // 🔹 Dados fictícios para os últimos 12 meses de CDI, IPCA e IGP-M
  const dadosMensais = [
    { mes: "Jan/24", cdi: "1.15%", ipca: "0.55%", igpm: "0.90%" },
    { mes: "Fev/24", cdi: "1.10%", ipca: "0.60%", igpm: "0.85%" },
    { mes: "Mar/24", cdi: "1.20%", ipca: "0.45%", igpm: "1.10%" },
    { mes: "Abr/24", cdi: "1.05%", ipca: "0.50%", igpm: "0.80%" },
    { mes: "Mai/24", cdi: "1.00%", ipca: "0.40%", igpm: "0.75%" },
    { mes: "Jun/24", cdi: "0.95%", ipca: "0.38%", igpm: "0.70%" },
    { mes: "Jul/24", cdi: "1.05%", ipca: "0.42%", igpm: "0.85%" },
    { mes: "Ago/24", cdi: "1.10%", ipca: "0.50%", igpm: "0.90%" },
    { mes: "Set/24", cdi: "1.08%", ipca: "0.52%", igpm: "0.88%" },
    { mes: "Out/24", cdi: "1.12%", ipca: "0.47%", igpm: "0.95%" },
    { mes: "Nov/24", cdi: "1.09%", ipca: "0.45%", igpm: "0.92%" },
    { mes: "Dez/24", cdi: "1.15%", ipca: "0.50%", igpm: "1.00%" }
  ];

  return (
    <div className="container">
      <h1>Macro</h1>
      <p>Acompanhe Indicadores macroeconômicos e tendências do mercado.</p>

      {/* Tabela de Indicadores Anuais */}
      <h2>Indicadores Anuais</h2>
      <table className="macro-table">
        <thead>
          <tr>
            <th>Indicador</th>
            <th>Valor Atual</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>📌 IGP-M</td><td>{dadosMacro.igpm}</td></tr>
          <tr><td>📌 IPCA</td><td>{dadosMacro.ipca}</td></tr>
          <tr><td>📌 CDI</td><td>{dadosMacro.cdi}</td></tr>
          <tr><td>📌 SELIC</td><td>{dadosMacro.selic}</td></tr>
          <tr><td>📌 IFIX</td><td>{dadosMacro.ifix}</td></tr>
          <tr><td>📌 IBOVESPA</td><td>{dadosMacro.ibovespa}</td></tr>
        </tbody>
      </table>

      {/* Tabela de Indicadores Mensais */}
      <h2>CDI, IPCA e IGP-M - Últimos 12 meses</h2>
      <table className="macro-table">
        <thead>
          <tr>
            <th>Mês</th>
            <th>CDI</th>
            <th>IPCA</th>
            <th>IGP-M</th>
          </tr>
        </thead>
        <tbody>
          {dadosMensais.map((dado, index) => (
            <tr key={index}>
              <td>{dado.mes}</td>
              <td>{dado.cdi}</td>
              <td>{dado.ipca}</td>
              <td>{dado.igpm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Macro;
