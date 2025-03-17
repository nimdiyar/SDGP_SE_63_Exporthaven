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
    </div>

  );
}

export default AboutUs;
