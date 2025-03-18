import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../utils/apiConfig";
import { Link } from "react-router-dom";

const ManufacturerListing = () => {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/users?role=manufacturer`);
        setManufacturers(res.data);
      } catch (error) {
        console.error("Error fetching manufacturers:", error);
      }
    };
    fetchManufacturers();
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-text mb-4 text-center">Manufacturer Listing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {manufacturers.map((man) => (
            <div key={man._id} className="bg-white rounded-xl shadow-md border border-border">
              <h3 className="text-2xl font-semibold text-white bg-primary p-4">{man.companyName}</h3>
              <Link to={`/public-profile/${man._id}`} className="block text-center py-3 bg-primary hover:bg-secondary text-white">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManufacturerListing;