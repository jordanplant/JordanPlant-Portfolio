import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import Skills from "../Skills";

function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <Cards />
    </>
  );
}

export default Home;
