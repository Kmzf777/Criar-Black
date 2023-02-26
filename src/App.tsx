import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import EvolutionArea from "./components/EvolutionArea";

import Header from "./components/Header";
import ServiceArea from "./components/ServiceArea";
import TopBox from "./components/TopBox";

const App = () => {
  return (
    <>
      <Header />
      <TopBox />
      <EvolutionArea />
      <ServiceArea />
      <Cards />
    </>
  );
};

export default App;
