import React, { useEffect } from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Integrated Brand Management",
      description: "We craft your brand's voice and visuals to ensure consistency across all channels...",
      image: "/ChatGPT Image Jul 26, 2025, 07_01_24 PM.png"
    },
    {
      title: "Print Media",
      description: "From brochures and banners to exhibition graphics and flyers...",
      image: "/ads (2).jpg"
    },
    {
      title: "Traditional Marketing", 
      description: "We use data-driven strategies including Pamphlet, SMS and cold call...",
      image: "/ad3.jpg"
    },
    {
      title: "Social Media Marketing",
      description: "Build a loyal audience and convert followers into customers...",
      image: "/ChatGPT Image Jul 21, 2025, 01_04_22 PM.png"
    },
    {
      title: "Portfolio",
      description: "We design visually striking, strategically structured portfolios that showcase your brand's best with clarity and impact...",
      image: "/ChatGPT Image Jul 19, 2025, 02_33_30 PM.png"
    },
    {
      title: "Video Editing",
      description: "We turn raw footage into compelling stories using data-driven edits that captivate and convert...",
      image: "/ChatGPT Image Jul 21, 2025, 12_52_46 PM.png"
    },
    {
      title: "Landing Page",
      description: "Optimized, goal-focused landing pages designed using insights that drive user action...",
      image: "/ChatGPT Image Jul 21, 2025, 12_56_15 PM.png"
    },
    {
      title: "Packaging Design",
      description: "We blend market insights with creative design to craft packaging that attracts, engages, and sells...",
      image: "/Jul 21, 2025, 12_58_22 PM.png"
    },
    {
      title: "Paid Advertisement",
      description: "Data-driven ad campaigns across platforms that convert interest into action...",
      image: "/ChatGPT Image Jul 21, 2025, 01_02_03 PM.png"
    },
    {
      title: "Social Media Management",
      description: "We craft engagement through data-backed social media strategies tailored for growth and visibility...",
      image: "/ChatGPT Image Jul 21, 2025, 01_04_22 PM.png"
    },
    {
      title: "SEO",
      description: "We use data-driven SEO strategies including keyword research, backlink planning, and content optimization to boost visibility and ranking...",
      image: "/ChatGPT Image Jul 21, 2025, 01_29_00 PM.png"
    },
    {
      title: "Website",
      description: "We build conversion-focused websites using insights from user behavior, performance data, and design best practices...",
      image: "/ChatGPT Image Jul 21, 2025, 01_35_14 PM.png"
    },
    {
      title: "Thumbnails",
      description: "We create impactful thumbnails using proven design strategies and audience engagement insights to boost clicks and views...",
      image: "/ChatGPT Image Aug 14, 2025, 01_19_43 AM.png"
    }
  ];

  useEffect(() => {
    // Animate service sections on load
    const sections = document.querySelectorAll('.service-section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('animate');
      }, index * 100);
    });
  }, []);

  return (
    <div className="services">
      <main>
        <h1>Explore Our Services</h1>
        
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className={`service-section ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;
