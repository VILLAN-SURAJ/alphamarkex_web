import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: "fas fa-bullhorn",
      title: "Digital Marketing",
      description: "Targeted campaigns including social media, SEO, and PPC to help you grow fast."
    },
    {
      icon: "fas fa-laptop-code",
      title: "Web Development", 
      description: "Clean, responsive websites that perform beautifully across all devices."
    },
    {
      icon: "fas fa-paint-brush",
      title: "Brand Design",
      description: "Visual identities, logos, and product packaging that speak your brand story."
    },
    {
      icon: "fas fa-camera-retro",
      title: "Photoshoots",
      description: "Professional photography for products, ads, and brand storytelling."
    },
    {
      icon: "fas fa-bullhorn",
      title: "Paid Advertisement",
      description: "Branded UGC and ad creatives that feel native, not salesy."
    },
    {
      icon: "fas fa-search",
      title: "SEO Optimization",
      description: "Boost your visibility with on-page, off-page, and technical SEO that drives organic traffic."
    },
    {
      icon: "fas fa-film",
      title: "Video Editing",
      description: "Dynamic, high-quality edits for reels, ads, and branded content that captivate your audience."
    },
    {
      icon: "fas fa-pen-nib",
      title: "Logo Designing",
      description: "Custom logo designs that reflect your brand's identity with creativity and clarity."
    }
  ];

  return (
    <div className="home">
      {/* Hero Image Section */}
      <div className="hero-container">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80" 
          alt="Mountain landscape" 
          className="hero-img" 
        />
      </div>

      {/* Main Content */}
      <main>
        <h1>Welcome to Alphamarkex</h1>
        <p>
          We provide a complete suite of branding, digital marketing, and advertising solutions 
          to elevate your business. Explore our expertise in every dimension of media and communication.
        </p>
      </main>

      {/* Service Cards */}
      <section className="card-section">
        {services.map((service, index) => (
          <div key={index} className="card">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Brand?</h2>
          <p>Let's work together to create something amazing for your business.</p>
          <div className="cta-buttons">
            <Link to="/book" className="btn btn-primary">Get Started</Link>
            <Link to="/portfolio" className="btn btn-secondary">View Portfolio</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
