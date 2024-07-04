import React, { useRef } from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import { Skills } from "./Skills";
import Contact from "./Contact";

export function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="text-white bg-black font-poppins">
      <Link
        to="/#homeRef"
        title="Go to top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: homeRef.current.offsetTop - 80,
            left: 0,
            behavior: "smooth",
          });
        }}
        className="fixed z-10 rounded-full bottom-6 right-6 bg-gradient-to-r from-p-blue via-30% via-darkBlue to-p-purple size-10 md:size-12 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </Link>

      <Navbar
        projectRef={projectRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <Hero homeRef={homeRef} />
      <Skills />
      <Projects projectRef={projectRef} />
      <AboutMe aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}
