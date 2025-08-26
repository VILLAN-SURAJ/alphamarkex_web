import React, { useEffect } from 'react';
import './Design.css';

const Design = () => {
  const designCategories = [
    {
      title: "Bags",
      description: "Our bag design exemplifies creativity and functionality, perfect for modern retail and promotions. Crafted with aesthetics and usability in mind, these designs boost brand recognition and appeal...",
      image: "/WhatsApp Image 2025-06-14 at 15.06.35_db1afa61.jpg",
      reverse: true
    },
    {
      title: "Packaging",
      description: "Our packaging designs blend innovation and identity. Whether it's eco-conscious materials or premium finishing, we create packages that protect and elevate your product presentation.",
      image: "/IMG-20250622-WA0010.jpg",
      reverse: true
    },
    {
      title: "Advertisement",
      description: "Striking and goal-driven, our ad creatives are designed to convert. With eye-catching visuals and strong messaging, our ad designs resonate across social, print, and digital platforms.",
      image: "/Artboard 13.jpg",
      reverse: false
    },
    {
      title: "Perfume",
      description: "From elegance to edge, our perfume branding and design combine sensory cues with luxury appeal. Every visual reflects the mood and identity of your fragrance brand.",
      image: "/cosmetic amber jar.png",
      reverse: false
    }
  ];

  useEffect(() => {
    // Animate design sections on load
    const sections = document.querySelectorAll('.design-row');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('animate');
      }, index * 200);
    });
  }, []);

  return (
    <div className="design">
      <main>
        <h1>Explore Our Designs</h1>

        <div className="design-grid">
          {designCategories.map((category, index) => (
            <div 
              key={index} 
              className={`design-row ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="design-card">
                <img 
                  src={category.image} 
                  alt={category.title}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x400?text=" + category.title;
                  }}
                />
              </div>
              <div className="design-description">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Design Showcase */}
        <section className="design-showcase">
          <h2>Our Design Philosophy</h2>
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h3>Creative Excellence</h3>
              <p>
                We believe that great design is more than just aesthetics—it's about creating 
                meaningful connections between brands and their audiences. Our design process 
                combines strategic thinking with creative execution to deliver solutions that 
                not only look exceptional but also drive results.
              </p>
            </div>
            <div className="philosophy-text">
              <h3>Brand Identity</h3>
              <p>
                Every design element we create is carefully crafted to reflect your brand's 
                unique personality and values. From color psychology to typography choices, 
                we ensure that every detail contributes to a cohesive and memorable brand experience.
              </p>
            </div>
            <div className="philosophy-text">
              <h3>Market Impact</h3>
              <p>
                Our designs are built to perform in the real world. We consider market trends, 
                target audience preferences, and competitive landscape to create designs that 
                not only stand out but also convert viewers into customers.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="design-cta">
          <div className="cta-content">
            <h2>Ready to Transform Your Brand's Visual Identity?</h2>
            <p>
              Let our design experts create stunning visuals that capture your brand's essence 
              and drive meaningful engagement with your audience.
            </p>
            <div className="cta-buttons">
              <a href="/book" className="btn btn-primary">Start Your Project</a>
              <a href="/portfolio" className="btn btn-secondary">View Portfolio</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Design;
