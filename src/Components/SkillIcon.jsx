import React from "react";
import styles from "../Sections/Skills.module.css";

const SkillIcon = ({ skill }) => {
  const iconColor = skill.color && skill.color.hex ? skill.color.hex : "#000";

  return (
    <div
      className={styles["skill__icon"]}
      style={{ "--hover-shadow-color": iconColor }} // currently iconcolor is turned off
    >
      <img src={skill.icon.url} alt={skill.skill} />
      {/* Additional details can be added here */}
    </div>
  );
};

export default SkillIcon;
