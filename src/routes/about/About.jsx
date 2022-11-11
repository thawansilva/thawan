import React, { useEffect } from "react";
import "./about.css";

import Navbar from "../../components/utilities/Navbar";
import Contact from "../../components/utilities/Contact";
import Footer from "../../components/utilities/Footer";
import ContentText from "./ContentAbout";

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <ContentText />
      <Contact />
      <Footer />
    </>
  );
}
