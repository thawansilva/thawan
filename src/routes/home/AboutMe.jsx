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
              Hello! I’m a 24-year-old from the vibrant state of Roraima in
              Brazil. Since 2021, I've been diving deep into the world of
              Software Engineering, constantly honing my skills and creating
              exciting projects. <br /> I’m a blend of introvert and extrovert,
              with a passion for playing the guitar, exploring new destinations,
              and immersing myself in diverse cultures. Friends often describe
              me as charismatic, energetic, and full of cheer. Whether it's
              through code or conversation, I love connecting with new people
              and sharing my enthusiasm for life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
