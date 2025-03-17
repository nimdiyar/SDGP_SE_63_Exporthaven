import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import API_BASE_URL from "../utils/apiConfig";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ totalUsers: 0, totalAds: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/admin/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(data);
      } catch (error) {
        toast.error("Failed to fetch dashboard data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white text-text p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-primary">
          <p className="text-sm">Total Users</p>
          <p className="text-2xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-primary">
          <p className="text-sm">Total Ads</p>
          <p className="text-2xl font-bold">{stats.totalAds}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;