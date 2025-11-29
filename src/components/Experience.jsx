import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Experience = () => {
  const experienceList = [
    {
      role: "Full Stack Developer (Intern)",
      company: "Speedup Institute",
      duration: "2024 – Present",
      desc: "Developing full stack applications using React, Node.js, Express, and REST APIs. Built real projects like student portal and dashboards.",
    },
    {
      role: "Frontend Developer",
      company: "Freelance Projects",
      duration: "2023 – 2024",
      desc: "Designed modern UI/UX for websites, built responsive interfaces using React, Bootstrap, Tailwind, and improved client UI performance.",
    },
    {
      role: "AI & Data Science Student",
      company: "SPPU / Engineering",
      duration: "2021 – 2025",
      desc: "Worked on ML & AI projects like handwriting recognition, image colorization, and deep learning-based models.",
    },
  ];

  return (
    <section id="experience" className="py-5">
      <div className="container">

        <h2 className="fw-bold text-center mb-4">
          Experience <span style={{ color: "#0d6efd" }}>Timeline</span>
        </h2>

        <p className="text-center text-muted fs-5 mb-5">
          My professional journey and roles over the years.
        </p>

        <div className="timeline">
          {experienceList.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>

              <div className="timeline-content shadow-sm p-4 rounded">
                <h4 className="fw-bold">{exp.role}</h4>
                <h5 className="text-primary">{exp.company}</h5>
                <p className="text-muted mb-2">{exp.duration}</p>
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
