import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Projects from "../Projects";
import Footer from "../Footer";
import Skills from "../Skills";
import About from "../About";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <Skills />
    </>
  );
}

export default Home;
