import React from "react";
import "./utilities.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="title">Let's work together? :)</h2>
        <p className="subtitle">Contact me</p>
        <div className="social">
          <a href="mailto:twnpsilva@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/thawansilva/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
