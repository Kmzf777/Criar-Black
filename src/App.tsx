import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Cards from "./components/Cards";
import EvolutionArea from "./components/EvolutionArea";
import Footer from "./components/Footer";

import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Partners from "./components/Partners";
import ServiceArea from "./components/ServiceArea";
import TopBox from "./components/TopBox";

const App = () => {
  return (
    <>
      <Header />
      <NavMobile />
      <TopBox />
      <EvolutionArea />
      <AboutUs />
      <ServiceArea />
      <Partners />
      <Cards />
      <Footer />
    </>
  );
};

export default App;
