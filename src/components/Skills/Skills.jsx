import React, { useState, createRef } from "react";
import "./Skills.css";
import mySkills from "./mySkills";
import { logDOM } from "@testing-library/react";

function Skills() {
  const levels = ["Regular", "Junior", "Beginner"];
  const [comment, setComment] = useState({
    tittle: "",
    content: "",
    level: "Select technology for information",
    selected: false,
  });
  const ref = createRef();

  return (
    <section id="skill-section">
      <h1 className="center">Technologies:</h1>
      <div className="skills">
        {mySkills.map((skill, index) => {
          return (
            <div className="skill" key={"skill" + index}>
              <p>{skill.tittle}</p>
              <img
                className={
                  "skill-img" +
                  (comment.selected && comment.tittle === skill.tittle
                    ? " selected-skill"
                    : "")
                }
                src={skill.img}
                alt={skill.tittle + "-img"}
                onMouseEnter={() =>
                  setComment({
                    tittle: skill.tittle,
                    content: skill.content,
                    level: skill.level,
                    selected: true,
                  })
                }
              />
              <p style={{ color: "white", fontSize: "0.7em" }}>{skill.level}</p>

              {/* <aside className="skill-comment">
                      <h3>{skill.tittle}</h3>
                      {skill.content}
                    </aside> */}
            </div>
          );
        })}
      </div>
      <div className="skill-comment">
        <p style={{ fontSize: "0.7em" }}>{comment.level}</p>
        <h4>{comment.tittle}</h4>
        <p>{comment.content}</p>
      </div>
    </section>
  );
}
export default Skills;
