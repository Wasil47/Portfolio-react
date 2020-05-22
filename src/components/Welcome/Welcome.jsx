import React from "react";
import "./Welcome.css";

function Welcome() {

  window.addEventListener('load', ()=>{
    const helloClass = document.getElementsByClassName('hello')[0].children;
    const hello = () => {
      for (let i = 0; i < helloClass.length; i++) {
      setTimeout(()=>{helloClass[i].classList.remove('hide-hello')}, 500*i);
      }
    };
    setTimeout(hello, 200);  
  });

  return (
    <section id="welcome-section">
      <div className="welcome">
        <div className="center in-front hello">
          <h1 className="hide-hello">Hey, I am Mateusz</h1>
          <p className="trans-bold hide-hello">Front End / Full Stack Developer</p>
          <p className="semi-visible hide-hello">EXP. LEVEL: BEGINNER</p>
        </div>
        <div className="center in-front profile-photo">
          <figure className="photo"></figure>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
