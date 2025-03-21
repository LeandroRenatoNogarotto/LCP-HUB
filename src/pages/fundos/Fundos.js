import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Fundos.css";

const Fundos = () => (
  <div className="fundos-container">
    <h1 id="titulo-fundos">Nossos Fundos</h1>
    <div className="fundos-grid">
      <Link to="/fundos/life11" className="fundo-card"><h2>LIFE11</h2></Link>
      <Link to="/fundos/lred11" className="fundo-card"><h2>LRED11</h2></Link>
      <Link to="/fundos/lsoi11" className="fundo-card"><h2>LSOI11</h2></Link>
      <Link to="/fundos/tera11" className="fundo-card"><h2>TERA11</h2></Link>
    </div>
  </div>
);

export default Fundos;
