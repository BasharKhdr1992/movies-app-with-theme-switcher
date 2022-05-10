import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Spinner.css';

const Spinner = () => {
  const { theme } = useContext(ThemeContext);

  const borderStyle = { borderColor: theme.bg, borderTopColor: theme.text };

  return <div className="spinner" style={borderStyle}></div>;
};

export default Spinner;
