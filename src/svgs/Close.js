import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Close = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon-close"
      width="20"
      height="20"
    >
      <path
        fill={theme.text}
        fillRule="evenodd"
        d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
      />
    </svg>
  );
};

export default Close;
