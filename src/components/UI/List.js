import React from 'react';
import './List.css';

const List = ({ children, className }) => {
  return <div className={`list ${className}`}>{children}</div>;
};

export default List;
