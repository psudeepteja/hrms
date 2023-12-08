import React from 'react';

const ToastNotification = ({ message, type }) => {
  return (
    <div className={`toast-notification ${type}`}>
      <span>{message}</span>
    </div>
  );
};

export default ToastNotification;
