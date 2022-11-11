import thawan2 from "../../assets/thawan2.png";
const ContentText = () => {
  return (
    <>
      <section id="about">
        <div className="container grid">
          <div className="about-text">
            <h1>about.</h1>
            <p>
              Since november of 2021, I've been addicted for build beautiful
              responsive interfaces.
            </p>
          </div>
          <div className="about-img">
            <img loading="lazy" src={thawan2} alt="thawan silva" />
          </div>
        </div>
      </section>
      <section id="history">
        <div className="container">
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              My name is Thawan, I am 23 years old and I was born in Boa
              Vista/RR. I am a mix of introvert and extrovert person, who loves
              playing guitar, travelling and meeting new people and cultures.
              Many people say that I am very charismatic, energetic and cheerful
              person.
            </p>
          </div>
          <div className="about-text">
            <h2>What have I done so far?</h2>
            <p>
              Since January I have been developing landing pages and static
              websites using HTML, CSS and TailwindCSS, and others projects
              using React and consuming API Rest services;
            </p>
          </div>
          <div className="about-text">
            <h2>What I am looking for?</h2>
            <p>
              My main objective is to have a first oportunity to show my skills
              in a professional experience and I am preparing myself for this;
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentText;
