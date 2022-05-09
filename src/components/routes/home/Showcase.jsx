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
                href="https://www.linkedin.com/in/thawan-silva-a07b85229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/thawansilva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/1tafe4w_tCsSymJrz7L64PSyo5HgB8qR0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              CV Here
            </a>
          </div>
          <div className="showcase-img">
            <img
              loading="lazy"
              src="src/assets/thawan.png"
              alt="thawan silva"
            />
          </div>
        </div>
      </section>
    </>
  );
}
