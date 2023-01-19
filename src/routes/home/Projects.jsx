import products from "../../../data/projects.json";
import React from "react";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="title">projects</h2>
        <p>Here are a few projects that I developed</p>
        <div className="cards grid">
          {products.map((item, index) => {
            return (
              index < 3 && (
                <div key={index} className="card">
                  <img loading="lazy" src={item.urlImg} alt={item.alt} />
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta"
                  >
                    See project
                  </a>
                </div>
              )
            );
          })}
        </div>
        <Link to="/projects" className="cta">
          All my projects
        </Link>
      </div>
    </section>
  );
}
