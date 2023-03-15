import React from "react";
import "./ServiceArea.css";
import "./ServiceArea-Mobile.css";

import Grafico from "../../assets/grafico.png";
import GestaoRedesSociais from "../../assets/gestao_redes_sociais.png";
import Marketing from "../../assets/marketing.png";
import DesenvolvimentoWeb from "../../assets/desenvolvimento-web.png";
import DesignerECriacao from "../../assets/designer_e_criacao.png";

import video from "../../assets/Inbound.mp4";

const ServiceArea = () => {
  return (
    <section className="service-area" id="services">
      <div className="service-text">
        <h2>
          Conheça Nossos <span>Serviços</span>
        </h2>
      </div>
      <main className="service-division">
        <div className="service-box">
          <h2>Gestão de Redes Sociais</h2>
          <div className="service-img">
            <img src={GestaoRedesSociais} alt="Gráfico Redes Sociais" />
          </div>

          <h3>ANÁLISE COMPLETA, BENCHMARKETING E PLANO ESTRUTURAL</h3>
        </div>
        <div className="service-box">
          <h2>Marketing Estrategico e SEO</h2>
          <div className="service-img">
            <img src={Marketing} alt="Gráfico Marketing" />
          </div>
          <h3>ESTRATEGIA FOCADA EM MARKETING E SEO</h3>
        </div>
        <div className="service-box">
          <h2>Desenvolvimento Web</h2>
          <div className="service-img">
            <img src={DesenvolvimentoWeb} alt="Desenvolvimento Web" />
          </div>
          <h3>DESENVOLVIMENTO DE LANDING PAGES E-COMMERCE E OUTROS</h3>z
        </div>
        <div className="service-box">
          <h2>Designer e Criação Publicitária</h2>
          <div className="service-img">
            <img src={DesignerECriacao} alt="PC Designer" />
          </div>
          <h3>CRIAÇÃO DE IDENTIDADES VISUAIS E SUAS DEMANDAS</h3>
        </div>
      </main>

      <main className="gestao-area">
        <main className="gestao-text">
          <h2><span> AUMENTE SUA </span> 
          <div className="eficiencia">
          <h2>EFICIÊNCIA</h2>
          <h2>EFICIÊNCIA</h2>
          <h2>EFICIÊNCIA</h2>
          <h2>EFICIÊNCIA</h2>
          <h2>EFICIÊNCIA</h2>




          </div> <span>OPERACIONAL</span></h2>
        </main>
        <main className="gestao-deco">
          <div className="first-box">
          </div>
          <div className="last-box"></div>
          <div className="box-img">
            
          </div>
          
        </main>
      </main>

      <main className="gestao-area">
        <div className="info-box">
          <h2>Bla Bla Bla</h2>
          <h3>bla bla bla</h3>
          <img src={DesignerECriacao} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab molestias dignissimos repellendus laboriosam distinctio unde eum nisi magnam hic tempora. Dolorem obcaecati minus totam vero provident fugiat, dolorum dicta quod.</p>
        </div>
        <div className="info-box">
          <h2>Bla Bla Bla</h2>
          <h3>bla bla bla</h3>
          <img src={DesignerECriacao} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab molestias dignissimos repellendus laboriosam distinctio unde eum nisi magnam hic tempora. Dolorem obcaecati minus totam vero provident fugiat, dolorum dicta quod.</p>
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
