import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const DropdownLink = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  const textColor = theme.text;

  return (
    <button className="dropdown-link" style={{ color: textColor }}>
      {children}
    </button>
  );
};

export default DropdownLink;
