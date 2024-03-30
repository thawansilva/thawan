import React from "react";

function Modal({ itemDetails, closeModal }) {
  return (
    <div className="fixed z-20 w-full min-h-screen bg-black top-[105px] sm:top-[66px]">
      <div className="container relative px-6 mx-auto">
        <button
          className="absolute text-2xl top-2 right-3"
          onClick={() => closeModal()}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div className="flex items-center">
          <div className="py-8 md:flex md:justify-center md:gap-10">
            <div className="md:w-2/5">
              <img
                src={itemDetails.urlImg}
                alt={itemDetails.alt}
                loading="lazy"
                className="w-[300px] mx-auto md:w-[420px]"
              />
              <p className="hidden mt-3 md:block">
                <span className="text-xl font-bold">Stacks</span> <br />
                {itemDetails.stacks}
              </p>
            </div>
            <div className="px-16 my-2 md:w-2/5 md:px-0">
              <h2 className="text-2xl font-bold">{itemDetails.title}</h2>
              <p className="mt-1 mb-3">{itemDetails.subtitle}</p>
              <p className="hidden md:block">
                <span className="text-xl font-bold"> What I learned</span>{" "}
                <br />
                {itemDetails.learning}
              </p>
              <p className="md:hidden">
                <span className="text-xl font-bold">Stacks</span> <br />
                {itemDetails.stacks}
              </p>
              <a
                href={itemDetails.urlGithub}
                className="mt-2 transition duration-150 ease-in hover:text-blue-400"
              >
                <i className="text-3xl fa-brands fa-github"></i>
              </a>
              <a
                href={itemDetails.url}
                className="mt-2 transition duration-150 ease-in hover:text-blue-400"
              >
                <i class="text-3xl fa-solid fa-desktop ml-3 "></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
