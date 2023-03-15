import React from "react";
import "./ServiceArea.css";
import "./ServiceArea-Mobile.css";

import GestaoRedesSociais from "../../assets/gestao_redes_sociais.png";
import Marketing from "../../assets/marketing.png";
import DesenvolvimentoWeb from "../../assets/desenvolvimento-web.png";
import DesignerECriacao from "../../assets/designer_e_criacao.png";

import video from "../../assets/Inbound.mp4";
import ServiceBox from "../../components/ServiceBox";

const ServiceArea = () => {
  return (
    <section className="service-area" id="services">
      <div className="service-text">
        <h2>
          Conheça Nossos <span>Serviços</span>
        </h2>
      </div>
      <main className="service-division">
        <ServiceBox
          titulo="Gestão de Redes Sociais"
          thumbnail={GestaoRedesSociais}
          desc="ANÁLISE COMPLETA, BENCHMARKETING E PLANO ESTRUTURAL"
        />
        <ServiceBox
          titulo="Marketing Estrategico e SEO"
          thumbnail={Marketing}
          desc="ESTRATEGIA FOCADA EM MARKETING E SEO"
        />
        <ServiceBox
          titulo="Desenvolvimento Web"
          thumbnail={DesenvolvimentoWeb}
          desc="DESENVOLVIMENTO DE LANDING PAGES E-COMMERCE E OUTROS"
        />
        <ServiceBox
          titulo="Designer e Criação Publicitária"
          thumbnail={DesignerECriacao}
          desc="CRIAÇÃO DE IDENTIDADES VISUAIS E SUAS DEMANDAS"
        />
      </main>

      <main className="gestao-area">
        <main className="gestao-text">
          <h2>
            <span> AUMENTE SUA </span>
            <div className="eficiencia">
              <h2>EFICIÊNCIA</h2>
              <h2>EFICIÊNCIA</h2>
              <h2>EFICIÊNCIA</h2>
              <h2>EFICIÊNCIA</h2>
              <h2>EFICIÊNCIA</h2>
            </div>{" "}
            <span>OPERACIONAL</span>
          </h2>
        </main>
        <main className="gestao-deco">
          <div className="first-box"></div>
          <div className="last-box"></div>
          <div className="box-img"></div>
        </main>
      </main>

      <main className="gestao-area">
        <div className="info-box">
          <h2>Bla Bla Bla</h2>
          <h3>bla bla bla</h3>
          <img src={DesignerECriacao} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            molestias dignissimos repellendus laboriosam distinctio unde eum
            nisi magnam hic tempora. Dolorem obcaecati minus totam vero
            provident fugiat, dolorum dicta quod.
          </p>
        </div>
        <div className="info-box">
          <h2>Bla Bla Bla</h2>
          <h3>bla bla bla</h3>
          <img src={DesignerECriacao} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            molestias dignissimos repellendus laboriosam distinctio unde eum
            nisi magnam hic tempora. Dolorem obcaecati minus totam vero
            provident fugiat, dolorum dicta quod.
          </p>
        </div>
      </main>

      <main className="video">
        <div className="video-box">
          <video width={1280} height={720} src={video} controls></video>
        </div>
      </main>
    </section>
  );
};

export default ServiceArea;
