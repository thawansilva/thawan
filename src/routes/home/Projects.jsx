import products from "../../../data/projects.json";

export function Projects({ projectRef }) {
  const visibleProjects = products.filter(
    (item) => item.showOnLanding !== false,
  );

  return (
    <section className="py-16" ref={projectRef}>
      <div className="container mx-auto px-8 lg:px-20">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-3xl">
          Projects
        </h2>
        <p className="text-gray-400">Check out my latest personal projects.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col justify-between rounded-3xl border border-p-purple/60 bg-white/5 p-6 shadow-sm"
            >
              <div>
                {/* <img
                  loading="lazy"
                  src={item.urlImg}
                  alt={item.alt}
                  className="rounded-3xl object-fit"
                  width={300}
                  height={300}
                /> */}
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={item.urlGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl bg-gradient-to-r from-p-purple via-35% via-darkBlue to-p-blue px-5 py-3 font-semibold transition duration-200 ease-in hover:shadow-md hover:shadow-p-purple"
                >
                  Repository
                </a>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-3xl border border-white px-5 py-3 font-semibold transition duration-200 ease-in hover:shadow-md hover:shadow-p-purple"
                  >
                    Website
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
