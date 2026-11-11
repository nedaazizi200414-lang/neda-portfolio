import React from "react";
import "./Experience.css";

const experiences = [
  {
    date: "May 2025",
    title: "Graphic Designer",
    company: "AUREVAELIXIRS",
    type: "Remote",
    description: "Designed 3 product labels for cosmetic products, creating visually appealing designs aligned with the brand."
  },
  {
    date: "July 2025",
    title: "Freelance Graphic Designer",
    company: "Alef - Web Developer Platform",
    type: "Remote 1-week project",
    description: "Created 3 distinct logo concepts for a technology-based application, offering different visual directions for the brand identity.",
  },
  {
    date: "September 2025",
    title: "Freelance Graphic Designer",
    company: "Easy Learning YouTube Channel",
    type: "Remote 3-day project",
    description: "Designed 3 distinct logo concepts for an English-learning YouTube channel, providing different visual directions for its brand identity.",
  },
   {
    date: "April 2024",
    title: "Volunteer Graphic Designer",
    company: "Nesaa Educational Organization",
    type: "Kabul, Afghanistan",
    description: "Designed 2 logos and 1 promotional poster for the organization's educational programs.",
  },
   {
    date: "June 2024",
    title: "Graphic Designer",
    company: "Private Elementary School",
    type: "Kabul, Afghanistan",
    description: "Created 2 appreciation certificate designs for Grade 1 students to recognize their academic efforts and encourage motivation.",
  },
  ];
  const Experience=() =>{
    return(
      <section className="experience" id="experience">
        <div className="experience-container">
          <div className="experience-heading">
            <span className="section-tag">MY JOURNEY</span>
            <h2>
              Work<span>Experience</span>
            </h2>
            <p>
              A selection of my graphic design projects and professional experiences.
            </p>
          </div>
          <div className="experience-timeline">
            {experiences.map((experience, index)=>(
            <div className="experience-item" key={index}>
            <div className="experience-date">
              {experience.date}
            </div>
            <div className="experience-dot"></div>
            <div className="experience-card">
            <span className="experience-type">{experience.type}
            </span>
            <h3>{experience.title}</h3>
            <h4>{experience.company}</h4>
            <p>{experience.description}</p>
            </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      );
  };
  export default Experience;