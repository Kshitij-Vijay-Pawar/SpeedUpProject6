import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { about } from "../assets/assets.js";

const About = () => {
  return (
    <section id="about" className="py-5 w-100" style={{ background: "#f8f9fa" }}>
      <div className="container py-5">

        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src={about}
              alt="About"
              className="img-fluid rounded shadow about-img"
              style={{ borderRadius: "20px", width: "100%", maxWidth: "380px" }}
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="col-md-7">
            <h2 className="fw-bold mb-3">
              About <span style={{ color: "#0d6efd" }}>Me</span>
            </h2>

            <p className="fs-5 text-muted">
              I’m a Final-year **AI & Data Science Engineering** student and a
              passionate **Full Stack Developer** who loves building modern,
              responsive, and scalable web applications.
            </p>

            <p className="fs-5 text-muted">
              I specialize in **React, Node.js, Express**, and **Tailwind CSS**,
              and I enjoy working on real-world projects like language learning
              platforms, AI-based tools, and creative frontend designs.
            </p>

            <p className="fs-5 text-muted">
              I'm constantly improving my skills to build applications that feel
              smooth, work fast, and solve real problems.
            </p>

            <div className="mt-4">
              <a href="#projects" className="btn btn-primary px-4 me-3">
                View My Work
              </a>
              <a
                href="#contact"
                className="btn btn-outline-primary px-4"
              >
                Hire Me
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
