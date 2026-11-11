import "./Services.css";
import {
  FaPalette,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

function Services() {
  const services=[
   {
    icon: <FaPalette />,
    title: "Graphic Design",
    description: "Professional and visually engaging designs for branding, social media, and digital content.",
   },
   {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Building modern, responsive, and user-friendly websites using front-end technologies.",
    },
    {
      icon: <FaLaptopCode />,
      title: "UI Design",
      description:
        "Designing clean, intuitive, and visually appealing interfaces for websites and applications.",
    },
    ];
  return (
    <section id="services" className="services">
      <div className="services-container">
      <div className="section-heading">
        <p className="section-label">WHAT I DO</p>
          <h2>
            My <span>Services</span>
          </h2>
         <div className="section-line"></div>
        </div>
      <div className="services-grid">
        {services.map((service) => (
            <div className="service-card" key={service.title}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>
          ))}
          </div>

      </div>
    </section>
  );
}

export default Services;