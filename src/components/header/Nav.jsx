import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const navItems = [
  { path: '/', text: 'Home' },
  { path: '/services', text: 'Services' },
  { path: '/projects', text: 'Projects' },
  { path: '/team', text: 'C Level Team' },
  { path: '/about', text: 'About' },
  { path: '/blog', text: 'Blog' },
  { path: '/contact', text: 'Contact' }
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('#');
  const [isLoggedIn] = useState(false);

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  const handleLogout = () => {
  };

  return (
    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={activeNav === item.path ? 'active' : ''}
              onClick={() => handleNavClick(item.path)}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(Nav);
