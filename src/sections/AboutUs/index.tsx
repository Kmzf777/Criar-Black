import React from "react";
import "./AboutUs.css";
import "./AboutUs-Mobile.css";

import Lampada from "../../assets/lampada.png";
import Astronauta from "../../assets/astronauta.png";

const AboutUs = () => {
  return (
    <section className="about-us" id="aboutUs">
      <div className="about-text">
        <h2>
          Quem <span>Somos?</span>
        </h2>
      </div>
      <main className="top-division">
        <div className="about-left">
          <div className="about-img">
            <img src={Astronauta} alt="Astronauta" />
          </div>
        </div>
        <div className="about-right">
          <h2>
            SOMOS MAIS QUE UMA <span>SIMPLES AGÊNCIA</span>
          </h2>
          <h3>
            Oque somos? e por que somos? com orgulho falamos que somos a
            revolução, não somos somente uma agência de marketing e publicidade,
            somos responsáveis pela criação de sonhos e concretização de planos,
            somos resultados e somos dedicação.
            <br />
            <br />
            Nosso maior prazer é mostrar como sua empresa e seus colaboradores
            podem decolar, com a bagagem e expêriencia em resultados!
          </h3>
          <div className="resultados">
            <div className="resultados-box">
              <h2
                data-contar-ate-numero="1,000,000"
                data-duracao-de-animacao="3000"
              >
                <div className="plus">+</div>
                <span className="resultados-number">8</span>
              </h2>
              <h3>Estados</h3>
            </div>
            <div className="resultados-box">
              <h2>
                <div className="plus">+</div>
                <span className="resultados-number">70</span>
              </h2>
              <h3>Cidades</h3>
            </div>
            <div className="resultados-box">
              <h2>
                <div className="plus">+</div>
                <span className="resultados-number">15</span>
              </h2>
              <h3>Projetos</h3>
            </div>
            <div className="resultados-box">
              <h2>
                <div className="plus">+</div>
                <span className="resultados-number">70</span>
              </h2>
              <h3>Clientes</h3>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutUs;
