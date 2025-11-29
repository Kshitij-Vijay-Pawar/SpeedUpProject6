import React from 'react'
import { profile } from '../assets/assets.js'

const Hero = () => {
  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-md-6">
            <h3 className="fw-semibold mb-2">Hi, I'm</h3>
            <h1 className="fw-bold display-4">
              Kshitij <span style={{ color: "#0d6efd" }}>Pawar</span>
            </h1>

            <h4 className="text-muted mb-4">
              Full Stack Developer • AI & Data Science Engineer
            </h4>

            <p className="fs-5">
              I build modern, fast, and scalable web applications using
              <strong> React, Node.js, Express</strong> and work with
              machine learning models to solve real-world problems.
            </p>

            <div className="mt-4">
              <a href="#projects" className="btn btn-primary btn-lg px-4 me-3">
                View Projects
              </a>

              <a href="#contact" className="btn btn-outline-primary btn-lg px-4">
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center mt-4 mt-md-0 h-100">
            <img
              src={profile}
              alt="Profile"
              
              style={{ Width: "380px" }}
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero