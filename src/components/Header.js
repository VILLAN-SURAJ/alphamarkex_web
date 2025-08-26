import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="logo" onClick={() => window.location.href = '/'}>
        <img src="/Untitled_design__3_-removebg-preview-removebg-preview.png" alt="Alphamarkex Logo" />
      </div>
      
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      
      <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link 
          to="/design" 
          className={location.pathname === '/design' ? 'active' : ''}
          onClick={closeMenu}
        >
          Our Design
        </Link>
        <Link 
          to="/portfolio" 
          className={location.pathname === '/portfolio' ? 'active' : ''}
          onClick={closeMenu}
        >
          Portfolio
        </Link>
        <Link 
          to="/services" 
          className={location.pathname === '/services' ? 'active' : ''}
          onClick={closeMenu}
        >
          Our Services
        </Link>
        <Link 
          to="/book" 
          className={location.pathname === '/book' ? 'active' : ''}
          onClick={closeMenu}
        >
          Book Your Service
        </Link>
        <Link 
          to="/blog" 
          className={location.pathname === '/blog' ? 'active' : ''}
          onClick={closeMenu}
        >
          Blogs
        </Link>
        <Link 
          to="/about" 
          className={location.pathname === '/about' ? 'active' : ''}
          onClick={closeMenu}
        >
          About Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
