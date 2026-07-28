import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import "./componentStyle.css";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 40);

      if (currentScroll > lastScroll && currentScroll > 120) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Experience",
      path: "/education",
    },
    {
      name: "Projects",
      path: "/project",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header
      className={`
        ${styles.header}
        ${scrolled ? styles.scrolled : ""}
        ${showNavbar ? styles.show : styles.hide}
      `}
    >
      <div className={styles.container}>
        {/* Logo */}

        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          <span>P</span>ankaj
        </NavLink>

        {/* Desktop Navigation */}

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeLink : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <a
            href="https://drive.google.com/file/d/1-2nO_HFDJloUbB5dxOSniH23V5SQayOr/view?usp=sharing"
            className={styles.resumeBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} />
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Overlay */}

      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </header>
  );
};

export default Navbar;
