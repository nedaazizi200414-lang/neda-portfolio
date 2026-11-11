import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-heading">
          <span className="contact-tag">GET IN TOUCH</span>

          <h2>
            Let's <span>Work Together</span>
          </h2>

          <p>
            Have a project in mind or want to work together?
            Feel free to get in touch with me.
          </p>
        </div>

        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-info">

            <div className="contact-card">
              <span className="contact-card-label">EMAIL</span>
              <a href="mailto:nedaazizi200413@gmail.com">
                nedaazizi200413@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <span className="contact-card-label">LOCATION</span>
              <p>Kabul, Afghanistan</p>
            </div>

            <div className="contact-card">
              <span className="contact-card-label">LINKEDIN</span>
              <a
                href="https://www.linkedin.com/in/neda-azizi"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/neda-azizi
              </a>
            </div>

            <div className="contact-card">
              <span className="contact-card-label">GITHUB</span>
              <a
                href="https://github.com/nedaazizi200414-lang"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/nedaazizi200414-lang
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <form className="contact-form">

            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                />
              </div>

            </div>

            <div className="contact-field">
              <label htmlFor="subject">Subject</label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project subject"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;