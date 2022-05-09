import React from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Showcase from "./Showcase";
import Skills from "./Skills";

export default function Homepage() {
  return (
    <>
      <Showcase />
      <AboutMe />
      <Projects />
      <Skills />
    </>
  );
}
