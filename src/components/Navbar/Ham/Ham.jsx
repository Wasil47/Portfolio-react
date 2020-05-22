import React, { useState } from "react";
import "./Ham.css";

function Ham(props) {
  const [active, setActive] = useState(true);

  const toggleNavbar = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <div
      className={"ham " + (props.active ? "active" : "")}
      onClick={toggleNavbar}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
}

export default Ham;
