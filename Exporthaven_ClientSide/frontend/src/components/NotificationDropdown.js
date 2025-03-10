import React from "react";
import PropTypes from "prop-types";
import "../styles/NotificationDropdown.css";

const NotificationDropdown = ({ notifications, onMarkAllRead }) => {
  return (
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
      <button onClick={onMarkAllRead}>Mark All as Read</button>
    </div>
  );
};

NotificationDropdown.propTypes = {
  notifications: PropTypes.array.isRequired,
  onMarkAllRead: PropTypes.func.isRequired,
};

export default NotificationDropdown;
