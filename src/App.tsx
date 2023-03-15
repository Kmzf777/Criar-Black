import React from "react";
import "./App.css";
import AboutUs from "./sections/AboutUs";
import Cards from "./components/Cards";
import EvolutionArea from "./sections/EvolutionArea";
import Footer from "./components/Footer";

import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Partners from "./sections/Partners";
import ServiceArea from "./sections/ServiceArea";
import TopBox from "./sections/TopBox";

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
