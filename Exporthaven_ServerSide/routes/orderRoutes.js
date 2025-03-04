const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  requestOrder,
  updateOrderStatus,
  getManufacturerOrders,
  getExporterOrders,
} = require("../controllers/orderController");

const router = express.Router();

// Manufacturer requests an order
router.post("/", protect, requestOrder);

// Exporter updates order status
router.put("/:orderId", protect, updateOrderStatus);

// Get orders for a manufacturer
router.get("/manufacturer", protect, getManufacturerOrders);

// Get orders for an exporter
router.get("/exporter", protect, getExporterOrders);

module.exports = router;
