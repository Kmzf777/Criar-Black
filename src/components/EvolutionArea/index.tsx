import React, { MutableRefObject, useEffect, useRef } from "react";
import "./EvolutionArea.css";
import "./EvolutionArea-Mobile.css";

import Foguete from "../../assets/Foguete3D.png";

type TobserverOptions = {
  root: null;
  rootMargin: string;
  threshold: number;
};

const EvolutionArea = () => {
  class countUp {
    private el;
    private declare number: NodeListOf<Element>;
    private declare observerOptions: TobserverOptions;
    private declare observer: IntersectionObserver;
    private declare duration: number;

    constructor(el: HTMLElement) {
      this.el = el;
      this.setVars();
      this.init();
    }

    setVars() {
      this.number = this.el.querySelectorAll("[data-contar-ate-numero]");
      this.observerOptions = {
        root: null,
        rootMargin: "0px 0px",
        threshold: 0,
      };
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry: any) => {
          const end = parseFloat(
            entry.target.dataset.contarAteNumero.replace(/,/g, "")
          );
          this.duration =
            parseInt(entry.target.dataset.duracaoDeAnimacao.replace(/,/g, "")) *
            1000;
          const decimals = this.countDecimals(end);
          if (entry.isIntersecting) {
            this.iterateValue(entry.target, end, decimals);
          }
        });
      }, this.observerOptions);
    }

    init() {
      if (this.number.length > 0) {
        this.number.forEach((el) => {
          this.observer.observe(el);
        });
      }
    }

    iterateValue(el: HTMLElement, end: number, decimals: number) {
      const start = 0;
      const duration = this.duration;
      let startTimestamp = 0;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsedPercent = (timestamp - startTimestamp) / duration;
        const easedProgress = Math.min(this.easeOutQuint(elapsedPercent), 1);
        let interimNumber = Math.abs(easedProgress * (end - start) + start);
        el.innerHTML = this.formatNumber(interimNumber, decimals).replaceAll(
          ",",
          "."
        );
        if (easedProgress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      // requestAnimationFrame returns DOMHighResTimeStamp as a callback (used as timestamp)
      window.requestAnimationFrame(step);
    }

    easeOutQuad(x: number) {
      return 1 - Math.pow(1 - x, 3);
    }

    easeOutQuint(x: number) {
      return 1 - Math.pow(1 - x, 5);
    }

    countDecimals(val: number) {
      if (Math.floor(val) === val) return 0;
      return val.toString().split(".")[1].length || 0;
    }

    formatNumber(val: number, decimals: number) {
      return val.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    }
  }

  const rocketNumbers = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (!rocketNumbers || !rocketNumbers.current) return;
    new countUp(rocketNumbers.current);
  }, [rocketNumbers]);

  return (
    <section className="evolution-area">
      <div className="evolution-text">
        <h2>
          Transforme seu negócio em um <span>FOGUETE</span>
        </h2>
        <h3>A Criar Ideias levará seu negócio as alturas</h3>
      </div>

      <main className="rocket-info">
        <div className="rocket-decoration">
          <div className="rocket-img">
            <img src={Foguete} alt="Foguete" />
          </div>
          <div className="boneco-img">
          </div>
        </div>

        <div className="rocket-numbers" ref={rocketNumbers}>
          <div className="rocket-box" data-tilt>
            <h2
              data-contar-ate-numero="1,000,000"
              data-duracao-de-animacao="3000"
            >
              1.000.000
            </h2>
            <h3>
              Quantas pessoas vao ver seu{" "}
              <span className="deco-text">FOGUETE</span>
            </h3>
          </div>
          <div className="rocket-box" data-tilt>
            <h2
              data-contar-ate-numero="1,000,000"
              data-duracao-de-animacao="10000"
            >
              1.000.000
            </h2>
            <h3>
              Novos Clientes conhecerão seu{" "}
              <span className="deco-text">NEGÓCIO</span>
            </h3>
          </div>
          <div className="rocket-box" data-tilt>
            <a href="#">
              <button className="link-rocket">Clique Aqui!</button>
            </a>

            <h3>
              Clique acima para conferir o valor do{" "}
              <span className="deco-text">FOGUETE</span>
            </h3>
          </div>
          <div className="rocket-box" data-tilt>
            <h2>
              <span
                data-contar-ate-numero="1,000,000"
                data-duracao-de-animacao="3000000"
              >
                1.000.000
              </span>
              %
            </h2>
            <h3>
              Taxa de Crescimento do seu{" "}
              <span className="deco-text">FOGUETE</span>
            </h3>
          </div>
        </div>
        <script src="counter.js"></script>
        <div className="aviso">
          <h4>Valores ilustrativos</h4>

          <h2>Role para Baixo!</h2>
        </div>
      </main>
    </section>
  );
};

export default EvolutionArea;
