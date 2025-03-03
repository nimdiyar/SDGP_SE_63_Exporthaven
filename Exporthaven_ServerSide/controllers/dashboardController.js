const User = require("../models/User");
const Ad = require("../models/Ad");
const Order = require("../models/Order");

const getUserDashboardStats = async (req, res) => {
  try {
    const userId = req.user.id;
    const totalAds = await Ad.countDocuments({ user: userId });
    const totalOrders = await Order.countDocuments({ exporter: userId });
    const pendingOrders = await Order.countDocuments({
      exporter: userId,
      status: "Pending",
    });
    res.json({ totalAds, totalOrders, pendingOrders });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user dashboard data", error });
  }
};

module.exports = { getUserDashboardStats };
