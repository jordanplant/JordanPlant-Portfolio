import React, { useState } from "react";
import "../App.css";
import { Button } from "./Button";
import styles from "./HeroSection.module.css"; // Import the CSS module as 'styles'

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
    <div
      className={styles["hero-container"]}
      onMouseMove={handleMouseMove}
      id="home"
    >
      {/* Glow Effect Div */}
      <div className={styles["glow-effect"]} style={dynamicStyle}></div>

      {/* Your existing content */}
      <h2>
        <span className={styles["greeting"]}>Hello,</span> I'm
      </h2>
      <h1>Jordan</h1>

      {/* <div className={styles["avatar"]}></div> */}
      <div className={styles["hero-btns"]}>
        <Button
          className={styles["btns"]}
          buttonStyle={styles["btn--outline"]}
          buttonSize={styles["btn--large"]}
        >
          Get started
        </Button>
        {/* Additional buttons or content */}
      </div>
    </div>
  );
}

export default HeroSection;
