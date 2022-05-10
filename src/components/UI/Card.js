import React from 'react';
import './Card.css';

const Card = ({ children }) => {
  return (
    <div onClick={() => {}} className="card">
      {children}
    </div>
  );
};

export default Card;
