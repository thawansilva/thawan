import React from "react";
import "./about.css";
import thawan2 from "../../../assets/thawan2.png";
export default function About() {
  return (
    <>
      <section id="about">
        <div className="container grid">
          <div className="about-text">
            <h1>about.</h1>
            <p>
              Since november of 2021, I've been addicted for build beautiful
              responsive interfaces. When I'm not coding, I will be playing
              guitar, cooking or watching series.
            </p>
          </div>
          <div className="about-img">
            <img loading="lazy" src={thawan2} alt="thawan silva" />
          </div>
        </div>
      </section>
      <section id="history">
        <div className="container">
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              My name is Thawan, I am 22 years old and I was born in Boa
              Vista/RR. I am a mix of introvert and extrovert person, who loves
              playing guitar, eating cake and watching sports. I also love
              traveling, meeting new places, people and cultures, it becomes me
              a better and open minded person. <br /> I am a sympathic,
              adventurous, communicative, collaborative, energetic, dreamer,
              determined, hardworking and responsible person, who love solving
              problems and challenges;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
