import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div
        className={`section__container ${styles.section__container}`}
        id="about"
      >
        <h2>About</h2>
        <div className={styles.about__content}>
          <div className={styles.about__bio__text}>
            <p>
              I'm a full-stack developer with a creative flair, prepared to
              infuse my creative skills and managerial experience into the realm
              of web design.
            </p>
            <p>
              After completing an intensive bootcamp, I'm armed with the
              knowledge of cutting-edge technologies like React, JavaScript, and
              Node.js. These tools empower me to craft immersive digital
              experiences that not only captivate users but also deliver
              exceptional functionality.
            </p>
            <h4>Check out my projects below!</h4>
          </div>

          <div
            className={`${styles.about__avatar} halo-effect circular-halo-effect`}
          >
            <img src="/JP_HEADSHOT.jpg" alt="avatar"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
