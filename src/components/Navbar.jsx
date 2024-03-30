import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ homeRef, aboutRef, projectRef }) {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 80,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-10 px-6 py-4 bg-black/[0.9] shadow-sm shadow-white/[0.4]">
      <div className="justify-between sm:flex sm:items-center">
        <div className="container mx-auto text-center sm:text-left">
          <div>
            <a
              className="text-3xl transition-all duration-150 ease-in hover:text-p-blue"
              href="https://www.linkedin.com/in/thawansilva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              className="ml-4 text-3xl transition-all duration-150 ease-in hover:text-p-blue"
              href="https://github.com/thawansilva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <nav className="mt-4 sm:mt-0">
          <ul className="flex items-center justify-around gap-5 lg:gap-7">
            <li>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(homeRef.current);
                }}
                className="font-bold transition-all duration-150 ease-in hover:text-p-blue"
                to="/#homeRef"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(projectRef.current);
                }}
                className="font-bold transition-all duration-150 ease-in hover:text-p-blue"
                to="/#projectRef"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(aboutRef.current);
                }}
                className="font-bold transition-all duration-150 ease-in hover:text-p-blue"
                to="/#aboutRef"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
