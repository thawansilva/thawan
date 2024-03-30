import React, { useRef } from "react";
import { useEffect } from "react";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import Showcase from "./Showcase";

export function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div className="text-white bg-black font-poppins">
      <Navbar homeRef={homeRef} projectRef={projectRef} aboutRef={aboutRef} />
      <Showcase homeRef={homeRef} />
      <Projects projectRef={projectRef} />
      <AboutMe aboutRef={aboutRef} />
      <Contact />
      <Footer />
    </div>
  );
}
