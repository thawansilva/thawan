import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="title">projects</h2>
        <p>Here are a few projects that I developed</p>
        <div className="cards grid">
          <div className="card">
            <img
              loading="lazy"
              src="src\assets\mookup\chapadadiamantina.png"
              alt="chapada diamantina"
            />
            <h4>Chapada Diamantina Website</h4>
            <p>
              Responsive website with contents about the Chapada Diamantina.
            </p>
            <a
              href="https://diamantina.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              See project
            </a>
          </div>
          <div className="card">
            <img
              loading="lazy"
              src="src\assets\mookup\ecommerce.png"
              alt="ecommerce"
            />
            <h4>eCommerce Website</h4>
            <p>Responsive eCommerce website about male and female clothes.</p>
            <a
              href="https://ecommerceclothes.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              See project
            </a>
          </div>
          <div className="card">
            <img
              loading="lazy"
              src="src\assets\mookup\facebookclone.png"
              alt="facebook clone"
            />
            <h4>Facebook Clone</h4>
            <p>Responsive Facebook login clone made with HTML and CSS.</p>
            <a
              href="https://facebookproject.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              See project
            </a>
          </div>
        </div>
        <Link to="/projects" className="cta">
          All my projects
        </Link>
      </div>
    </section>
  );
}
