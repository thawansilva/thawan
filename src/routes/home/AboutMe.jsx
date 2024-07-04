import React from "react";

export function AboutMe({ aboutRef }) {
  return (
    <>
      <section ref={aboutRef}>
        <div className="container pl-8 pr-16 mx-auto">
          <div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl xl:ml-6">
              About Me
            </h2>
            <p className="xl:ml-6">
              My story in frontend development starts in 2021, when I started
              studying HTML, CSS and Javascript. And ever since, I've been
              creating projects for practicing my skills and learning new stacks
              like React, TailwindCSS. <br /> I’m a blend of introvert and
              extrovert, with a passion for playing guitar, samba, travel and
              immersing myself in diverse cultures. Friends often describe me as
              charismatic, energetic, and full of cheer. Whether it's through
              code or conversation, I love connecting with new people and
              sharing my enthusiasm for life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
