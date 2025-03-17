import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "../styles/Home.css";
const Home = () => {
    // Placeholder images from a reliable CDN
    const images = {
      hero: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
      feature1:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
      feature2:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      feature3: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
      feature4: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
      business:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200",
      profile1:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      profile2:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      profile3:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
   
    };
    return(
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Connecting Sri Lankan Manufacturers and Exporters to the Global
                Market
              </h1>
              <p>
                Your trusted platform for international trade opportunities and
                business growth
              </p>
              <div className="hero-search">{/* <SearchBar /> */}</div>
              <div className="hero-stats">
                <div className="stat-item">
                  <h3>1000+</h3>
                  <p>Active Exporters</p>
                </div>
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Manufacturers</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Countries</p>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={images.hero} alt="Global Trade" />
            </div>
          </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose ExportHaven?</h2>
        <div className="features-grid">
          {[
            {
              icon: "🌐",
              title: "Global Reach",
              description:
                "Connect with buyers and sellers from over 50 countries",
            },
            {
              icon: "📊",
              title: "Market Insights",
              description: "Access real-time market data and trend analysis",
            },
            {
              icon: "🤝",
              title: "Verified Partners",
              description: "All businesses are verified for secure trading",
            },
            {
              icon: "💡",
              title: "Smart Matching",
              description:
                "AI-powered matching for better business connections",
            },
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          {[
            {
              image: images.profile1,
              name: "Amal Perera",
              role: "CEO, Lanka Exports",
              text: "ExportHaven has transformed how we connect with international buyers. Our export volume has grown by 150% since joining.",
            },
            {
              image: images.profile2,
              name: "Samantha Silva",
              role: "Director, Spice Trade Co",
              text: "The platform's market insights feature helps us make data-driven decisions. It's been invaluable for our business growth.",
            },
            {
              image: images.profile3,
              name: "Rajith Fernando",
              role: "Founder, Ceylon Craft",
              text: "Finding reliable manufacturers was a challenge until we discovered ExportHaven. Now we have partners we can trust.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>

      
      </div>
    );

export default Home;