import React from "react";
import "./home.css";

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
                href="https://www.linkedin.com/in/thawansilva/"
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
            <a href="/files/CV.pdf" download="Thawan-CV.pdf" className="cta">
              CV Here
            </a>
          </div>
          <div className="showcase-img">
            <img loading="lazy" src="/img/thawan.png" alt="thawan silva" />
          </div>
        </div>
      </section>
    </>
  );
}
