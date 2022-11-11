import React, { useEffect } from "react";
import "./projects.css";
import Navbar from "../../components/utilities/Navbar";
import Contact from "../../components/utilities/Contact";
import Footer from "../../components/utilities/Footer";
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
