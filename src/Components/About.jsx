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
              Hi there, I'm Jordan, on my way to becoming a software engineer,
              blending a decade of hospitality experience with a creative
              background. Managing a high-end cinema venue and undergoing a
              rigorous software engineering bootcamp has uniquely equipped me
              with insights into user experience and digital creativity. My
              degree in Film and TV Production not only speaks to my love for
              visual storytelling but also influences my approach to
              user-centric software solutions.{" "}
            </p>
            <p>
              When I step away from coding, I'm all about movies, gaming, 3D
              printing, and exploring new places. My passion for travel
              complements my other hobbies, adding a broader perspective to my
              work. Whether it's experiencing different cultures or
              experimenting with new recipes, these adventures fuel my
              creativity and inform my approach to technology. Take a peek at my
              portfolio to see how my diverse interests and experiences blend
              into my tech projects, and feel free to reach out for a chat or
              collaboration!
            </p>
          </div>
          <div className={[styles.about__divider]}></div>
          <div className={styles.about__avatar__container}>
            <div className={styles.about__avatar}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
