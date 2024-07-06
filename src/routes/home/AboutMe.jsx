import React from "react";

export function AboutMe({ aboutRef }) {
  return (
    <>
      <section ref={aboutRef}>
        <div className="container px-8 mx-auto lg:px-20">
          <div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-3xl">
              About Me
            </h2>
            <div className="flex items-center justify-center">
              <div className="grid w-full grid-cols-9 max-w-7xl">
                {/* Stack 1 */}
                <div className="col-span-4 size-full">
                  <div className="p-2 bg-indigo-400 rounded-md size-full md:pl-4">
                    <p className="text-gray-100 sm:text-sm lg:text-base">
                      I had my first contact with coding through HTML and CSS;
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-1 size-full">
                  <div className="w-1 h-full bg-indigo-300"></div>
                  <div className="absolute z-10 flex items-center justify-center text-sm font-bold text-center text-white bg-indigo-400 rounded-full size-10">
                    2021
                  </div>
                </div>
                <div className="col-span-4 size-full"></div>
                {/* Stack 2 */}
                <div className="col-span-4 size-full"></div>
                <div className="flex items-center justify-center col-span-1 size-full">
                  <div className="w-1 h-full bg-indigo-300"></div>
                  <div className="absolute z-10 flex items-center justify-center text-sm font-bold text-center text-white bg-indigo-400 rounded-full size-10">
                    2022
                  </div>
                </div>
                <div className="col-span-4 size-full">
                  <div className="p-2 bg-indigo-400 rounded-md size-full md:pl-4">
                    <p className="text-gray-100 sm:text-sm lg:text-base">
                      I developed landing pages projects to practice my HTML and
                      CSS skills. I studied Javascript language and learned
                      about fetching API, and building personal projects on
                      parallel to consolidate my knowledge.
                    </p>
                  </div>
                </div>
                {/* Stack 3 */}
                <div className="col-span-4 size-full">
                  <div className="p-2 bg-indigo-400 rounded-md size-full md:pl-4">
                    <p className="text-gray-100 sm:text-sm lg:text-base">
                      I learned about of typescript, styling with TailwindCSS
                      and create CRUD application with Firebase, that allowed me
                      to create projects like L'originale and Shopping Cart
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-1 size-full">
                  <div className="w-1 h-full bg-indigo-300"></div>
                  <div className="absolute z-10 flex items-center justify-center text-sm font-bold text-center text-white bg-indigo-400 rounded-full size-10">
                    2023
                  </div>
                </div>
                <div className="col-span-4 size-full"></div>
                {/* Stack 4 */}
                <div className="col-span-4 size-full"></div>
                <div className="flex items-center justify-center col-span-1 size-full">
                  <div className="w-1 h-full bg-indigo-300"></div>
                  <div className="absolute z-10 flex items-center justify-center text-sm font-bold text-center text-white bg-indigo-400 rounded-full size-10">
                    2024
                  </div>
                </div>
                <div className="col-span-4 size-full">
                  <div className="p-2 bg-indigo-400 rounded-md size-full md:pl-4">
                    <p className="text-gray-100 sm:text-sm lg:text-base">
                      I did the Introduction to Computer Science by Harvard
                      University, where I learned how to think algorithmically
                      and solve programming problems, important concepts like
                      security, resource management, software engineering and
                      familiarity with languages, including C, Python and SQL.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <p className="xl:ml-6">
              My story in frontend development starts in 2021, I’m a blend of introvert and
              extrovert, with a passion for playing guitar, samba, travel and
              immersing myself in diverse cultures. Friends often describe me as
              charismatic, energetic, and full of cheer. Whether it's through
              code or conversation, I love connecting with new people and
              sharing my enthusiasm for life.
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}
