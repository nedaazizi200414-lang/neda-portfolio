import "../GraphicCategory.css";
import { Link } from "react-router-dom";

const graphicCategories = [
  {
    id: 1,
    title: "Brand Identity",
    description:
      "Creative visual identities that build a strong and memorable brand.",
    image: "/images/graphic/brand-identity.png",
    path: "/graphic-design/brand-identity",
  },
  {
    id: 2,
    title: "Illustration",
    description:
      "Creative illustrations designed to communicate ideas through visuals.",
    image: "/images/graphic/illustration.png",
    path: "/graphic-design/illustration",
  },
  {
    id: 3,
    title: "Infographic & Typography",
    description:
      "Clear and engaging visual designs that make information easier to understand.",
    image: "/images/graphic/infographic.png",
    path: "/graphic-design/infographic",
  },
  {
    id: 4,
    title: "Logo Design",
    description:
      "Unique and professional logos created to represent brands and businesses.",
    image: "/images/graphic/logo-design.png",
    path: "/graphic-design/logo-design",
  },
  {
    id: 5,
    title: "Posters",
    description:
      "Eye-catching poster designs created for events, campaigns, and promotions.",
    image: "/images/graphic/posters.png",
    path: "/graphic-design/posters",
  },
];

function GraphicDesign() {
  return (
    <section className="min-h-screen bg-black px-6 py-24 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-yellow-400">
            Creative Work
          </p>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Graphic Design
          </h1>

          <p className="max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            A collection of my graphic design work, including logo design,
            illustration, brand identity, typography, infographics, and posters.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {graphicCategories.map((category) => (
            <article
              key={category.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-yellow-400/40"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image More */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
                  <Link
                    to={category.path}
                    className="rounded-full border border-yellow-400 px-6 py-3 text-sm font-medium text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                  >
                    More
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">

                <span className="text-xs uppercase tracking-[0.25em] text-yellow-400">
                  Graphic Design
                </span>

                <h2 className="mt-3 text-2xl font-semibold">
                  {category.title}
                </h2>

                <p className="mt-4 min-h-[72px] leading-7 text-gray-400">
                  {category.description}
                </p>

                <Link
                  to={category.path}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-yellow-400 transition-all group-hover:gap-3"
                >
                  More
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GraphicDesign;