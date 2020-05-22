import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!active);
  };

  window.addEventListener("load", toggleNavbar);

  return (
    <div>
      <nav id="navbar" className={active ? "" : "hide"}>
        <header id="nav-head">
          <a className="start-link" href="#welcome-section">
            <p>Mateusz</p>
            <p className="trans-bold">Wasil</p>
          </a>
        </header>
        <ul className="nav-list">
          <li className="nav-link">
            <a href="#about-section">About me</a>
          </li>
          <li className="nav-link">
            <a href="#skill-section">Skills</a>
          </li>
          <li className="nav-link">
            <a href="#project-section">Projects</a>
          </li>
          <li className="nav-link">
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={"ham " + (active ? "active" : "")} onClick={toggleNavbar}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
}
export default Navbar;
