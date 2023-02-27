import React, { useState } from "react";
import "./Partners.css";
import "./Partners-Mobile.css";

import Parceiro1 from "../../assets/Grafico3D.png";
import Parceiro2 from "../../assets/jay-z-interna.jpg";
import Parceiro3 from "../../assets/pessoa-1.jpg";
import PartnerItem from "../PartnerItem";

const Partners = () => {
  const slides = [Parceiro1, Parceiro2, Parceiro3];
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    if (currentSlide >= slides.length - 1) {
      return setCurrentSlide(0);
    }
    setCurrentSlide((currentValue) => currentValue + 1);
  }

  function prevSlide() {
    if (currentSlide <= 0) {
      return setCurrentSlide(slides.length - 1);
    }
    setCurrentSlide((currentValue) => currentValue - 1);
  }

  return (
    <section className="parceiros" id="partners">
      <div className="service-text">
        <h2>
          Nossos <span>Clientes</span>
        </h2>
      </div>

      <div className="slider" id="slider">
        <button onClick={prevSlide} className="ctrl-btn pro-prev">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <div className="slide" id="slide">
          {slides.map((slide, pos) => {
            return (
              <PartnerItem
                key={pos}
                image={slide}
                active={pos === currentSlide}
              />
            );
          })}
        </div>
        <div className="slider-control">
          <button onClick={nextSlide} className="ctrl-btn pro-next">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
