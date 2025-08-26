import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/design">Our Design</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/book">Book Your Service</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#social-media">Social Media Advertising</a></li>
            <li><a href="#traditional">Traditional Advertising</a></li>
            <li><a href="#campaigns">Marketing Campaigns</a></li>
            <li><a href="#social-handling">Social Media Handling</a></li>
            <li><a href="#web-seo">Web & SEO Solutions</a></li>
            <li><a href="#website">Website</a></li>
            <li><a href="#photoshoot">Photoshoot</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Contact</h4>
          <p>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=team@alphamarkex.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              team@alphamarkex.com
            </a>
          </p>
          <p>
            <a href="tel:+919235860901">
              +91 9235860901
            </a>
          </p>
          <div className="social-icons">
            <a 
              href="https://www.instagram.com/alphamarkex/?__pwa=1" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="https://x.com/AlphaMarkex" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter/X"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61574942258668" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href="https://www.youtube.com/@AlphaMarkeX" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a 
              href="https://wa.me/919235860901" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        &copy; 2025 Alphamarkex. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
