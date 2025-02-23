import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ChatContext } from "../context/ChatContext";
import { useAuth } from "../context/AuthContext";
import ChatMessage from "../components/ChatMessage";
import API_BASE_URL from "../utils/apiConfig";
import "../styles/Chat.css";

const Chat = ({ receiverId, adId, adInfo }) => {
  const { user } = useAuth();
  const { messages, setMessages, sendMessage, socket } = useContext(ChatContext);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && socket) {
      socket.emit("join", user._id);
      console.log("Joined chat with id:", user._id);
    }
  }, [user, socket]);

  useEffect(() => {
    // Fetch existing chat history from the backend
    if (!user || !receiverId) return;
    const fetchChatHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(
          `${API_BASE_URL}/api/chat/${user._id}/${receiverId}${adId ? `?adId=${adId}` : ""}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (data && data.messages) {
          setMessages(
            data.messages.map((msg) => ({
              ...msg,
              content: msg.message || msg.content,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching chat history:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchChatHistory();
  }, [user, receiverId, adId, setMessages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    sendMessage(receiverId, newMessage, adId);
    setNewMessage("");
  };

  if (loading) return <div className="chat-loading">Loading chat...</div>;

  return (
    <div className="chat-container">
      {adId && adInfo && (
        <div className="chat-ad-header">
          <h4>Chat about: {adInfo.title}</h4>
        </div>
      )}
      <div className="chat-box">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg}
            isOwnMessage={msg.sender?.toString() === user._id.toString()}
          />
        ))}
      </div>
      <div className="chat-input">
        <input
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
