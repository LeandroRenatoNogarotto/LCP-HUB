import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";


const Navbar = () => (
  <nav className="navbar">
    <div className="logo">LCP HUB</div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/fundos">Fundos</Link></li>
      <li><Link to="/relatorios">Relatórios</Link></li>
      <li><Link to="/noticias">Noticias</Link></li>
      <li><Link to="/contato">Contato</Link></li>
    </ul>
  </nav>
);

export default Navbar;
