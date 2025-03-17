import React from "react";
import "../styles/AboutUs.css";
import {
  Building2,
  Globe2,
  Users2,
  LineChart,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";

function AboutUs() {
  const teamMembers = [
    {
      name: "Ashan Perera",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      description: "Visionary leader with 10+ years in international trade",
    },
    {
      name: "Malini Fernando",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=400",
      description: "Expert in supply chain and export operations",
    },
    {
      name: "Rajitha Silva",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
      description: "Full-stack developer specialized in trade platforms",
    },
    {
      name: "Kumari Jayawardena",
      role: "Market Research Analyst",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      description: "Specialist in international market trends and analysis",
    },
    {
      name: "Dinesh Gunaratne",
      role: "Business Development Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      description: "Expert in business growth and international partnerships",
    },
    {
      name: "Priyanka De Silva",
      role: "Customer Success Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
      description: "Dedicated to ensuring client satisfaction and support",
    },
  ];
  const features = [
    {
      icon: <Globe2 className="icon" />,
      title: "Global Reach",
      description: "Connect with buyers and markets worldwide",
    },
    {
      icon: <LineChart className="icon" />,
      title: "Demand Analysis",
      description: "Real-time product demand insights across countries",
    },
    {
      icon: <Building2 className="icon" />,
      title: "Local Expertise",
      description: "Deep understanding of Sri Lankan manufacturing",
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="hero-section">
        <div className="hero-bg" />
        <div className="container">
          <h1 className="hero-title">
            Connecting Sri Lankan Excellence to
            <span className="hero-subtitle">Global Markets</span>
          </h1>
          <p className="hero-description">
            Your trusted platform for connecting Sri Lankan exporters and
            manufacturers with international opportunities
          </p>
        </div>
      </div>

     <div className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="icon-container">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="learn-more">
                  Learn More{" "}
                  <ArrowRight
                    className="icon"
                    style={{ width: "1rem", marginLeft: "0.5rem" }}
                  />
                </div>
              </div>
            ))}
          </div> 

          <div className="mission-card">
            <div className="icon-container" style={{ margin: "0 auto 2rem" }}>
              <Rocket className="section-icon" />
            </div>
            <h2 className="section-title">Our Mission</h2>
            <p className="section-description">
              To empower Sri Lankan businesses by providing comprehensive market
              insights and connecting them with global opportunities, fostering
              economic growth through digital innovation.
            </p>
          </div>
        </div>
      </div>

      <div className="team-section">
        <div className="container">
          <div className="icon-container" style={{ margin: "0 auto 3rem" }}>
            <Users2 className="section-icon" />
          </div>
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                  <div className="image-overlay" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <div className="mission-card">
            <div className="icon-container" style={{ margin: "0 auto 2rem" }}>
              <Code2 className="section-icon" />
            </div>
            <h2 className="section-title">Developed with Excellence</h2>
            <p className="section-description">
              Our platform is built by a dedicated team of Sri Lankan developers
              who combine technical expertise with deep understanding of
              international trade requirements. Using cutting-edge technology,
              we deliver a seamless experience for exporters and manufacturers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
