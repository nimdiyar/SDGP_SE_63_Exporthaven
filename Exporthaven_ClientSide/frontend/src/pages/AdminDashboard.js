import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "../styles/AdminDashboard.css";
import API_BASE_URL from "../utils/apiConfig";

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);
  const [ads, setAds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAdminDashboardData();
  }, []);

  const fetchAdminDashboardData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const { data: statsData } = await axios.get(
        `${API_BASE_URL}/api/admin/dashboard`,
        config
      );
      setStats(statsData);

      const [usersRes, adsRes] = await Promise.all([
        axios.get(`${API_BASE_URL}/api/admin/users`, config),
        axios.get(`${API_BASE_URL}/api/admin/ads`, config),
      ]);

      setUsers(usersRes.data);
      setAds(adsRes.data);
    } catch (error) {
      setError("Error fetching admin data.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleApproveAd = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${API_BASE_URL}/api/admin/ads/${id}/approve`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchAdminDashboardData();
      toast.success("Ad approved successfully!");
    } catch (error) {
      toast.error("Error approving ad.");
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE_URL}/api/admin/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchAdminDashboardData();
      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error("Error deleting user.");
    }
  };

  const handleRemoveAd = async (id) => {
    if (!window.confirm("Are you sure you want to remove this ad?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE_URL}/api/admin/ads/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchAdminDashboardData();
      toast.success("Ad removed successfully!");
    } catch (error) {
      toast.error("Error removing ad.");
    }
  };

  if (isLoading) return <p className="loading">Loading admin data...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-overview">
        <div className="overview-card">Total Users: {stats.totalUsers}</div>
        <div className="overview-card">Total Ads: {stats.totalAds}</div>
        <div className="overview-card">Total Orders: {stats.totalOrders}</div>
        <div className="overview-card">
          Pending Orders: {stats.pendingOrders}
        </div>
        <div className="overview-card">Pending Ads: {stats.pendingAds}</div>
      </div>

      <section>
        <h3>Manage Users</h3>
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.companyName || user.name || "N/A"}</td>
                <td>{user.email}</td>
                <td>{user.role || "N/A"}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDeleteUser(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3>Manage Ads</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Posted By</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ads.map((ad) => (
              <tr key={ad._id}>
                <td>{ad.title}</td>
                <td>
                  {ad.user?.companyName ||
                    ad.user?.name ||
                    ad.user?.contactPerson ||
                    "N/A"}
                </td>
                <td>{ad.status === "approved" ? "Approved" : "Pending"}</td>
                <td>
                  <button className="approve-btn" onClick={() => handleApproveAd(ad._id)}>
                    Approve
                  </button>
                  <button className="delete-btn" onClick={() => handleRemoveAd(ad._id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
