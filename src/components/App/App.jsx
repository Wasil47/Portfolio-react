import React from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      {/* <Skills /> */}
      <Contact />
    </div>
  );
}

export default App;
