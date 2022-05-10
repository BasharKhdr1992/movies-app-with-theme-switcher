import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Divider.css';

const Divider = () => {
  const { theme } = useContext(ThemeContext);

  return <div className="divider" style={{ backgroundColor: theme.text }} />;
};

export default Divider;
