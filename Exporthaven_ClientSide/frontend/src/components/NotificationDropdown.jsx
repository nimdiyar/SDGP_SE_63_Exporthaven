import React from "react";
import PropTypes from "prop-types";

const NotificationDropdown = ({ notifications, onMarkAllRead }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold text-text mb-2">Notifications</h4>
      {notifications.length === 0 ? (
        <p className="text-text">No new notifications</p>
      ) : (
        notifications.map((n, index) => (
          <div key={index} className={`p-2 border-b border-border ${n.read ? "" : "bg-gray-100"}`}>
            {n.message}
          </div>
        ))
      )}
      <button onClick={onMarkAllRead} className="w-full mt-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary">
        Mark All as Read
      </button>
    </div>
  );
};

NotificationDropdown.propTypes = {
  notifications: PropTypes.array.isRequired,
  onMarkAllRead: PropTypes.func.isRequired,
};

export default NotificationDropdown;