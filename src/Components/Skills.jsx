import React from "react";
import "./Skills.css";
import { useQuery, gql } from "@apollo/client";

const GET_SKILLS = gql`
  query skills {
    skillsIcons(first: 100) {
      skill
      icon {
        url
      }
      doIKnowIt
      ranking
      yearFirstUsed
    }
  }
`;

const Skills = () => {
  const { loading, error, data } = useQuery(GET_SKILLS);

  console.log("SKILLS Data:", data);

  if (loading) return <p>Loading...</p>;
  if (error) {
    // Error handling code
    return <p>Error: {error.message}</p>;
  }

  const renderSkills = (knowIt) => {
    // Sort skills based on the rank
    const sortedSkills = data.skillsIcons
      .filter((skill) => skill.doIKnowIt === knowIt)
      .sort((a, b) => a.ranking - b.ranking); // Assuming 'rank' is the field name

    return sortedSkills.map((skill, index) => (
      <div key={index} className="skill">
        <img src={skill.icon.url} alt={skill.skill} />
        {/* You can add more details here */}
      </div>
    ));
  };

  return (
    <>
      <div className="section__container">
        <h1>Skills</h1>
        <div className="skills__icons">{renderSkills(true)}</div>

        <h2>Currently Learning</h2>
        <div className="skills__icons">{renderSkills(false)}</div>
      </div>
    </>
  );
};

export default Skills;
