import React from "react";
import { useEffect } from "react";
import Contact from "../../components/utilities/Contact";
import Footer from "../../components/utilities/Footer";
import Navbar from "../../components/utilities/Navbar";
import AboutMe from "./AboutMe";
import { Projects } from "./Projects";
import Showcase from "./Showcase";
import Skills from "./Skills";

export function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Showcase />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
