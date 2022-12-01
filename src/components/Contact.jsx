import React from "react";
import Form from "./Formulary/Form";
import "./utilities.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="title">Let's work together? :)</h2>
        <p className="subtitle">Contact me</p>
        <Form />
      </div>
    </section>
  );
}
