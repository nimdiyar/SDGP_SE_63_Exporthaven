const express = require("express");
const {
  getAdminDashboardStats,
  getAllUsers,
  deleteUser,
  getAllAds,
  approveAd,
  rejectAd,
  deleteAdAdmin,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/adminController");
const { protect, adminProtect } = require("../middleware/authMiddleware");

const router = express.Router();

// Fetch Admin Dashboard Stats
router.get("/dashboard", protect, adminProtect, getAdminDashboardStats);

// User Management
router.get("/users", protect, adminProtect, getAllUsers);
router.delete("/users/:id", protect, adminProtect, deleteUser);

// Ad Management
router.get("/ads", protect, adminProtect, getAllAds);
router.put("/ads/:id/approve", protect, adminProtect, approveAd);
router.put("/ads/:id/reject", protect, adminProtect, rejectAd);
router.delete("/ads/:id", protect, adminProtect, deleteAdAdmin);

// Order Management
router.get("/orders", protect, adminProtect, getAllOrders);
router.put("/orders/:id", protect, adminProtect, updateOrderStatus);

module.exports = router;
