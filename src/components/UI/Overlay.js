import React from 'react';
import './Overlay.css';

const Overlay = ({ children, className }) => {
  return <div className={`overlay ${className}`}>{children}</div>;
};

export default Overlay;
