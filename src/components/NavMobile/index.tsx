import React, { MutableRefObject, useRef } from "react";
import "./NavMobile.css";

import LogoSiteBranco from "../../assets/logo_site_branco.png";

const NavMobile = () => {
  const checkMenuInput = useRef() as MutableRefObject<HTMLInputElement>;

  const handleAnchorClick = () => {
    checkMenuInput.current.click();
  };
  return (
    <main className="nav-mobile">
      <main className="inner-nav">
        <img src={LogoSiteBranco} alt="logo site branco" />
        <input
          ref={checkMenuInput}
          type="checkbox"
          id="check-menu"
          className="check-menu"
        />
        <label className="menu-icon" htmlFor="check-menu">
          <span></span>
        </label>
        <main className="menu-box">
          <a onClick={handleAnchorClick} href="#home">
            Home
          </a>
          <a onClick={handleAnchorClick} href="#aboutUs">
            Quem Somos
          </a>
          <a onClick={handleAnchorClick} href="#services">
            Serviços
          </a>
          <a onClick={handleAnchorClick} href="#partners">
            Clientes
          </a>
          <a onClick={handleAnchorClick} href="#plans">
            Planos
          </a>
          <a onClick={handleAnchorClick} href="#contact">
            Contato
          </a>
        </main>
      </main>
    </main>
  );
};

export default NavMobile;
