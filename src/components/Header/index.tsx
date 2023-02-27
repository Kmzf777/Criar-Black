import React from "react";
import "./Header.css";

import LogoSiteBranco from "../../assets/logo_site_branco.png";

const Header = () => {
  return (
    <nav className="header">
      <main className="nav-top">
        <img src={LogoSiteBranco} alt="criar ideias logo" />
        <div className="nav-sections">
          <a href="#">Home</a>
          <a href="#">Quem Somos</a>
          <a href="#">Serviços</a>
          <a href="#">Clientes</a>
          <a href="#">Planos</a>
          <a href="#">Contato</a>
        </div>
      </main>
    </nav>
  );
};

export default Header;
