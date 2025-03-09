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
        </footer>
    );
};

export default Footer;
