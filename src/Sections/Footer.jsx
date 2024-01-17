import React from "react";
import { Button } from "../Components/Button";
import styles from "./Footer.module.css"; // Import the CSS module as 'styles'
import Logo from "../Components/Logo";
import ContactForm from "./ContactForm";

function Footer() {
  return (
    <div className={styles["footer-container"]}>
      {" "}
      <section className={styles["social-media"]}>
        <div className={styles["social-media-wrap"]}>
          <div className={styles["footer-logo"]}>
            <a href="#home" className={styles["social-logo"]}>
              <Logo includeSlash={true} />
            </a>
          </div>

          <div className={styles["social-icons"]}>
            <a
              className={`${styles["social-icon-link"]} ${styles["github"]}`}
              href="https://github.com/jordanplant"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className={`${styles["social-icon-link"]} ${styles["linkedin"]}`}
              href="https://linkedin.com/in/jordanplant"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
      <small className={styles["website-rights"]}>JP 2024</small>
    </div>
  );
}

export default Footer;
