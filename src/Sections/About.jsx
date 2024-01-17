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
              After a decade in hospitality managing cinemas across London, I
              took the plunge into a rigorous software engineering bootcamp,
              specialising in JavaScript, React and Node. This unique blend of
              experiences has armed me with a deep understanding of user
              experience and digital creativity. My degree in Film and TV
              Production isn't just a testament to my love for visual
              storytelling; it's the backbone of my approach to developing
              user-centric software solutions. As I navigate the tech world, I'm
              excited to fuse my artistic insights with cutting-edge technical
              skills, aiming to craft web experiences that captivate and engage.
            </p>
          </div>

          <div className={styles.about__avatar}>
            <img src="/JP_HEADSHOT.jpg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
