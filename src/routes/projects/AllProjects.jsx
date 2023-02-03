import projects from "../../../data/projects.json";

const AllProjects = () => {
  return (
    <section id="allprojects">
      <div className="container">
        <h1>projects.</h1>
        <p className="subtitle">Check out my latest personal projects.</p>
        <div className="grid">
          {projects.map((item, index) => (
            <div key={index} className="card-project">
              <div className="card-img">
                <img loading="lazy" src={item.urlImg} alt={item.alt} />
              </div>
              <div className="card-text">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta"
                >
                  See Project
                </a>
                <a
                  href={item.urlGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta"
                >
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
