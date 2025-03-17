import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="sidebar">
    <h2>Menu</h2>
    <ul>
      <li><Link to="/">Início</Link></li>
      <li><Link to="/fundos">Fundos</Link></li>
      <li><Link to="/relatorios">Relatórios</Link></li>
      <li><Link to="/contato">Contato</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
