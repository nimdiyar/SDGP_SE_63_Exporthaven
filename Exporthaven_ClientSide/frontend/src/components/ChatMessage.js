// src/components/ChatMessage.js
import React from "react";
import PropTypes from "prop-types";
import "../styles/ChatMessage.css";

const ChatMessage = ({ message, isOwnMessage }) => {
  return (
    <div className={`chat-message ${isOwnMessage ? "own" : "other"}`}>
      <div className="message-content">{message.content}</div>
      <div className="message-timestamp">
        {new Date(message.timestamp || Date.now()).toLocaleTimeString()}
      </div>
    </div>
  );
};

