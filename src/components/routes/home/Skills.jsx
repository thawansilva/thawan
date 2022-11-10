import React from "react";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="title">skills</h2>
        <p>Here are my skills as a Front end Developer</p>
        <div className="skills-cards grid">
          <div className="skill-card">
            <h4 className="title">html5</h4>
            <i className="fa-brands fa-html5"></i>
          </div>
          <div className="skill-card">
            <h4 className="title">css3</h4>
            <i className="fa-brands fa-css3-alt"></i>
          </div>
          <div className="skill-card">
            <h4 className="title">javascript</h4>
            <i className="fa-brands fa-js-square"></i>
          </div>
          <div className="skill-card">
            <h4 className="title">react</h4>
            <i className="fa-brands fa-react"></i>
          </div>
          <div className="skill-card">
            <h4 className="title">Git</h4>
            <i class="fa-brands fa-git-alt"></i>
          </div>
          <div className="skill-card">
            <h4 className="title">mobile-friendly</h4>
            <i className="fa-solid fa-mobile"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
