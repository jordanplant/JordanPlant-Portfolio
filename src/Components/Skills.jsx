import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="section__container">
        <h1>Skills</h1>
        <div className="skills__icons">
          <i className="fa-brands fa-html5 fa-8x"></i>
          <i className="fa-brands fa-css3-alt fa-8x"></i>
          <i class="fa-brands fa-js fa-8x"></i>
          <i className="fa-brands fa-react fa-8x"></i>
          <i className="fa-brands fa-node fa-8x"></i>

          <i className="Ps-logo">
            <img
              c
              src="public/images/Adobe_Photoshop_CC_icon.svg"
              width="20px"
            />
          </i>
          <i className="Ai-logo">
            <img
              src="public/images/Adobe_Illustrator_CC_icon.svg"
              width="20px"
            />
          </i>
          <i className="Pr-logo">
            <img
              src="public/images/Adobe_Premiere_Pro_CC_icon.svg"
              width="20px"
            />
          </i>
          <i className="Ae-logo">
            <img
              src="/public/images/Adobe_After_Effects_CC_icon.svg"
              width="20px"
            />
          </i>
        </div>
      </div>
    </>
  );
};

export default Skills;
