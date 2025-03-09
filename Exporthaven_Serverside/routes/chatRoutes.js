// routes/chatRoutes.js
const express = require("express");
const {
  getChat,
  sendMessage,
  getUserChats,
} = require("../controllers/chatController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:userId1/:userId2", protect, getChat);
router.post("/send", protect, sendMessage);
router.get("/user/:userId", protect, getUserChats);

module.exports = router;
