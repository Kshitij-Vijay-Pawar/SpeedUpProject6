import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          Kshitij<span style={{ color: "#0d6efd" }}>.</span>
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link fs-5 mx-2" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5 mx-2" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5 mx-2" to="/skills">Skills</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5 mx-2" to="/projects">Projects</Link>
            </li>

            <li className="nav-item">
              <Link
                className="btn btn-primary text-white px-3 mx-2 fs-6 my-1"
                to="/contact"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
