import React, { useState } from "react";
import "../app.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const dynamicStyle = {
    left: mousePosition.x - 0 + "px", // Adjust 50 to half of your glow effect's width
    top: mousePosition.y - 100 + "px", // Adjust 50 to half of your glow effect's height
  };

  return (
    <div className="hero-container" onMouseMove={handleMouseMove}>
      {/* Glow Effect Div */}
      <div className="glow-effect" style={dynamicStyle}></div>

      {/* Your existing content */}
      <h1>Hello</h1>
      <p>I'm Jordan</p>
      {/* <div className="avatar"></div> */}
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        {/* Additional buttons or content */}
      </div>
    </div>
  );
}

export default HeroSection;
