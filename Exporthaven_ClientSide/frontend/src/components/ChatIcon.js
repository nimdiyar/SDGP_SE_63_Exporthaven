import React, { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Chat from "../pages/Chat";
import "../styles/ChatIcon.css";

const ChatIcon = () => {
  const [openChat, setOpenChat] = useState(false);

  // Example: Replace these dummy IDs with valid ones.
  const receiverId = "63f12e8b4c71ad39c55ae541"; // valid 24-char hex
  // For a global chat, if not tied to an ad, omit adId:
  const adId = undefined;
  const adInfo = { title: "Support Chat" };

  return (
    <div className="chat-icon-container">
      <div className="chat-icon" onClick={() => setOpenChat(!openChat)}>
        <IoChatbubbleEllipsesOutline size={30} />
      </div>
      {openChat && <Chat receiverId={receiverId} adId={adId} adInfo={adInfo} />}
    </div>
  );
};

export default ChatIcon;
