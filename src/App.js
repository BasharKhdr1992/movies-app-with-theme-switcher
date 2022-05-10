import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Router from './Router';
import './App.css';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="wrapper" style={{ backgroundColor: theme.bg }}>
      <Router />
    </div>
  );
};

export default App;
