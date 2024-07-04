import React, { useEffect } from "react";

function Modal({ itemDetails, closeModal }) {
  window.onclick = function (event) {
    if (event.target.matches("#modal")) {
      closeModal();
    }
  };
  window.document.addEventListener(
    "keydown",
    (e) => e.key == "Escape" && closeModal(),
  );
  return (
    <div
      className="fixed top-0 z-20 w-full min-h-screen bg-black pt-14 bg-opacity-90"
      id="modal"
    >
      <div className="relative w-9/12 mx-auto bg-black rounded-xl outline outline-2 outline-gray-100">
        <button
          title="Close"
          tabIndex={1}
          className="absolute text-2xl top-2 right-1 md:right-3"
          onClick={() => closeModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex items-center text-sm md:text-base ">
          <div className="py-2 md:py-4 md:flex md:justify-center md:gap-10">
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
            <div className="px-8 my-2 overflow-auto md:w-2/5 md:px-0">
              <h2 className="text-2xl font-bold">{itemDetails.title}</h2>
              <p className="mt-1 mb-3">{itemDetails.subtitle}</p>
              <p className="hidden md:block">
                <span className="text-xl font-bold"> What I learned</span>{" "}
                <br />
                {itemDetails.learning}
              </p>
              <p className="mb-2 md:hidden">
                <span className="text-xl font-bold">Stacks</span> <br />
                {itemDetails.stacks}
              </p>
              <div className="mt-2 ml-1">
                <a
                  tabIndex={1}
                  href={itemDetails.urlGithub}
                  className="inline-block text-3xl transition duration-150 ease-in hover:text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    fill="currentColor"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
                <a
                  tabIndex={1}
                  href={itemDetails.url}
                  className="inline-block ml-3 text-3xl transition duration-150 ease-in hover:text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
