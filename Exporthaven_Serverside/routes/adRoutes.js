// routes/adRoutes.js
const express = require("express");
const {
  getAllUsers,
  getAllAds,
  getAllOrders,
  getExporterAds,
  getManufacturerAds,
  createAd,
  getAdById,
  updateAd,
  deleteAd,
  searchAds,
  requestOrder,
  submitReview,
} = require("../controllers/adController");
const { protect, adminProtect } = require("../middleware/authMiddleware");
const upload = require("../config/multer");

const router = express.Router();

// Ad creation with Multer handling multiple images.
router.post("/", protect, upload.array("images", 5), createAd);

router.get("/users", adminProtect, getAllUsers);
router.get("/ads", adminProtect, getAllAds);
router.get("/orders", adminProtect, getAllOrders);
router.get("/search", searchAds);

// Public routes for ads.
router.get("/", getAllAds);
router.get("/exporters", getExporterAds);
router.get("/manufacturers", getManufacturerAds);
router.get("/:id", getAdById);
router.put("/:id", protect, updateAd);
router.delete("/:id", protect, deleteAd);
router.post("/:id/review", protect, submitReview);
router.post("/:id/order", protect, requestOrder);

module.exports = router;
