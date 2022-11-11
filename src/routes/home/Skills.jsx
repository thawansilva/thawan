import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";

export default function Skills() {
  const carousel = useRef();
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const cardSkills = [
    <>
      <h4 className="title">html5</h4>
      <i className="fa-brands fa-html5"></i>
    </>,
    <>
      <h4 className="title">css3</h4>
      <i className="fa-brands fa-css3-alt"></i>
    </>,
    <>
      <h4 className="title">javascript</h4>
      <i className="fa-brands fa-js-square"></i>
    </>,
    <>
      <h4 className="title">react</h4>
      <i className="fa-brands fa-react"></i>
    </>,
    <>
      <h4 className="title">Git</h4>
      <i className="fa-brands fa-git-alt"></i>
    </>,
    <>
      <h4 className="title">mobile-friendly</h4>
      <i className="fa-solid fa-mobile"></i>
    </>,
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="title">skills</h2>
        <p>Here are my skills as a Front end Developer</p>
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="skills-cards"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {cardSkills.map((card, item) => {
              return (
                <motion.div key={item} className="skill-card">
                  {card}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
