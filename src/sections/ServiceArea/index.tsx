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
          <h2>Alavancando o Sucesso Empresarial</h2>
          <h3>Estratégias para diferenciar sua empresa e criar relacionamentos duradouros com os clientes</h3>
          <img src={DesignerECriacao} alt="" />
          <p>
          Em um mercado cada vez mais competitivo, a gestão comercial é um fator chave para o sucesso de qualquer empresa. Neste artigo, apresentaremos algumas estratégias eficazes para vencer a concorrência e conquistar clientes fiéis, incluindo a identificação do perfil do consumidor, a criação de uma proposta de valor única e a adoção de práticas de atendimento ao cliente de excelência. Com essas estratégias, sua empresa poderá se destacar no mercado, fidelizar os clientes e construir um relacionamento duradouro e rentável.
          </p>
        </div>
        <div className="info-box">
          <h2> Gerenciar um Time à Distância com Eficiência</h2>
          <h3>Estratégias para liderar equipes com diferentes habilidades e competências</h3>
          <img src={DesignerECriacao} alt="" />
          <p>
          Com a crescente necessidade de inovação e a diversidade de habilidades e competências no mercado de trabalho, é comum que empresas formem equipes multidisciplinares. Neste artigo, apresentaremos estratégias para liderar equipes com diferentes habilidades e competências, incluindo a valorização da diversidade, a definição de objetivos claros, o uso de ferramentas de comunicação eficazes e o estabelecimento de um ambiente de trabalho colaborativo. Com essas dicas, você poderá criar uma equipe coesa e produtiva, capaz de enfrentar desafios e alcançar resultados expressivos.
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
