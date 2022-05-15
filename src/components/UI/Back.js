import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Back.css';
import { ThemeContext } from './../../context/ThemeContext';

const Back = () => {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const btnStyle = {
    color: theme.text,
    backgroundColor: theme.element ? theme.element : theme.bg,
  };

  return (
    <button style={btnStyle} className="btn-back" onClick={() => navigate(-1)}>
      back
    </button>
  );
};

export default Back;
