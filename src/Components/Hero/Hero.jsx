import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Background Glow */}
      <div className="hero-glow hero-glow-top"></div>
      <div className="hero-glow hero-glow-bottom"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1 className="hero-name">
            Neda <span>Azizi</span>
          </h1>

          <h2 className="hero-title">
            Front-End Web Developer
            <br />
            <span>& Graphic Designer</span>
          </h2>

          <p className="hero-description">
            I create modern, responsive websites and thoughtful
            visual designs that combine technology and creativity.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="/cv/Neda-Azizi-CV.pdf"
              download
              className="btn btn-primary"
            >
              Download CV
            </a>
         


          </div>

          {/* Social Links */}
          <div className="hero-social">

            <a href="https://github.com/nedaazizi200414-lang"
            target="_blank"
                rel="noopener noreferrer"
            >GitHub</a>

            <span></span>

            <a href="https://www.linkedin.com/in/neda-azizi"
            target="_blank"
                rel="noopener noreferrer"
            >LinkedIn</a>

            <span></span>

            <a href="mailto: nedaazizi200413@gmail.com">Email</a>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="hero-image-wrapper">

          <div className="hero-image-glow"></div>

          <div className="hero-image-box">

            <img
              src="/images/neda.png"
              alt="Neda Azizi"
            />

          </div>

          <div className="hero-image-border"></div>

        </div>

      </div>

    </section>
  );
}

export default Hero;