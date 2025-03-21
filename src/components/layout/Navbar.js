import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">LCP HUB</div>

      {/* Botão hambúrguer */}
      <button
        className={`menu-toggle ${menuAberto ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir Menu"
        aria-expanded={menuAberto}
      >
        ☰
      </button>

      {/* Menu de navegação */}
      <ul className={`nav-links ${menuAberto ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuAberto(false)}>Home</Link></li>
        <li><Link to="/fundos" onClick={() => setMenuAberto(false)}>Fundos</Link></li>
        <li><Link to="/relatorios" onClick={() => setMenuAberto(false)}>Relatórios</Link></li>
        <li><Link to="/noticias" onClick={() => setMenuAberto(false)}>Notícias</Link></li>
        <li><Link to="/time" onClick={() => setMenuAberto(false)}>Nosso Time</Link></li>
        <li><Link to="/macro" onClick={() => setMenuAberto(false)}>Macro</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
