import React from 'react';
import './About.css';

const About = () => {
  const services = [
    {
      image: "/ChatGPT Image Jul 21, 2025, 01_04_22 PM.png",
      title: "Social Media Marketing",
      description: "Grow your audience with strategic content and consistent engagement."
    },
    {
      image: "/ad3.jpg",
      title: "Traditional Advertising",
      description: "Drive impact through TV, radio, print, and outdoor brand campaigns."
    },
    {
      image: "/ad2.png",
      title: "Campaigns (Email, Google, Audio/SMS)",
      description: "Targeted campaigns that deliver your message directly and effectively."
    },
    {
      image: "/ChatGPT Image Jul 21, 2025, 01_29_00 PM.png",
      title: "SEO",
      description: "Optimize your online presence with smart design and top Google rankings."
    },
    {
      image: "/ChatGPT Image Jul 21, 2025, 01_35_14 PM.png",
      title: "Website",
      description: "Design high-performing websites that convert visitors into loyal customers."
    },
    {
      image: "/IMG_7282.JPG",
      title: "Photoshoot",
      description: "Professional photography that elevates your brand's visual storytelling."
    },
    {
      image: "/ChatGPT Image Jul 19, 2025, 02_33_30 PM.png",
      title: "Branding",
      description: "Craft a powerful identity that reflects your values and sets you apart."
    },
    {
      image: "/Noodles Cup Mockup.jpg",
      title: "Packaging Designing",
      description: "Design packaging that attracts, communicates, and sells your product."
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="brand-hero">
        <h1>About AlphaMarkeX</h1>
        <p>
          At Alphamarkex, we are a performance-driven marketing firm dedicated to 
          helping brands grow with clarity, creativity, and conversion.
        </p>
      </section>

      {/* Our Story */}
      <div className="section">
        <h2>Our Story</h2>
        <p>
          In a world buzzing with brands, Alphamarkex was born not just to be another 
          marketing agency — but to become the alpha voice in the marketplace. Founded 
          with a fierce belief that every brand has a story worth telling, Alphamarkex 
          emerged from the fusion of creativity, data, and bold ambition. What started 
          as a small team of dreamers, designers, and digital strategists quickly grew 
          into a full-force branding and marketing agency — helping businesses of all 
          sizes amplify their identity, capture attention, and convert ideas into impact. 
          We are brand architects, growth hackers, and storytellers.
        </p>
      </div>

      {/* Vision and Mission Split Section */}
      <div className="split-section">
        <div 
          className="image" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80')"
          }}
        ></div>
        <div className="content">
          <h2>Our Vision</h2>
          <p>
            At Alphamarkex, we believe marketing is not just about visibility — it's 
            about direction, impact, and growth. In today's fast-moving world, where 
            businesses often overlook the connection between marketing and sales, we 
            bring the clarity that aligns both. Our vision is to deliver real marketing 
            — rooted in strategy, creativity, and purpose — while filtering out the 
            noise of unreliable providers.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to bridge the gap in the market by being a trusted partner, 
            offering authentic, result-driven services that truly help businesses grow. 
            We aim to build long-term relationships based on trust, performance, and 
            shared success. Just like a structure stands tall on strong foundations, 
            we support every client with passion, planning, and precision — the 3Ps 
            that define us.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="section">
        <h2>What We Offer</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <img src={service.image} alt={service.title} />
              <strong>{service.title}</strong><br />
              {service.description}
            </div>
          ))}
        </div>
      </div>

      {/* Introduction Video */}
      <div className="video-section">
        <h2>Introduction</h2>
        <video controls>
          <source src="/WhatsApp Video 2025-07-19 at 20.25.06_7347801a.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Newsletter */}
      <div className="newsletter">
        <h2>Join Our Newsletter</h2>
        <p>Stay updated with the latest insights and marketing tips.</p>
        <form onSubmit={handleNewsletterSubmit}>
          <input 
            type="email" 
            placeholder="Your Email" 
            required 
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default About;
