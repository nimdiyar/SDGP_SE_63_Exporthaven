import React, { useState, useEffect } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";
import { fetchNotifications } from "../utils/api";
import "../styles/NotificationBell.css";

const NotificationBell = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (user) {
      fetchNotifications().then((data) => {
        setNotifications(data);
        setUnreadCount(data.filter((n) => !n.read).length);
      });
    }
  }, [user]);

  const markAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  return (
    <div className="notification-container">
      <div className="notification-bell" onClick={() => setOpen(!open)}>
        <IoNotificationsOutline size={30} />
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount}</span>
        )}
      </div>
      {open && (
        <div className="notification-dropdown">
          <h4>Notifications</h4>
          {notifications.length === 0 ? (
            <p>No new notifications</p>
          ) : (
            notifications.map((n, index) => (
              <div
                key={index}
                className={`notification-item ${n.read ? "read" : "unread"}`}
              >
                {n.message}
              </div>
            ))
          )}
          <button onClick={markAsRead}>Mark All as Read</button>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
