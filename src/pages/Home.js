import React from "react";
import "../styles/Home.css"; // Arquivo de estilos

const Home = () => (
  <div className="container">
    <h1>Life Capital Partners</h1>
    <p>Expertise em investimentos alternativos</p>

    <div className="button-container">
      {/* Botão para o site oficial */}
      <a href="https://lifecapitalpartners.com.br/" target="_blank" rel="noopener noreferrer" className="btn">
        Site Oficial
      </a>

      {/* Botão para o Oráculo LCP */}
      <a href="#" className="btn"> {/* Atualizar '#' com o link real quando disponível */}
        Oráculo LCP
      </a>
    </div>
  </div>
);

export default Home;
