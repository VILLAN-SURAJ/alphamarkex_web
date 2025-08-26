import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const [currentSlides, setCurrentSlides] = useState({
    bags: 0,
    packaging: 0,
    photoshoot: 0,
    advertisement: 0
  });

  const portfolioData = {
    bags: [
      "/WhatsApp Image 2025-06-14 at 15.06.35_db1afa61.jpg",
      "/IMG-20250614-WA0039.jpg",
      "/SAVE_20250627_214627.jpg"
    ],
    packaging: [
      "/Noodles Cup Mockup.jpg",
      "/IMG-20250622-WA0012.jpg",
      "/cosmetic amber jar.png"
    ],
    photoshoot: [
      "/IMG_7293[2].JPG",
      "/IMG_7282.JPG",
      "/IMG_7141.JPG"
    ],
    advertisement: [
      "/10 (2).png",
      "/10 (3).png",
      "/10 (4).png"
    ]
  };

  const thumbnails = [
    "/thumb1.png",
    "/thumb2.png",
    "/thumb3.png",
    "/thumb4.png",
    "/10 (1).png",
    "/10 (5).png",
    "/10 (6).png",
    "/10 (7).png"
  ];

  const frameGallery = [
    "/Burgundy Indian Fashion Jewelry Shop Sale Facebook Post.png",
    "/img2.png",
    "/a7d71765-f25a-43cc-bb2d-2f1149431653.png",
    "/Words may wobble, laughs may rise, Truth in jokes, no disguise.png"
  ];

  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    services: '',
    about: ''
  });

  const handleSlideNavigation = (section, direction) => {
    setCurrentSlides(prev => {
      const newIndex = direction === 'next' 
        ? (prev[section] + 1) % portfolioData[section].length
        : (prev[section] - 1 + portfolioData[section].length) % portfolioData[section].length;
      
      return {
        ...prev,
        [section]: newIndex
      };
    });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzNWkh2Nl36k-Uq2hT9kgxnSTnWfut0MEaooIOkT1YUCXD_cB4qrKYxwOx9AxPaj7DtAA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
      });

      if (response.ok) {
        alert("✅ Thank you! Your message has been submitted.");
        setFormData({
          name: '',
          business: '',
          phone: '',
          services: '',
          about: ''
        });
      } else {
        alert("❌ Error submitting form. Please try again.");
      }
    } catch (error) {
      alert("❌ There was an error. Please try again.");
      console.error('Error:', error);
    }
  };

  const PortfolioSection = ({ title, section, images }) => (
    <section className="portfolio-section">
      <h2>{title}</h2>
      
      {/* Desktop Grid */}
      <div className="poster-grid">
        {images.map((image, index) => (
          <div key={index} className="poster">
            <img src={image} alt={`${title} ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="slider-wrapper">
        <button 
          className="nav-btn left" 
          onClick={() => handleSlideNavigation(section, 'prev')}
        >
          ‹
        </button>
        <div className="mobile-slider">
          <div 
            className="slider-container"
            style={{ transform: `translateX(-${currentSlides[section] * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="mobile-slide">
                <img src={image} alt={`${title} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <button 
          className="nav-btn right" 
          onClick={() => handleSlideNavigation(section, 'next')}
        >
          ›
        </button>
      </div>
    </section>
  );

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>TRANSFORM YOUR BRAND</h1>
          <p>
            AlphaMarkeX, the leading marketing company, helps brands thrive across all the platforms. 
            We prioritize creativity and results to push your brand toward sustainable growth.
          </p>
          <Link to="/book" className="btn btn-primary">Get a Quote</Link>
        </div>
        <div className="hero-image">
          <img src="/Alpha Frontv page.png" alt="Ad Campaign" />
        </div>
      </section>

      {/* Portfolio Sections */}
      <PortfolioSection 
        title="BAG" 
        section="bags" 
        images={portfolioData.bags}
      />
      
      <PortfolioSection 
        title="Packaging" 
        section="packaging" 
        images={portfolioData.packaging}
      />
      
      <PortfolioSection 
        title="Photoshoot" 
        section="photoshoot" 
        images={portfolioData.photoshoot}
      />
      
      <PortfolioSection 
        title="Advertisement" 
        section="advertisement" 
        images={portfolioData.advertisement}
      />

      {/* Thumbnails Section */}
      <section className="frame-success">
        <h2>Thumbnail</h2>
        <div className="thumbnail-gallery">
          {thumbnails.map((thumb, index) => (
            <div key={index} className="thumbnail-item">
              <img src={thumb} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Frame Your Success Gallery */}
      <section className="frame-success">
        <h2>FRAME YOUR SUCCESS</h2>
        <div className="gallery" id="frameGallery">
          {frameGallery.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Gallery ${index + 1}`}
              className={index === 0 ? 'big' : index % 3 === 0 ? 'wide' : ''}
            />
          ))}
        </div>
      </section>

      {/* Video Section */}
      <div className="video-section">
        <h2>Video Advertisement</h2>
        <video controls>
          <source src="/WhatsApp Video 2025-08-17 at 13.40.43_327a743a.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Quote Form */}
      <section className="quote-section">
        <h2>Get A Quote</h2>
        <form onSubmit={handleFormSubmit} className="quote-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleFormChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="business">Business Name</label>
              <input 
                type="text" 
                id="business" 
                name="business" 
                value={formData.business}
                onChange={handleFormChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleFormChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="services">Services You Need</label>
              <input 
                type="text" 
                id="services" 
                name="services" 
                value={formData.services}
                onChange={handleFormChange}
                required 
              />
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="about">Tell Us About Your Business</label>
              <textarea 
                id="about" 
                name="about" 
                rows="4" 
                value={formData.about}
                onChange={handleFormChange}
                required
              ></textarea>
            </div>
            
            <div className="form-group full-width">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;
