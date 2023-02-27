import React from "react";
import "./TopBox.css";
import "./TopBox-Mobile.css";

import Pessoa1 from "../../assets/pessoa-1.jpg";
import Pessoa2 from "../../assets/pessoa-2.jfif";
import JayZ from "../../assets/jay-z-interna.jpg";
import Lampada from "../../assets/lampada.png";

const TopBox = () => {
  return (
    <section className="top-box" id="home">
      <main className="top-left">
        <div className="top-text">
          <h2>
            NÃO SOMENTE UMA <span>AGÊNCIA</span>,<span>SOMOS A REVOLUÇÃO!</span>
          </h2>
          <p>
            Somos responsáveis pela criação de sonhos e concretização de planos,
            somos resultados e somos dedicação! Nosso maior prazer é mostrar
            como sua empresa pode decolar, com a bagagem e experiência, tomamos
            liberdade de falar, <br />
            <span>NÓS SOMOS O RESULTADO!</span>
          </p>

          <div className="top-buttons">
            <button className="explore">Explorar</button>
            <button className="read">
              <div className="play">
                <i className="fa fa-play" aria-hidden="true"></i>
              </div>
              Ler Mais
            </button>
          </div>

          <div className="user-online">
            <div className="perfil-boxes">
              <div className="perfil-box">
                <img src={Pessoa1} alt="Pessoa" />
              </div>
              <div className="perfil-box">
                <img src={JayZ} alt="Jay Z" />
              </div>
              <div className="perfil-box">
                <img src={Pessoa2} alt="Pessoa" />
              </div>
              <div className="perfil-box">
                <img src={Pessoa1} alt="Pessoa" />
              </div>
            </div>
            <h3>
              <div className="dot"></div>
              500 Usuarios Online
            </h3>
          </div>
        </div>
      </main>
      <main className="top-right">
        <div className="img-box">
          <img src={Lampada} alt="lampada" />
        </div>
      </main>
    </section>
  );
};

export default TopBox;
