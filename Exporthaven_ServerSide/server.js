const express = require("express");
const dotenv = require("dotenv");
const corsMiddleware = require("./config/cors");
const connectDB = require("./config/db");
const path = require("path");
const http = require("http");
const i18next = require("i18next");
const Backend = require("i18next-http-middleware");
const translationEN = require("./locales/en.json");
const translationSI = require("./locales/si.json");

// Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adRoutes = require("./routes/adRoutes");
const orderRoutes = require("./routes/orderRoutes");
const chatRoutes = require("./routes/chatRoutes");
const adminRoutes = require("./routes/adminRoutes");
// Removed dashboardRoutes
const categoryRoutes = require("./routes/categoryRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

// Socket
const chatSocket = require("./sockets/chatSocket");

// Error middleware
const errorMiddleware = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);

app.use(corsMiddleware);
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

i18next.use(Backend.LanguageDetector).init({
  resources: {
    en: { translation: translationEN },
    si: { translation: translationSI },
  },
  fallbackLng: "en",
  detection: { order: ["querystring", "cookie"] },
});
app.use(Backend.handle(i18next));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/ads", adRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/admin", adminRoutes);
// Removed dashboardRoutes mounting.
app.use("/api/categories", categoryRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/reviews", reviewRoutes);

const Ad = require("./models/Ad");
app.get("/api/search", async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) return res.status(400).json({ message: "Query is required" });
    const ads = await Ad.find({ title: new RegExp(query, "i") });
    res.json(ads);
  } catch (error) {
    res.status(500).json({ message: "Search failed", error: error.message });
  }
});

app.use(errorMiddleware);

// Initialize Socket.IO for chat/notifications
chatSocket(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
