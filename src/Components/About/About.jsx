import "./About.css";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa";
function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-heading">
          <p className="section-label">
            GET TO KNOW ME
          </p>
          <h2>About 
          <span>Me</span>
          </h2>
          <div className="section-line"></div>
        </div>
        {/* About Content */}
        <div className="about-content">
        {/* Text */}
        <div className="about-text">
          <h3>
            Building digital experiences with
            <span> creativity & technology.</span>
          </h3>
          <p>
              I'm Neda Azizi, a Front-End Web Developer and Graphic
              Designer passionate about creating modern, responsive,
              and visually engaging digital experiences.
            </p>
              <p>
              I enjoy combining creativity with technology to design
              websites and visual identities that are both functional
              and meaningful. I continuously learn new tools and
              technologies to improve my skills and create better work.
            </p>
        </div>
        {/* Cards */}
        <div className="about-cards">
        <div className="about-card">
          <div className="about-icon">
            <FaCode />
          </div>
          <div>
                <h4>Web Development</h4>
                <p>
                  Creating responsive and modern websites using
                  front-end technologies.
                </p>
              </div>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <FaPalette />
              </div>

              <div>
                <h4>Graphic Design</h4>
                <p>
                  Designing creative visual content, branding,
                  and professional digital designs.
                </p>
              </div>
            </div>


            <div className="about-card">
              <div className="about-icon">
                <FaRocket />
              </div>

              <div>
                <h4>Continuous Learning</h4>
                <p>
                  Always learning new technologies and improving
                  my creative and technical skills.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;