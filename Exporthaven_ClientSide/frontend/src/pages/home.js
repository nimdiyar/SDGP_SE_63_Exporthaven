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


export default Home;