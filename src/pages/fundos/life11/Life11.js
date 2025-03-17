import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Life11.css"; // Importando o arquivo de estilos

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
    };
    
    setDados(dadosFII);
  }, []);

  return (
    <div className="life11-container">
      <h2 className="life11-title">Fundos Imobiliários - LIFE11</h2>

      {dados ? (
        <table className="life11-table">
          <thead>
            <tr>
              <th>Data de Atualização</th>
              <th>PL (R$)</th>
              <th>Quantidade de Cotas</th>
              <th>Valor da Cota (R$)</th>
              <th>Variação da Cota (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dados.dataAtualizacao}</td>
              <td>{dados.pl.toLocaleString("pt-BR")}</td>
              <td>{dados.quantidadeCotas.toLocaleString("pt-BR")}</td>
              <td>{dados.valorCota.toFixed(5)}</td>
              <td>{(dados.variacaoCota * 100).toFixed(5)}%</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="life11-loading">Carregando dados...</p>
      )}
         {/* Botão dentro do JSX */}
         <div className="button-container">
        <Link to="/fundos/life11/carteira" className="carteira-btn">
          Carteira e Indicadores
        </Link>
      </div>
    </div>
  );
};

export default Life11;