import React, { useEffect } from "react";
import "./projects.css";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import AllProjects from "./AllProjects";

export function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <AllProjects />
      <Contact />
      <Footer />
    </>
  );
}
