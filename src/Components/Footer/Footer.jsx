import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            Neda<span>.</span>
          </h2>

          <p>
            Graphic Designer & Web Developer
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#apps">Apps</a>
          <a href="#design">Design</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Neda Azizi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;