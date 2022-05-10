import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Hamburger = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
      <g fill={theme.text} fillRule="evenodd">
        <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
      </g>
    </svg>
  );
};

export default Hamburger;
