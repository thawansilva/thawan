import React from "react";
import "./home.css";
import thawan from "../../../assets/thawan.png";

export default function Showcase() {
  return (
    <>
      <section id="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h2>Thawan Silva</h2>
            <h1>The Front end Developer</h1>
            <p>I build interfaces and responsive websites</p>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/thawan-silva-a07b85229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/thawansilva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/1niLNnUSosag__Zeqg9aIafTc2eDbGy6q/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              CV Here
            </a>
          </div>
          <div className="showcase-img">
            <img loading="lazy" src={thawan} alt="thawan silva" />
          </div>
        </div>
      </section>
    </>
  );
}
