import "../GraphicCategory.css";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const brandIdentityProjects = [
  {
    id: 1,
    title: "Golden Key Property",
    year: "2026",
    image: "/images/graphic/golden-key-property.png",
    description:
      "A complete brand identity concept created for Golden Key Property, focusing on a professional, trustworthy, and memorable visual presence.",
    role: "Brand Identity Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: 2,
    title: "Findaroo",
    year: "2026",
    image: "/images/graphic/findaroo-brand.jpg",
    description:
      "A brand identity concept for Findaroo, an e-commerce platform focused on great finds, value, and a friendly shopping experience.",
    role: "Brand Identity Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: 3,
    title: "Held by the Village",
    year: "2026",
    image: "/images/graphic/held-by-the-village.png",
    description:
      "A meaningful brand identity concept centered around community, care, mothers, and the idea of supporting the village together.",
    role: "Brand Identity Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: 4,
    title: "Candid Check",
    year: "2026",
    image: "/images/graphic/candid-check.png",
    description:
      "A brand identity concept for Candid Check, designed around a clear and modern visual system for smart testing and better matching.",
    role: "Brand Identity Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
];

function BrandIdentity() {
  return (
    <section className="graphic-category-page">
      <Link to="/graphic-design" className="graphic-back-button">
        <ArrowLeft size={17} />
        Back to Graphic Design
      </Link>

      <div className="graphic-category-header">
        <p className="graphic-category-label">Graphic Design</p>

        <h1 className="graphic-category-page-title">
          Brand Identity
        </h1>

        <p className="graphic-category-page-description">
          Brand identity projects that bring together logos, colors,
          typography, packaging, and visual elements.
        </p>
      </div>

      <div className="graphic-project-list">
        {brandIdentityProjects.map((project) => (
          <article
            key={project.id}
            className="graphic-project-card"
          >
            <div className="graphic-project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="graphic-project-image"
              />
            </div>

            <div className="graphic-project-info">
              <span className="graphic-project-year">
                {project.year}
              </span>

              <h2 className="graphic-project-title">
                {project.title}
              </h2>

              <p className="graphic-project-description">
                {project.description}
              </p>

              <div className="graphic-project-details">
                <div className="graphic-project-detail">
                  <span>My Role:</span>
                  <span>{project.role}</span>
                </div>
              </div>

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

export default BrandIdentity;