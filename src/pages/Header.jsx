import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
     
          <span>SSC</span>
       
      </div>

      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
         <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/cer" className="nav-link" onClick={closeMenu}>Certication</Link>
        <a href="#skill" className="nav-link" onClick={closeMenu}>Skills</a>
        <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
      </nav>

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
