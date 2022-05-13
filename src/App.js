import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Router from './Router';
import './App.css';
import { ShowContext } from './context/ShowContext';
import LightBox from './modals/LightBox';

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { isImagesModal } = useContext(ShowContext);

  return (
    <div className="wrapper" style={{ backgroundColor: theme.bg }}>
      {isImagesModal && <LightBox />}
      <Router />
    </div>
  );
};

export default App;
