import React, { useEffect } from "react";
import "./about.css";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
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
