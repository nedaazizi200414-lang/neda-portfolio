import "../GraphicCategory.css";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const infographicProjects = [
  {
    id: 1,
    title: "Ramadan Typography",
    year: "2026",
    image: "/images/graphic/ramadan-typography-1.jpg",
    description:
      "A personal typography project created for Ramadan, exploring Arabic lettering, composition, spacing, and a peaceful visual style.",
    role: "Personal Practice Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    category: "Typography",
  },

  {
    id: 2,
    title: "Ramadan Typography II",
    year: "2026",
    image: "/images/graphic/ramadan-typography-2.jpg",
    description:
      "A second personal Ramadan typography project created to practice expressive lettering, visual balance, composition, and decorative elements.",
    role: "Personal Practice Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    category: "Typography",
  },

  {
    id: 3,
    title: "6 Habits That Damage Your Brain",
    year: "2026",
    image: "/images/graphic/6-habits-damage-brain.jpg",
    description:
      "An educational infographic created to present six habits that can negatively affect the brain in a clear and visually engaging way.",
    role: "Personal Practice Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    category: "Infographic",
  },

  {
    id: 4,
    title: "How Can We Be a Good Graphic Designer?",
    year: "2026",
    image: "/images/graphic/good-graphic-designer.jpg",
    description:
      "An educational infographic exploring important habits, skills, and practices that can help designers improve their graphic design skills.",
    role: "Personal Practice Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    category: "Infographic",
  },
];

function InfographicTypography() {
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
          Infographic & Typography
        </h1>

        <p className="graphic-category-page-description">
          A collection of personal infographic and typography projects
          created to strengthen my skills in visual communication,
          typography, composition, information design, and creative
          presentation.
        </p>

      </div>

      {/* Personal Practice Note */}
      <div className="graphic-practice-note">

        <p className="graphic-practice-title">
          Personal Practice Projects
        </p>

        <p className="graphic-practice-description">
          These projects were created as personal work for practice and
          skill development. They allowed me to explore typography,
          information hierarchy, composition, visual storytelling, and
          clear communication through graphic design.
        </p>

      </div>

      {/* Projects */}
      <div className="graphic-project-list">

        {infographicProjects.map((project) => (
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

              {/* Category */}
              <div className="graphic-project-tools">
                <span className="graphic-project-tool">
                  {project.category}
                </span>
              </div>

              {/* Description */}
              <p className="graphic-project-description">
                {project.description}
              </p>

              {/* Project Details */}
              <div className="graphic-project-details">

                <div className="graphic-project-detail">
                  <span>Project Type:</span>
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

export default InfographicTypography;