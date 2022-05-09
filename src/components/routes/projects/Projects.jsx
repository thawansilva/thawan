import React from "react";
import "./projects.css";
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
                  src="src/assets/project/chapadadiamantina.png"
                  alt="chapada diamantina"
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
                <img
                  loading="lazy"
                  src="src/assets/project/ecommerce.png"
                  alt="ecommerce"
                />
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
                  src="src/assets/project/facebookclone.png"
                  alt="facebook"
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
                  src="src/assets/project/parallax.png"
                  alt="parallax"
                />
              </div>
              <div className="card-text">
                <h3>Parallax</h3>
                <p>Simple Parallax website</p>
                <a
                  href="https://registroentrada.netlify.app/"
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
                  src="src/assets/project/bot.png"
                  alt="bot"
                />
              </div>
              <div className="card-text">
                <h3>Bot Landing Page</h3>
                <p>A simple and responsive landing page</p>
                <a
                  href="https://projetoform.netlify.app/"
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
                  src="src/assets/project/textanalyser.png"
                  alt="text analyser"
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
                  src="src/assets/project/register.png"
                  alt="register"
                />
              </div>
              <div className="card-text">
                <h3>Entry Register</h3>
                <p>Calculate the amount of people and cash</p>
                <a
                  href="https://registroentrada.netlify.app/"
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
                  src="src/assets/project/formulary.png"
                  alt="formulary"
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
