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
  }