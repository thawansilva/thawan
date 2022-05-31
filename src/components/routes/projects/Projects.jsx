import React from "react";
import "./projects.css";
import diamantina from "../../../assets/project/chapadadiamantina.png";
import ecommerce from "../../../assets/project/ecommerce.png";
import facebookclone from "../../../assets/project/facebookclone.png";
import textanalyser from "../../../assets/project/textanalyser.png";
import formulary from "../../../assets/project/formulary.png";
import randomuser from "../../../assets/project/randomuser.png";

export default function Projects() {
  return (
    <>
      <section id="allprojects">
        <div className="container">
          <h1>projects.</h1>
          <p className="subtitle">Check out my latest personal projects.</p>
          <div className="grid">
            <div className="card-project">
              <div className="card-img">
                <img
                  loading="lazy"
                  src={randomuser}
                  alt="chapada diamantina website image"
                />
              </div>
              <div className="card-text">
                <h3>Random Users Filter</h3>
                <p>Filter application made with React, Hooks and fetch API</p>
                <a
                  href="https://randomusersfilter.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta"
                >
                  See Project
                </a>
              </div>
            </div>
            <div className="card-project">
              <div className="card-img">
                <img
                  loading="lazy"
                  src={diamantina}
                  alt="chapada diamantina website image"
                />
              </div>
              <div className="card-text">
                <h3>Chapada Diamantina</h3>
                <p>Chapada Diamantina website made with HTML and CSS</p>
                <a
                  href="https://diamantina.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta"
                >
                  See Project
                </a>
              </div>
            </div>
            <div className="card-project">
              <div className="card-img">
                <img loading="lazy" src={ecommerce} alt="ecommerce" />
              </div>
              <div className="card-text">
                <h3>eCommerce website</h3>
                <p>eCommerce made with HTML and CSS</p>
                <a
                  href="https://ecommerceclothes.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta"
                >
                  See Project
                </a>
              </div>
            </div>
            <div className="card-project">
              <div className="card-img">
                <img
                  loading="lazy"
                  src={facebookclone}
                  alt="facebook clone image"
                />
              </div>
              <div className="card-text">
                <h3>Facebook Clone</h3>
                <p>Facebook login clone made with HTML and CSS</p>
                <a
                  href="https://facebookproject.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta"
                >
                  See Project
                </a>
              </div>
            </div>
            <div className="card-project">
              <div className="card-img">
                <img
                  loading="lazy"
                  src={textanalyser}
                  alt="text analyser image"
                />
              </div>
              <div className="card-text">
                <h3>Text analyser</h3>
                <p>
                  Return the number of words, characters, vowels and consoants
                  in a text
                </p>
                <a
                  href="https://analisadortexto.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta"
                >
                  See Project
                </a>
              </div>
            </div>
            <div className="card-project">
              <div className="card-img">
                <img
                  loading="lazy"
                  src={formulary}
                  alt="formulary website image"
                />
              </div>
              <div className="card-text">
                <h3>Formulary</h3>
                <p>A formulary project</p>
                <a
                  href="https://formproject.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
