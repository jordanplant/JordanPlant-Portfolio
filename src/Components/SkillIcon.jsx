import React, { useState } from "react";

const SkillIcon = ({ skill }) => {
  const [hover, setHover] = useState(false); // State to manage hover

  const iconColor = skill.color && skill.color.hex ? skill.color.hex : "#000";

  return (
    <div
      className={`skill__icon ${hover ? "hover" : ""}`}
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
