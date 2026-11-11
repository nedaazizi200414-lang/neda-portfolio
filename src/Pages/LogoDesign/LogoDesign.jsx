import "../GraphicCategory.css";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const logoProjects = [
  {
    id: 1,
    title: "Golden Key",
    year: "2026",
    image: "/images/graphic/golden-key.png",
    description:
      "A logo concept designed for Golden Key with a simple, professional, and memorable visual identity.",
    role: "Logo Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  {
    id: 2,
    title: "Findaroo",
    year: "2026",
    image: "/images/graphic/findaroo.png",
    description:
      "A modern logo concept for Findaroo, an e-commerce shopping platform designed with a clear and friendly digital identity.",
    role: "Logo Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  {
    id: 3,
    title: "Essay Learning",
    year: "2026",
    image: "/images/graphic/essay-learning.png",
    description:
      "An educational logo concept created for Essay Learning, an organization focused on learning and education.",
    role: "Logo Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  {
    id: 4,
    title: "Nessa Online Academy",
    year: "2026",
    image: "/images/graphic/nessa-online-academy.png",
    description:
      "A clean and educational logo concept for Nessa Online Academy, an online educational center.",
    role: "Logo Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  {
    id: 5,
    title: "Alef",
    year: "2026",
    image: "/images/graphic/alef.jpg",
    description:
      "A modern technology-focused logo concept created for Alef, a web development platform.",
    role: "Logo Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  {
    id: 6,
    title: "Goltina",
    year: "2026",
    image: "/images/graphic/goltina.png",
    description:
      "A beauty-focused logo concept created for Goltina, a beauty products brand.",
    role: "Logo Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
];

function LogoDesign() {
  return (
    <section className="graphic-category-page">

      {/* Back Button */}
      <Link
        to="/graphic-design"
        className="graphic-back-button"
      >
        <ArrowLeft size={17} />
        Back to Graphic Design
      </Link>

      {/* Page Header */}
      <div className="graphic-category-header">

        <p className="graphic-category-label">
          Graphic Design
        </p>

        <h1 className="graphic-category-page-title">
          Logo Design
        </h1>

        <p className="graphic-category-page-description">
          A selection of logo concepts and identity marks created for
          different brands, organizations, and digital projects.
        </p>

      </div>

      {/* Logo Projects */}
      <div className="graphic-project-list">

        {logoProjects.map((project) => (
          <article
            key={project.id}
            className="graphic-project-card"
          >

            {/* Project Image */}
            <div className="graphic-project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="graphic-project-image"
              />
            </div>

            {/* Project Content */}
            <div className="graphic-project-info">

              {/* Year */}
              <span className="graphic-project-year">
                {project.year}
              </span>

              {/* Title */}
              <h2 className="graphic-project-title">
                {project.title}
              </h2>

              {/* Description */}
              <p className="graphic-project-description">
                {project.description}
              </p>

              {/* Role */}
              <div className="graphic-project-details">

                <div className="graphic-project-detail">
                  <span>My Role:</span>
                  <span>{project.role}</span>
                </div>

              </div>

              {/* Tools */}
              <div className="graphic-project-tools">

                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="graphic-project-tool"
                  >
                    {tool}
                  </span>
                ))}

              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default LogoDesign;