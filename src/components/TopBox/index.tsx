import React from "react";
import "./TopBox.css";

import GoogleImg from "../../assets/google_img.jpeg";

const TopBox = () => {
  return (
    <section className="top-box">
      <div className="inner-box">
        <h2>Colocar seu nome no topo é nossa prioridade #1</h2>
        <div className="right-img">
          <img src={GoogleImg} alt="criar-ideias-google" />
        </div>
      </div>
    </section>
  );
};

export default TopBox;
