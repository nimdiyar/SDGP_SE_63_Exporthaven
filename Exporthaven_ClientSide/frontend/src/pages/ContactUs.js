import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Building2, Clock } from "lucide-react";
import "../styles/ContactUs.css";

function ContactUs() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission
      console.log("Form submitted:", formData);
    };
  
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    return (
      <div className="contact-page">
        {/* Header Section */}
        <div className="ContactUs-header">
          <div className="ContactUs-header-content">
            <h1 className="ContactUs-header-title">Contact Us</h1>
            <p className="header-subtitle">
              Connect with Sri Lanka's Premier Export Platform
            </p>
          </div>
        </div>
         {/* Main Content */}
      <div className="main-content">
        <div className="grid-container">
          {/* Contact Information Cards */}
          <div className="info-cards">
            <div className="card accent-border">
              <div className="card-content">
                <Building2 className="card-icon" size={24} />
                <div>
                  <h3 className="card-title">Our Office</h3>
                  <p className="card-text">
                    World Trade Center, Colombo 01, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
            <div className="contactUs-card accent-border">
              <div className="card-content">
                <Clock className="card-icon" size={24} />
                <div>
                  <h3 className="card-title">Business Hours</h3>
                  <p className="card-text">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="card-text">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
            <div className="small-cards-grid">
              <div className="contactUs-card">
                <div className="card-content">
                  <Phone className="card-icon" size={20} />
                  <div>
                    <h3 className="card-title">Phone</h3>
                    <p className="card-text">+94 11 234 5678</p>
                  </div>
                </div>
              </div>

              <div className="contactUs-card">
                <div className="card-content">
                  <Mail className="card-icon" size={20} />
                  <div>
                    <h3 className="card-title">Email</h3>
                    <p className="card-text">info@sriexports.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contactUs-card">
              <div className="card-content">
                <MapPin className="card-icon" size={24} />
                <div>
                  <h3 className="card-title">Location</h3>
                  <p className="card-text">
                    Strategically located in the heart of Colombo's business
                    district, we're here to facilitate your export journey.
                  </p>
                </div>
              </div>
            </div>
    </div>
    {/* Contact Form */}
    <div className="contact-form">
            <h2 className="form-title">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                <Send size={20} />
                <span>Send Message</span>
              </button>
              </form></div>
    </div>
    </div>
    </div>
    );
  }
  export default ContactUs;