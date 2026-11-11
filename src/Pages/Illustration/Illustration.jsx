import "../GraphicCategory.css";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const illustrationProjects = [
  {
    id: 1,
    title: "Nowruz 1404",
    year: "2026",
    image: "/images/graphic/nowruz-1405.jpg",
    description:
      "A personal illustration created to celebrate Nowruz 1405 and explore festive colors, composition, and Persian cultural elements.",
    role: "Personal Practice Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  {
    id: 2,
    title: "Eid al-Fitr",
    year: "2026",
    image: "/images/graphic/eid-al-fitr.jpg",
    description:
      "A personal illustration created for Eid al-Fitr as a creative exercise in Islamic-inspired visual elements, composition, and color.",
    role: "Personal Practice Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  {
    id: 3,
    title: "Afghan Girl Illustration",
    year: "2026",
    image: "/images/graphic/afghan-girl.jpg",
    description:
      "A personal illustration inspired by Afghan culture and identity, created to practice character illustration, color, and visual storytelling.",
    role: "Personal Practice Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  {
    id: 4,
    title: "Cartoon Illustration",
    year: "2026",
    image: "/images/graphic/cartoon-illustration.jpg",
    description:
      "A personal cartoon illustration created to practice character design, shapes, expressions, and digital illustration techniques.",
    role: "Personal Practice Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  {
    id: 5,
    title: "Taj Mahal & Mumtaz Mahal",
    year: "2026",
    image: "/images/graphic/taj-mahal-mumtaz-mahal.jpg",
    description:
      "A personal illustration inspired by the Taj Mahal and Mumtaz Mahal, created to practice historical and architectural illustration with character elements.",
    role: "Personal Practice Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },

  {
    id: 6,
    title: "Darul Aman Palace, Kabul",
    year: "2026",
    image: "/images/graphic/darul-aman-palace.jpg",
    description:
      "A personal architectural illustration of Darul Aman Palace in Kabul, created to practice perspective, architectural details, composition, and digital illustration.",
    role: "Personal Practice Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
];

function Illustration() {
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
          Illustration
        </h1>

        <p className="graphic-category-page-description">
          A collection of personal illustration projects created to
          strengthen my skills in digital illustration, character design,
          cultural themes, composition, and visual storytelling.
        </p>

      </div>

      {/* Personal Practice Note */}
      <div className="graphic-practice-note">

        <p className="graphic-practice-title">
          Personal Practice Projects
        </p>

        <p className="graphic-practice-description">
          These illustrations were created as personal projects for
          practice and skill development. They allowed me to explore
          different styles, subjects, cultural themes, composition,
          color, and digital illustration techniques.
        </p>

      </div>

      {/* Illustration Projects */}
      <div className="graphic-project-list">

        {illustrationProjects.map((project) => (
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

              {/* Project Type */}
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

export default Illustration;