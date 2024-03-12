// Nav.jsx
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            className={activeNav === "#" ? "active" : ""}
            onClick={() => handleNavClick("#")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={activeNav === "#services" ? "active" : ""}
            onClick={() => handleNavClick("#services")}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={activeNav === "#projects" ? "active" : ""}
            onClick={() => handleNavClick("#projects")}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={activeNav === "#about" ? "active" : ""}
            onClick={() => handleNavClick("#about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={activeNav === "#blog" ? "active" : ""}
            onClick={() => handleNavClick("#blog")}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activeNav === "#contact" ? "active" : ""}
            onClick={() => handleNavClick("#contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
