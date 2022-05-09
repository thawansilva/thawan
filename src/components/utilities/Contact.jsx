import React from "react";
import "./utilities.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="title">Let's work together? :)</h2>
        <p className="subtitle">Contact me</p>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <button className="cta">Send email</button>
        </form>
      </div>
    </section>
  );
}
