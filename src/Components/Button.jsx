import React from "react";
import styles from "../Sections/HeroSection.module.css";

const STYLES = [styles["btn--primary"], styles["btn--outline"]];
const SIZES = [styles["btn--medium"], styles["btn--large"]];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>
      <button
        className={`${styles["btn"]} ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};
