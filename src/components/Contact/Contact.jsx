import React from "react";
import "./Contact.css";
import myContacts from "./myContacts";

function Contact() {
  return (
    <section id="contact-section">
      <div className="center in-front">
        <h1>Let's work together</h1>
        <p className="trans-bold">Contact me</p>
      </div>
      <div className="contact-icons">
        {myContacts.map((con, index) => {
          return (
            <a
              href={con.url}
              target="_blank"
              className="contact-text"
              key={con.name + index}
            >
              <img className="icon" src={con.img} alt={con.name + "-icon"} />
              {con.name}
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
