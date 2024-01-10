import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import SkillIcon from "./SkillIcon";
import styles from "./Skills.module.css";

const GET_SKILLS = gql`
  query skills {
    skillsIcons(first: 200) {
      skill
      icon {
        url
      }
      doIKnowIt
      ranking
      yearFirstUsed
      color {
        hex
      }
    }
  }
`;

const Skills = () => {
  const { loading, error, data } = useQuery(GET_SKILLS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const renderSkills = (knowIt) => {
    return data.skillsIcons
      .filter((skill) => skill.doIKnowIt === knowIt)
      .sort((a, b) => a.ranking - b.ranking)
      .map((skill, index) => <SkillIcon key={index} skill={skill} />);
  };

  return (
    <>
      <div
        className={`section__container ${styles.section__container}`}
        id="skills"
      >
        <h2>Skills</h2>
        <div className={styles["skills__icons"]}>{renderSkills(true)}</div>
        <h3>Currently Learning</h3>
        <div className={styles["skills__icons"]}>{renderSkills(false)}</div>
      </div>
    </>
  );
};

export default Skills;
