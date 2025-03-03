import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../utils/apiConfig";
import { useAuth } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTrash,
  FaEdit,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import "../styles/AdDetails.css";

const AdDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [ad, setAd] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState("");
  const [isEditingStatus, setIsEditingStatus] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAdDetails();
  }, [id]);

  const fetchAdDetails = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      const adRes = await axios.get(`${API_BASE_URL}/api/ads/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAd(adRes.data);
      setImages(adRes.data.images || []);
    } catch (error) {
      setError("Failed to load ad details. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (direction) => {
    setSelectedImage((prevIndex) => {
      const newIndex =
        direction === "next"
          ? (prevIndex + 1) % images.length
          : (prevIndex - 1 + images.length) % images.length;
      return newIndex;
    });
  };

  const handleOrderRequest = async () => {
    if (!quantity || isNaN(quantity) || quantity <= 0) {
      toast.error("Please enter a valid quantity.");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_BASE_URL}/api/orders`,
        { adId: id, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Order request sent successfully!");
    } catch (error) {
      toast.error("Error sending order request. Please try again.");
    }
  };

  const handleDeleteAd = async () => {
    if (!window.confirm("Are you sure you want to delete this ad?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE_URL}/api/ads/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Ad deleted successfully!");
      navigate("/profile");
    } catch (error) {
      toast.error("Error deleting ad. Please try again.");
    }
  };

  const handleStatusEdit = async () => {
    try {
      const token = localStorage.getItem("token");
      const updateData = { status: newStatus };
      const res = await axios.put(`${API_BASE_URL}/api/ads/${id}`, updateData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAd(res.data);
      setIsEditingStatus(false);
      toast.success("Status updated successfully!");
    } catch (error) {
      toast.error("Error updating status. Please try again.");
    }
  };

  const showOrderButton =
    user && user.role === "manufacturer" && ad && ad.user && ad.user.role === "exporter";
  const showManagementButtons =
    user && ad && ad.user && ad.user._id.toString() === user._id.toString();

  if (isLoading) return <p>Loading ad details...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!ad) return <p>No ad found.</p>;

  return (
    <div className="ad-details-container">
      <div className="image-section">
        {images.length > 1 && (
          <button className="nav-button left" onClick={() => handleImageChange("prev")}>
            <FaChevronLeft />
          </button>
        )}
        <img src={images[selectedImage]} alt="Product" className="main-image" />
        {images.length > 1 && (
          <button className="nav-button right" onClick={() => handleImageChange("next")}>
            <FaChevronRight />
          </button>
        )}
        <div className="image-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${selectedImage === index ? "active" : ""}`}
              onClick={() => setSelectedImage(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="details-section">
        <h1>{ad.title}</h1>
        <h3>{ad.user?.companyName || ad.user?.name}</h3>
        <p className="description">{ad.description}</p>
        <p className="certifications">
          Certifications: {(ad.certifications && ad.certifications.join(", ")) || "Not available"}
        </p>
        <p className="price">
          Unit Price: <b>${ad.price}</b>
        </p>
        <p className="location">Location: {ad.location}</p>
        <span className={`ad-status ${ad.status}`}>
          {ad.status.toUpperCase()}
        </span>
        {ad.user && (
          <div className="contact-details">
            <h3>Contact Details</h3>
            <p>
              <FaEnvelope /> {ad.user.email || "No email available"}
            </p>
            <p>
              <FaPhone /> {ad.user.phone || "No phone available"}
            </p>
            {ad.user.businessAddress ? (
              <p>
                <FaMapMarkerAlt /> {`${ad.user.businessAddress.street}, ${ad.user.businessAddress.city}, ${ad.user.businessAddress.province}, ${ad.user.businessAddress.postalCode}`}
              </p>
            ) : (
              <p>No address available</p>
            )}
            {ad.user.website && (
              <p>
                <FaGlobe /> {ad.user.website}
              </p>
            )}
          </div>
        )}
        {showOrderButton && (
          <div className="order-section">
            <label>Required Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity"
            />
            <button className="order-btn" onClick={handleOrderRequest}>
              Request to Order
            </button>
          </div>
        )}
        {showManagementButtons && (
          <div className="management-section">
            <button className="delete-btn" onClick={handleDeleteAd}>
              <FaTrash /> Delete
            </button>
            {!isEditingStatus ? (
              <button
                className="edit-status-btn"
                onClick={() => {
                  setNewStatus(ad.status);
                  setIsEditingStatus(true);
                }}
              >
                <FaEdit /> Edit Status
              </button>
            ) : (
              <div className="status-edit-form">
                <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="completed">Completed</option>
                </select>
                <button onClick={handleStatusEdit}>Save</button>
                <button onClick={() => setIsEditingStatus(false)}>Cancel</button>
              </div>
            )}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdDetails;
