import React from "react";
import "./Header.css";

import LogoSiteBranco from "../../assets/logo_site_branco.png";

const Header = () => {
  return (
    <nav className="header" id="header">
      <main className="nav-top">
        <img src={LogoSiteBranco} alt="criar ideias logo" />
        <div className="nav-sections">
          <a href="#home">Home</a>
          <a href="#aboutUs">Quem Somos</a>
          <a href="#services">Serviços</a>
          <a href="#partners">Clientes</a>
          <a href="#plans">Planos</a>
          <a href="#contact">Contato</a>
        </div>
      </main>
    </nav>
  );
};

export default Header;
