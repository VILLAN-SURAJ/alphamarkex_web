import React, { useState } from 'react';
import './Book.css';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    requirement: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby0N7fVlSCzOkbdx9-43KUedMV75Pg_8misNAFM7QlYHRQdkNnxFb3MsGUQpWcS1fOx/exec', {
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
          requirement: '',
          email: '',
          phone: '',
          budget: '',
          message: ''
        });
      } else {
        alert("❌ Error submitting form. Please try again.");
      }
    } catch (error) {
      alert("❌ There was an error. Please try again.");
      console.error('Error:', error);
    }
  };

  return (
    <div className="book">
      <main>
        <div className="contact-form-container">
          {/* Contact Info Section */}
          <div className="contact-info">
            <img src="/Untitled_design__3_-removebg-preview-removebg-preview.png" alt="Alphamarkex Logo" className="logo" />
            
            <h2>We'd love to hear from you</h2>
            <p>
              Whether you have a question, project, or partnership in mind — our team is ready to help.<br />
              Reach out through the form or use the contact details below.
            </p>

            <div className="contact-details">
              <p>
                <i className="fas fa-envelope"></i>
                <a href="mailto:team@alphamarkex.com">team@alphamarkex.com</a>
              </p>
              <p>
                <i className="fab fa-whatsapp"></i>
                <a href="tel:+919235860901">+91 9235860901</a>
              </p>
              <p>
                <i className="fab fa-instagram"></i>
                <a href="https://www.instagram.com/alphamarkex/" target="_blank" rel="noopener noreferrer">
                  @alphamarkex
                </a>
              </p>
            </div>
          </div>

          {/* Form Section */}
          <form className="quote-form" onSubmit={handleSubmit}>
            <h2>Get Your Quote</h2>
            
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <input
              type="text"
              name="business"
              placeholder="Your Business or Organization Name *"
              value={formData.business}
              onChange={handleChange}
              required
            />
            
            <select
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              required
            >
              <option value="">Requirement *</option>
              <option value="Branding">Branding</option>
              <option value="Marketing">Marketing</option>
              <option value="Event Planning">Event Planning</option>
              <option value="Advertising">Advertising</option>
              <option value="Web Development">Web Development</option>
              <option value="Social Media">Social Media</option>
              <option value="SEO">SEO</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Photography">Photography</option>
              <option value="Other">Other</option>
            </select>
            
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="">Your Budget *</option>
              <option value="Less than ₹10,000">Less than ₹10,000</option>
              <option value="₹10,000 - ₹50,000">₹10,000 - ₹50,000</option>
              <option value="Above ₹50,000">Above ₹50,000</option>
            </select>
            
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Book;
