import React from "react";
import Form from "../../components/Formulary/Form";

export default function Contact({ contactRef }) {
  return (
    <section className="py-24" ref={contactRef}>
      <div className="container px-2 mx-auto text-center">
        <h2 className="text-3xl font-bold md:text-3xl lg:text-4xl xl:ml-6">
          Let's work together? :)
        </h2>
        <p className="text-gray-400">Contact me</p>
        <Form />
      </div>
    </section>
  );
}
