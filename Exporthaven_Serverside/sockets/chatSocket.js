// sockets/chatSocket.js
const socketIo = require("socket.io");
const Chat = require("../models/Chat");

// Helper function: Check if a string is a valid 24-character hex string
const isValidObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);

const setupChatSocket = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("joinRoom", (data) => {
      // data: { adId, userId1, userId2 }
      if (!isValidObjectId(data.userId1) || !isValidObjectId(data.userId2)) {
        console.error("Invalid user ID provided in joinRoom:", data);
        return;
      }
      const roomBase = [data.userId1, data.userId2].sort().join("_");
      const room =
        data.adId && isValidObjectId(data.adId)
          ? `${data.adId}_${roomBase}`
          : roomBase;
      socket.join(room);
      console.log(`Socket ${socket.id} joined room ${room}`);
    });

    socket.on("sendMessage", async (data) => {
      try {
        // data: { senderId, receiverId, adId, content, type }
        if (
          !isValidObjectId(data.senderId) ||
          !isValidObjectId(data.receiverId)
        ) {
          console.error(
            "Invalid senderId or receiverId provided in sendMessage:",
            data
          );
          return;
        }
        const query = {
          participants: { $all: [data.senderId, data.receiverId] },
        };
        if (data.adId && isValidObjectId(data.adId)) query.ad = data.adId;

        let chat = await Chat.findOne(query);
        if (!chat) {
          chat = await Chat.create({
            ad: data.adId && isValidObjectId(data.adId) ? data.adId : undefined,
            participants: [data.senderId, data.receiverId],
            messages: [],
          });
        }
        const newMessage = {
          sender: data.senderId,
          content: data.content,
          type: data.type || "text",
          timestamp: new Date(),
        };
        chat.messages.push(newMessage);
        await chat.save();

        const roomBase = [data.senderId, data.receiverId].sort().join("_");
        const room =
          data.adId && isValidObjectId(data.adId)
            ? `${data.adId}_${roomBase}`
            : roomBase;
        io.to(room).emit("receiveMessage", newMessage);
      } catch (error) {
        console.error("Error handling sendMessage:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};

module.exports = setupChatSocket;
