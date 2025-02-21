import React, { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:5000", {
      transports: ["websocket"],
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    newSocket.on("connect", () => {
      console.log("Socket connected:", newSocket.id);
    });

    newSocket.on("receiveMessage", (messageData) => {
      // Transform payload to use "content" property
      const transformed = { ...messageData, content: messageData.message };
      setMessages((prev) => [...prev, transformed]);
    });

    setSocket(newSocket);
    return () => newSocket.disconnect();
  }, []);

  // sendMessage sends the message using key "message"
  const sendMessage = (receiverId, content, adId, type = "text") => {
    if (socket) {
      const currentUser = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null;
      if (!currentUser) return;
      const messageData = {
        senderId: currentUser._id,
        receiverId,
        message: content,
        type,
        adId,
      };
      socket.emit("sendMessage", messageData);
    }
  };

  return (
    <ChatContext.Provider value={{ messages, setMessages, sendMessage, socket }}>
      {children}
    </ChatContext.Provider>
  );
};
