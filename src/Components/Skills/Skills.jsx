import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiDjango,
} from "react-icons/si";

function Skills() {
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

  const toolsSkills = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <SiDjango /> },
  ];

  const designSkills = [
    {
      name: "Photoshop",
      icon: <img src="/icons/adobe-photoshop.svg" alt="Photoshop" />,
    },
    {
      name: "Illustrator",
      icon: <img src="/icons/adobe-illustrator.svg" alt="Illustrator" />,
    },
    {
      name: "Canva",
      icon: <img src="/icons/canva-icon.svg" alt="Canva" />,
    },
    {
      name: "Figma",
      icon: <img src="/icons/figma-svgrepo-com.svg" alt="Figma" />,
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="section-heading">
          <p className="section-label">MY SKILLS</p>

          <h2>
            Skills & <span>Tools</span>
          </h2>

          <div className="section-line"></div>
        </div>

        <div className="skills-group">
          <h3>Front-End Development</h3>

          <div className="skills-grid">
            {frontendSkills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-group">
          <h3>Tools & Technologies</h3>

          <div className="skills-grid">
            {toolsSkills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-group">
          <h3>Graphic Design</h3>

          <div className="skills-grid">
            {designSkills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;