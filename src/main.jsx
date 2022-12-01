import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Projects } from "./routes/projects/Projects";
import "./index.css";
import { About } from "./routes/about/About";
import { Homepage } from "./routes/home/Homepage";
import SucessForm from "./routes/sucess/Sucess";
import NotFound from "./routes/NotFound/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="sucess" element={<SucessForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
