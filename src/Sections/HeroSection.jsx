import React, { useState } from "react";
import "../App.css";
import { Button } from "../Components/Button";
import styles from "../Sections/HeroSection.module.css"; // Import the CSS module as 'styles'

function HeroSection() {
  return (
    <div className={styles["hero-container"]} id="home">
      <div className={styles["greeting-container"]}>
        <h2 className={styles["greeting-subline"]}>
          <span className={styles["greeting"]}>Hello,</span>
          <span>I'm</span>
        </h2>
        <h1>Jordan</h1>
      </div>
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
