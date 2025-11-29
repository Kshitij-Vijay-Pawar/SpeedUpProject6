import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 mt-5">
      <div className="container text-center text-md-start">

        <div className="row">

          {/* Brand */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
            <h3 className="fw-bold">
              Kshitij<span style={{ color: "#0d6efd" }}>.</span>
            </h3>
            <p>
              Full Stack Developer & AI Enthusiast  
              Crafting modern, fast, and responsive web applications.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#skills" className="text-white text-decoration-none">Skills</a></li>
              <li><a href="#projects" className="text-white text-decoration-none">Projects</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Contact</h5>
            <p className="mb-1">📍 Nashik, Maharashtra</p>
            <p className="mb-1">📞 +91 8149661601</p>
            <p>📧 kshitij.vijay.pawar@gmail.com</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center py-3 border-top border-secondary mt-3">
          © {new Date().getFullYear()} Kshitij Pawar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
