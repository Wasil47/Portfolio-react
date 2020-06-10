import React from "react";
import "./About.css";
import Skills from "../Skills/Skills";

function About() {
  return (
    <section id="about-section">
      <div className="about in-front">
        <h2>About me</h2>
        <p>
          I am a beginner full-stack developer, mainly
          focusing on front-end.
        </p>
        <p>
        I like to write in React and Node.js, 
        but I wouldn't mind working with other frameworks.
        </p>
        <p>
          In general I have beginners/juniors knowledge of web development, but
          I am pretty good at finding informations and solutions.
        </p>
      </div>
      <Skills />
    </section>
  );
}
export default About;
