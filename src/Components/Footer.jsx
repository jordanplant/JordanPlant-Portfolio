import React from "react";
import { Button } from "./Button";
import styles from "./Footer.module.css"; // Import the CSS module as 'styles'
import Logo from "./Logo";
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
          {/* <small className={styles["website-rights"]}>JP 2023</small> */}
          <div className={styles["social-icons"]}>
            <a
              className={`${styles["social-icon-link"]} ${styles["github"]}`}
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className={`${styles["social-icon-link"]} ${styles["linkedin"]}`}
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              className={`${styles["social-icon-link"]} ${styles["youtube"]}`}
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
