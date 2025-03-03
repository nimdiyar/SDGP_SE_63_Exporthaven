// src/routes/userRoutes.js
const express = require("express");
const {
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../config/multer"); // Using your multer configuration

const router = express.Router();

router.get("/profile", protect, getUserProfile);
// Use upload.single("profilePhoto") to handle the profile photo upload.
router.put(
  "/profile",
  protect,
  upload.single("profilePhoto"),
  updateUserProfile
);

module.exports = router;
