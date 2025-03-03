// src/routes/reviewRoutes.js
const express = require("express");
const { submitReview } = require("../controllers/reviewController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Create a review for a specific ad
router.post("/:adId", protect, submitReview);

// Optionally, you can implement a GET route for reviews if needed:
// router.get("/:adId", protect, getReviews);

module.exports = router;
