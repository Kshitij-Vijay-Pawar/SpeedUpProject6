import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { th1, th2, th3 } from "../assets/assets.js";

const Projects = () => {
  const projects = [
    {
      title: "Accentra – Language Learning App",
      desc: "A Duolingo-like full stack language learning app built with React, Node.js, Express, and PostgreSQL.",
      img: th1,
      demo: "#",
      github: "#",
    },
    {
      title: "Authentication System",
      desc: "Secure authentication using JWT, bcrypt, and Node.js with elegant UI in React.",
      img: th2,
      demo: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      desc: "A modern and responsive portfolio website built using React and Bootstrap.",
      img: th3,
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-5 w-100" style={{ background: "#f8f9fa" }}>
      <div className="container">

        <h2 className="fw-bold text-center mb-4">
          My <span style={{ color: "#0d6efd" }}>Projects</span>
        </h2>

        <p className="text-center text-muted fs-5 mb-5">
          Some of the work I've built recently.
        </p>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card project-card h-100 shadow-sm">

                <img
                  src={project.img}
                  className="card-img-top "
                  alt={project.title}
                  
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted">{project.desc}</p>

                  <div className="mt-3 d-flex gap-2">
                    <a
                      href={project.demo}
                      className="btn btn-primary px-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="btn btn-outline-dark px-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
