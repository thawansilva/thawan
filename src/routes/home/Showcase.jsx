import thawan from "/img/thawan/thawan.png";
import thawanMd from "/img/thawan/thawan-md.png";
import thawanLg from "/img/thawan/thawan-lg.png";

export default function Showcase({ homeRef }) {
  return (
    <>
      <section className="py-16" ref={homeRef}>
        <div className="container px-8 mx-auto">
          <div className="items-center justify-around md:flex">
            <div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-p-blue via-30% via-darkBlue to-p-purple lg:text-5xl md:text-4xl">
                Hello, I'm Thawan,
              </h1>
              <h2 className="text-3xl lg:text-4xl">Software Engineer</h2>
              <p className="mt-2 mb-4 text-xl text-gray-400">
                I build interfaces and responsive websites
              </p>
              <a
                href="/files/CVThawan.pdf"
                download="Thawan's CV"
                className="font-bold rounded-3xl py-3 px-5 bg-gradient-to-r from-p-purple via-35% via-darkBlue to-p-blue hover:shadow-darkBlue hover:shadow-md transition duration-150 ease-in"
              >
                Download CV
              </a>
            </div>
            <div className="lg:place-self-center">
              <img
                src={thawan}
                loading="lazy"
                className="mx-auto sm:hidden"
                alt="thawan silva"
                width={308}
                height={287}
              />
              <img
                src={thawanMd}
                loading="lazy"
                className="hidden mx-auto sm:block lg:hidden"
                alt="thawan silva"
                width={452}
                height={423}
              />
              <img
                src={thawanLg}
                loading="lazy"
                className="hidden mx-auto lg:block"
                alt="thawan silva"
                width={375}
                height={348}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
