import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import thawan2 from "../../../assets/thawan2.png";

export default function AboutMe() {
  return (
    <>
      <section id="aboutme">
        <div className="container grid">
          <div className="aboutme-img">
            <img loading="lazy" src={thawan2} alt="thawan silva" />
          </div>
          <div className="aboutme-text">
            <h2>Hi, I'm Thawan. It's a pleasure to meet you</h2>
            <p>
              I am 22 years old, I am from Roraima state in Brazil, Since the
              end of 2021 I've been studying and building own projects pursuing
              a constant improvement of my skills
            </p>
            <Link to="about" className="cta">
              Know more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
