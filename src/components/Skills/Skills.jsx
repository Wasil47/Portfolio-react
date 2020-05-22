import React from "react";
import "./Skills.css";
import mySkills from "./mySkills";

function Skills() {
  const levels = ["Regular", "Junior", "Beginner", "Tools"];

  return (
    <section id="skill-section">
      <h1 className="center">Technologies:</h1>
      {levels.map((lvl, i) => {
        return (
          <div key={"div " + lvl}>
            <h2 key={"level" + i}>{lvl}</h2>
            {mySkills.map((skill, index) => {
              if (skill.level === lvl) {
                return (
                  <div className="skills slide-up" key={"skill" + index}>
                    <img
                      className="skill-img"
                      src={skill.img}
                      alt={skill.tittle + "-img"}
                    />
                    <aside className="skill-comment">
                      <h3>{skill.tittle}</h3> {skill.content}
                    </aside>
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </section>
  );
}
export default Skills;