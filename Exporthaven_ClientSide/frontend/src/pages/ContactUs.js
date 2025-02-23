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
    </div>
    );
  }