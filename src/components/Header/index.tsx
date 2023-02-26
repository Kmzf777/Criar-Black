import React from "react";
import "./Header.css";

import CriarLogo from "../../assets/CriarLogo.png";

const Header = () => {
  return (
    <nav className="header">
      <main className="nav-top">
        <img src={CriarLogo} alt="criar ideias logo" />
        <div className="nav-sections">
          <a href="#">Home</a>
          <a href="#">Serviços</a>
          <a href="#">Clientes</a>
          <a href="#">Tabela</a>
          <a href="#">Contato</a>
          <a href="#">Consulturia</a>
        </div>
      </main>
    </nav>
  );
};

export default Header;
