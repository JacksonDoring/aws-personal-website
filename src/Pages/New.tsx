import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/MySkils";
import Experience from "../Components/Experience";
import Portfolio from "../Components/Portfolio";
import Footer from "../Components/Footer";

function New() {
  return (
    <div>
      <Header />
      <Menu />
      <AboutMe />
      <Skills />
      <Experience/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default New;
