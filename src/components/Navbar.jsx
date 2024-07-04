import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ aboutRef, projectRef, contactRef }) {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 60,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-10 px-6 py-4 bg-black/[0.9] shadow-sm shadow-white/[0.4]">
      <div className="w-4/5 sm:w-1/2 mx-auto max-w-[400px]">
        <nav className="">
          <ul className="flex items-center justify-around gap-5 lg:gap-7">
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
                About me
              </Link>
            </li>
            <li>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(contactRef.current);
                }}
                className="font-bold transition-all duration-150 ease-in hover:text-p-blue"
                to="/#contactRef"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
