import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Apps", href: "#apps" },
    { name: "Design", href: "#design" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo">
          Neda<span>.</span>
        </a>

        <nav className="navbar-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mobile-link"
            onClick={closeMenu}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;