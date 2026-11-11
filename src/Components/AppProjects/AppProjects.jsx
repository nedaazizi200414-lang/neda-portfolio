import React from "react";
import "./AppProjects.css";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: "01",
    title: "AT Organization",
    description:
      "A modern and responsive organization website designed with clean HTML and CSS.",
    technologies: ["HTML5", "CSS3"],
    image: "/images/at-organization.png",
    link: "https://nedaazizi200414-lang.github.io/Neda-Azizi-Final-Project/neda.html",
  },
  {
    id: "02",
    title: "JavaScript Calculator",
    description:
      "An interactive calculator built with JavaScript for performing calculations quickly and easily.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    image: "/images/calculator.png",
    link: "https://nedaazizi200414-lang.github.io/uca-project/",
  },
  {
    id: "03",
    title: "Dior Store",
    description:
      "A modern luxury online store with a responsive interface built using Tailwind CSS.",
    technologies: ["Tailwind CSS", "JavaScript"],
    image: "/images/dior-store.png",
    link: "https://nedaazizi200414-lang.github.io/Dior-store/#contact",
  },
  {
    id: "04",
    title: "DoctorCare",
    description:
      "A modern healthcare web application for finding doctors and managing appointments.",
    technologies: ["React.js", "JavaScript", "API"],
    image: "/images/doctorcare.png",
    link: "https://nedaazizi200413-blip.github.io/DoctorCare-/#/",
  },
];

function AppProjects() {
  return (
    <section className="app-projects" id="app-projects">

      {/* Heading */}
      <div className="projects-heading">
        <span>My</span>
        <h2>App Projects</h2>

        <div className="heading-line"></div>

        <p>Some of my latest web development projects</p>
      </div>

      {/* Projects */}
      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.id}>

            {/* Number */}
            <div className="project-number">
              {project.id}
            </div>

            {/* Image */}
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />

              <div className="image-overlay">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="project-content">

              {/* Technologies */}
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span
                    className={`tech-tag tag-${index}`}
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3>{project.title}</h3>

              {/* Description */}
              <p>{project.description}</p>

              {/* Button */}
              <a
                className="view-project"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Project</span>
                <FiExternalLink />
              </a>

            </div>
          </div>
        ))}

      </div>

      {/* Dots */}
      <div className="project-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </section>
  );
}

export default AppProjects;