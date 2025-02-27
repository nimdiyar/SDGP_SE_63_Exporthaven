import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../utils/apiConfig";

const ExporterAds = () => {
  const [ads, setAds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/ads/exporters`);
        setAds(response.data);
      } catch (err) {
        setError("Failed to fetch ads.");
      }
    };
    fetchAds();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Exporter Ads</h1>
      <ul>
        {ads.map((ad) => (
          <li key={ad._id}>{ad.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExporterAds;
