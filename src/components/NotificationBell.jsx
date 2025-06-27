import React from 'react';

const NotificationBell = () => {
  const unreadCount = 3; // demo value
  return (
    <div className="position-relative">
      <i className="bi bi-bell-fill text-white fs-4"></i>
      {unreadCount > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {unreadCount}
        </span>
      )}
    </div>
  );
};

export default NotificationBell;
