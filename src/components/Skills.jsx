import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "bi bi-filetype-html" },
    { name: "CSS", icon: "bi bi-filetype-css" },
    { name: "JavaScript", icon: "bi bi-filetype-js" },
    { name: "React.js", icon: "bi bi-lightning-charge-fill" },
    { name: "Node.js", icon: "bi bi-terminal-fill" },
    { name: "Express.js", icon: "bi bi-gear-fill" },
    { name: "MongoDB", icon: "bi bi-database-fill" },
    { name: "Git & GitHub", icon: "bi bi-github" },
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container text-center">

        <h2 className="fw-bold mb-4">
          My <span style={{ color: "#0d6efd" }}>Skills</span>
        </h2>

        <p className="text-muted mb-5 fs-5">
          Technologies I work with to build modern and scalable applications.
        </p>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="p-4 bg-white shadow-sm rounded skill-card">
                <i className={`${skill.icon} fs-1 mb-3`}></i>
                <h5 className="fw-semibold">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
