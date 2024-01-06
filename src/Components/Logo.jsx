import React from "react";
import styles from "./Logo.module.css"; // Import the CSS module as 'styles'

const Logo = ({ includeSlash = false }) => {
  return (
    <>
      <div className={styles["nav-logo"]}>
        <p className={styles["nav-open"]}>&lt;</p>
        {includeSlash && <p className={styles["slash"]}>/</p>}
        <h1 className={styles["logo-nav"]}>JP</h1>

        <p className={styles["nav-close"]}>&gt;</p>
      </div>
    </>
  );
};

export default Logo;
