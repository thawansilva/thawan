import React from "react";
import { Link } from "react-router-dom";
import diamantina from "../../../assets/mookup/chapadadiamantina.png";
import ecommerce from "../../../assets/mookup/ecommerce.png";
import randomuser from "../../../assets/mookup/randomuser.png";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="title">projects</h2>
        <p>Here are a few projects that I developed</p>
        <div className="cards grid">
          <div className="card">
            <img loading="lazy" src={randomuser} alt="random user image" />
            <h4>Random Users Filter</h4>
            <p>A application that filters the users by gender</p>
            <a
              href="https://randomusersfilter.netlify.app/"
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
              src={diamantina}
              alt="chapada diamantina image"
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
            <img loading="lazy" src={ecommerce} alt="ecommerce image" />
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
        </div>
        <Link to="/projects" className="cta">
          All my projects
        </Link>
      </div>
    </section>
  );
}
