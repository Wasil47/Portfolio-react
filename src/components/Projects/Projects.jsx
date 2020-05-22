import React, { useRef } from "react";
import "./Projects.css";
import myProjects from "./myProjects";

function Projects() {
  return (
    <section id="project-section">
      <h1 className="center">Projects:</h1>
      <div id="projects-list">
        {myProjects.map((project, index) => {
          return (
            <div
              className="project"
              style={{ backgroundImage: `url(${project.img})` }}
              key={"project" + index}
            >
              <div className="project-info">
                <h4>{project.name}</h4>
                <h1>{project.tech}</h1>
                <p>{project.content}</p>
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="project-link"
                  >
                    Live
                  </a>
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    className="project-link"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
