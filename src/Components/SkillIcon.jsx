import React, { useState } from "react";
import styles from "../Sections/Skills.module.css";

const SkillIcon = ({ skill }) => {
  const [hover, setHover] = useState(false); // State to manage hover

  const iconColor = skill.color && skill.color.hex ? skill.color.hex : "#000";

  return (
    <div
      className={`${styles["skill__icon"]} ${hover ? styles["hover"] : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ "--hover-shadow-color": iconColor }} // Using iconColor for the shadow
    >
      <img src={skill.icon.url} alt={skill.skill} />
      {/* Additional details can be added here */}
    </div>
  );
};

export default SkillIcon;
