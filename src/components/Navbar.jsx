import React from "react";
import "./utilities.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="container flex">
        <h2 className="logo">Thawan Silva</h2>
        <nav>
          <ul className="links">
            <li className="list-item">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
