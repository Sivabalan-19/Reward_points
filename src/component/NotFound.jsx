import React from 'react';
import '../App.css'

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Page Not Found</p>
      <div className="animation-container">
        <div className="animation-box"></div>
        <div className="animation-box"></div>
        <div className="animation-box"></div>
      </div>
    </div>
  );
};

export default NotFoundPage;
