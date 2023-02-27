import React from "react";
import "./ServiceArea.css";
import "./ServiceArea-Mobile.css";

import Grafico from "../../assets/grafico.png";

const ServiceArea = () => {
  return (
    <section className="service-area">
      <div className="service-text">
        <h2>
          Conheça Nossos <span>Serviços</span>
        </h2>
      </div>
      <main className="service-division">
        <div className="service-box">
          <h2>Gestão de Redes Sociais</h2>
          <div className="service-img">
            <img src={Grafico} alt="Gráfico Foguete" />
          </div>

          <h3>ANÁLISE COMPLETA, BENCHMARKETING E PLANO ESTRUTURAL</h3>
        </div>
        <div className="service-box">
          <h2>Marketing Estrategico e SEO</h2>
          <div className="service-img">
            <img src={Grafico} alt="Gráfico Foguete" />
          </div>
          <h3>ESTRATEGIA FOCADA EM MARKETING E SEO</h3>
        </div>
        <div className="service-box">
          <h2>Desenvolvimento Web</h2>
          <div className="service-img">
            <img src={Grafico} alt="Gráfico Foguete" />
          </div>
          <h3>DESENVOLVIMENTO DE LANDING PAGES E-COMMERCE E OUTROS</h3>
        </div>
        <div className="service-box">
          <h2>Designer e Criação Publicitária</h2>
          <div className="service-img">
            <img src={Grafico} alt="Gráfico Foguete" />
          </div>
          <h3>CRIAÇÃO DE IDENTIDADES VISUAIS E SUAS DEMANDAS</h3>
        </div>
      </main>

      <main className="video">
        <div className="video-box">
          <video src=""></video>
        </div>
      </main>
    </section>
  );
};

export default ServiceArea;
