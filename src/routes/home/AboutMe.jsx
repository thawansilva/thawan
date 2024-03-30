import React from "react";

export function AboutMe({ aboutRef }) {
  return (
    <>
      <section ref={aboutRef}>
        <div className="container px-8 mx-auto">
          <div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl xl:ml-6">
              About Me
            </h2>
            <p className="xl:ml-6">
              I am 24 years old, I am from Roraima state in Brazil, Since the
              end of 2021 I've been studying Software Engineering, building my
              own projects pursuing a constant improvement of my skills. <br />I
              am a mix of introvert and extrovert person, who loves playing
              guitar, travelling and meeting new people and cultures. Many
              people say that I am very charismatic, energetic and cheerful
              person.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
