import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
      e.preventDefault();
      // TODO: Implement subscription logic
      console.log("Subscribed with email:", email);
      setEmail("");
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section company-info">
                    <h2 className="footer-logo">ExportHaven</h2>
                        <p className="company-description">
                            Connecting manufacturers and exporters worldwide. Your trusted
                            platform for global trade opportunities.
                        </p>
                </div>

            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>
                        &copy; {new Date().getFullYear()} ExportHaven. All rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy-policy">Privacy</Link>
                        <Link to="/terms-of-service">Terms</Link>
                        <Link to="/sitemap">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
