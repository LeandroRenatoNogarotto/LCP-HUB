import React from "react";

const MenuHamburguer = ({ menuAberto, toggleMenu }) => {
  return (
    <button
      className={`menu-toggle ${menuAberto ? "open" : ""}`}
      onClick={toggleMenu}
      aria-label="Abrir Menu"
      aria-expanded={menuAberto}
    >
      ☰
    </button>
  );
};

export default MenuHamburguer;
