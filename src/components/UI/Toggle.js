import React, { useContext, useRef } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Toggle.css';

const Toggle = () => {
  const { darkMode, theme, toggleMode } = useContext(ThemeContext);

  const ref1 = useRef(null);

  const toggleBg = { backgroundColor: darkMode ? theme.element : theme.bg };

  const toggleSwitchBg = {
    backgroundColor: theme.text,
  };

  const onToggleClicked = () => {
    if (ref1 !== null) {
      ref1.current.style.left = darkMode ? '1.9rem' : '0.2rem';
    }

    toggleMode();
  };

  return (
    <div className="toggle-wrapper">
      <p className="toggle-text">Dark Mode</p>
      <div style={toggleBg} onClick={onToggleClicked} className={'toggle'}>
        <div ref={ref1} style={toggleSwitchBg} className="toggle-switch" />
      </div>
    </div>
  );
};

export default Toggle;
