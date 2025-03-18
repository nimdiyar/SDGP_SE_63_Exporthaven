import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../utils/apiConfig";
import { Link } from "react-router-dom";

const ExporterListing = () => {
  const [exporters, setExporters] = useState([]);

  useEffect(() => {
    const fetchExporters = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/users?role=exporter`);
        setExporters(res.data);
      } catch (error) {
        console.error("Error fetching exporters:", error);
      }
    };
    fetchExporters();
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-text mb-4 text-center">Exporter Listing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {exporters.map((exp) => (
            <div key={exp._id} className="bg-white rounded-xl shadow-md border border-border">
              <h3 className="text-2xl font-semibold text-white bg-primary p-4">{exp.companyName}</h3>
              <Link to={`/public-profile/${exp._id}`} className="block text-center py-3 bg-primary hover:bg-secondary text-white">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExporterListing;