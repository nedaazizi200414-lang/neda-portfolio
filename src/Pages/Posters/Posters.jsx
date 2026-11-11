import "../GraphicCategory.css";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const posterProjects = [
  {
    id: 1,
    title: "Kiwi Juice",
    year: "2026",
    image: "/images/graphic/kiwi-juice-poster.png",
    description:
      "A personal juice poster created to practice product presentation, composition, typography, and fresh visual styling.",
    role: "Personal Practice Project",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
  },

  {
    id: 2,
    title: "Watermelon Juice",
    year: "2026",
    image: "/images/graphic/watermelon-juice-poster.png",
    description:
      "A personal juice poster designed to explore product advertising, visual composition, typography, and refreshing color combinations.",
    role: "Personal Practice Project",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
  },

  {
    id: 3,
    title: "Beautiful Nature View",
    year: "2026",
    image: "/images/graphic/beautiful-nature-view.jpg",
    description:
      "A personal poster inspired by nature, created to practice visual composition, image treatment, typography, and creating an attractive atmosphere.",
    role: "Personal Practice Project",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
  },

  {
    id: 4,
    title: "Golden Key Property",
    year: "2026",
    image: "/images/graphic/golden-key-property-poster.jpg",
    description:
      "A personal real estate poster created for Golden Key Property to practice promotional design, layout, typography, and professional visual presentation.",
    role: "Personal Practice Project",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
  },

  {
    id: 5,
    title: "Perfume Poster",
    year: "2026",
    image: "/images/graphic/perfume-poster.jpg",
    description:
      "A personal perfume advertising poster created to explore luxury product presentation, typography, composition, and visual atmosphere.",
    role: "Personal Practice Project",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
  },

  {
    id: 6,
    title: "Jewelry Poster",
    year: "2026",
    image: "/images/graphic/jewelry-poster.jpg",
    description:
      "A personal jewelry advertising poster designed to practice elegant product presentation, composition, typography, and luxury-focused visual design.",
    role: "Personal Practice Project",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
  },
];

function Posters() {
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
          Posters
        </h1>

        <p className="graphic-category-page-description">
          A collection of personal poster design projects created to
          strengthen my skills in advertising design, composition,
          typography, product presentation, and visual communication.
        </p>

      </div>

      {/* Personal Practice Note */}
      <div className="graphic-project-info">
        <p className="graphic-project-year">
          Personal Practice Projects
        </p>

        <p className="graphic-project-description">
          These posters were created as personal projects for practice and
          skill development. They allowed me to explore advertising,
          product presentation, typography, composition, image editing,
          and different visual styles.
        </p>
      </div>

      {/* Poster Projects */}
      <div className="graphic-project-list">

        {posterProjects.map((project) => (
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

              {/* Details */}
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

export default Posters;