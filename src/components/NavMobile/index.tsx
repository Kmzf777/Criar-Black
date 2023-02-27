import React from "react";
import "./NavMobile.css";

import LogoSiteBranco from "../../assets/logo_site_branco.png";

const NavMobile = () => {
  return (
    <main className="nav-mobile">
      <main className="inner-nav">
        <img src={LogoSiteBranco} alt="logo site branco" />
        <input type="checkbox" id="check-menu" className="check-menu" />
        <label className="menu-icon" htmlFor="check-menu">
          <span></span>
        </label>
        <label className="menu-background" htmlFor="check-menu"></label>
        <main className="menu-box">
          <a href="#">
            <label htmlFor="check-menu"> Home </label>
          </a>
          <a href="#">
            <label htmlFor="check-menu"> Quem Somos </label>
          </a>
          <a href="#">
            <label htmlFor="check-menu"> Serviços </label>
          </a>
          <a href="#">
            <label htmlFor="check-menu"> Clientes </label>
          </a>
          <a href="#">
            <label htmlFor="check-menu"> Planos </label>
          </a>
          <a href="#">
            <label htmlFor="check-menu"> Contato </label>
          </a>
        </main>
      </main>
    </main>
  );
};

export default NavMobile;
