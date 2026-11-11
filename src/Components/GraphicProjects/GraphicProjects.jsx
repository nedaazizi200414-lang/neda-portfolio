import "./GraphicProjects.css";
import { Link } from "react-router-dom";

const graphicCategories = [
  {
    id: 1,
    title: "Brand Identity",
    slug: "brand-identity",
    description:
      "Creative visual identities that build a strong and memorable brand.",
    image: "/images/graphic/brand-identity.png",
  },
  {
    id: 2,
    title: "Illustration",
    slug: "illustration",
    description:
      "Creative illustrations designed to communicate ideas through visuals.",
    image: "/images/graphic/illustration.png",
  },
  {
    id: 3,
    title: "Infographic",
    slug: "infographic",
    description:
      "Clear and engaging visual designs that make information easier to understand.",
    image: "/images/graphic/infographic.png",
  },
  {
    id: 4,
    title: "Logo Design",
    slug: "logo-design",
    description:
      "Unique and professional logos created to represent brands and businesses.",
    image: "/images/graphic/logo-design.png",
  },
  {
    id: 5,
    title: "Posters",
    slug: "posters",
    description:
      "Eye-catching poster designs created for events, campaigns, and promotions.",
    image: "/images/graphic/posters.png",
  },
];

function GraphicProjects() {
  return (
    <section className="graphic-projects" id="graphic-projects">
      <div className="graphic-projects-container">

        {/* HEADING */}
        <div className="graphic-projects-heading">
          <span>MY CREATIVE WORK</span>

          <h2>
            Graphic Design <strong>Categories</strong>
          </h2>

          <p>
            Explore my creative work across different areas of graphic design,
            from branding and logos to illustration and posters.
          </p>

          <div className="graphic-heading-line"></div>
        </div>

        {/* GRID */}
        <div className="graphic-projects-grid">

          {graphicCategories.map((category) => (
            <article
              className="graphic-project-card"
              key={category.id}
            >

              {/* NUMBER */}
              <div className="graphic-project-number">
                {String(category.id).padStart(2, "0")}
              </div>

              {/* IMAGE */}
              <div className="graphic-project-image">
                <img
                  src={category.image}
                  alt={category.title}
                />

                <div className="graphic-image-overlay">
                  <Link
                    to={`/graphic-design/${category.slug}`}
                    aria-label={`View ${category.title}`}
                  >
                    More
                  </Link>
                </div>
              </div>

              {/* CONTENT */}
              <div className="graphic-project-content">

                <span className="graphic-category">
                  Graphic Design
                </span>

                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <Link
                  to={`/graphic-design/${category.slug}`}
                  className="graphic-more-button"
                >
                  More
                  <span>→</span>
                </Link>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default GraphicProjects;