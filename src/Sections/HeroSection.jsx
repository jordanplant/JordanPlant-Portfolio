import React, { useState } from "react";
import "../App.css";
import { Button } from "../Components/Button";
import styles from "../Sections/HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styles["hero-container"]} id="home">
      <div className={styles["greeting-container"]}>
        <h2 className={styles["greeting-subline"]}>
          <span className={styles["greeting"]}>Hello,</span>
          <span>I'm</span>
        </h2>
        <h1>Jordan</h1>
        <h3 className={styles["message-subline"]}>
          and I'm a Software Engineer!
        </h3>
      </div>
      <div className={styles["hero-btns"]}>
        <a href="#about">
          <Button
            className={styles["btns"]}
            buttonStyle={styles["btn--outline"]}
            buttonSize={styles["btn--large"]}
          >
            Get to know me
          </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
