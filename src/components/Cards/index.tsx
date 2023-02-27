import React from "react";
import "./Cards.css";
import "./Cards-Mobile.css";

const Cards = () => {
  return (
    <section className="cards" id="plans">
      <div className="price-text">
        <h2>
          Nossos <span>Planos</span>
        </h2>
        <h3>
          Clique no plano que <span>Deseja!</span>
        </h3>
      </div>

      {/* CARDS BASIC */}

      <div
        className="card-box2 bronze"
        data-tilt
        data-tilt-max="15"
        data-tilt-speed="1000"
        data-tilt-perspective="900"
      >
        <span></span>
        <div className="inner-card">
          <h3 className="card-tittle">Bronze</h3>
          <div className="card-text">
            <h4>R$</h4>
            <h2>400</h2>
            <h4>/Mês</h4>
          </div>
          <ul>
            <li>
              <div className="flex-text">
                <h3>Social Media</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Trafego Pago</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Gestão De Equipe</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Gestão Financeira</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>WebSite Premium</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Atendimento Priorizado</h3>
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="card-box2 silver"
        data-tilt
        data-tilt-max="15"
        data-tilt-speed="1000"
        data-tilt-perspective="900"
      >
        <span></span>
        <div className="inner-card">
          <h3 className="card-tittle">Prata</h3>
          <div className="card-text">
            <h4>R$</h4>
            <h2>800</h2>
            <h4>/Mês</h4>
          </div>
          <ul>
            <li>
              <div className="flex-text">
                <h3>Social Media</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Trafego Pago</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Gestão De Equipe</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Gestão Financeira</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>WebSite Premium</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Atendimento Priorizado</h3>
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="card-box2 emerald"
        data-tilt
        data-tilt-max="15"
        data-tilt-speed="1000"
        data-tilt-perspective="900"
      >
        <span></span>
        <div className="inner-card">
          <h3 className="card-tittle">Emerald</h3>
          <div className="card-text">
            <h4>R$</h4>
            <h2>1500</h2>
            <h4>/Mês</h4>
          </div>
          <ul>
            <li>
              <div className="flex-text">
                <h3>Social Media</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Trafego Pago</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Gestão De Equipe</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Gestão Financeira</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>WebSite Premium</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Atendimento Priorizado</h3>
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* CARDS PREMIUM */}

      <div
        className="card-box gold"
        data-tilt
        data-tilt-max="15"
        data-tilt-speed="1000"
        data-tilt-perspective="900"
      >
        <span></span>
        <div className="inner-card">
          <h3 className="card-tittle">Gold</h3>
          <div className="card-text">
            <h4>R$</h4>
            <h2>2600</h2>
            <h4>/Mês</h4>
          </div>
          <ul>
            <li>
              <div className="flex-text">
                <h3>Social Media</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Trafego Pago</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Gestão De Equipe</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Gestão Financeira</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>WebSite Premium</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Atendimento Priorizado</h3>
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="card-box diamond"
        data-tilt
        data-tilt-max="15"
        data-tilt-speed="1000"
        data-tilt-perspective="900"
      >
        <span></span>
        <div className="inner-card">
          <h3 className="card-tittle">Diamond</h3>
          <div className="card-text">
            <h4>R$</h4>
            <h2>3200</h2>
            <h4>/Mês</h4>
          </div>
          <ul>
            <li>
              <div className="flex-text">
                <h3>Social Media</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Trafego Pago</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Gestão De Equipe</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Gestão Financeira</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>WebSite Premium</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <div className="flex-text">
                <h3>Atendimento Priorizado</h3>
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cards;
