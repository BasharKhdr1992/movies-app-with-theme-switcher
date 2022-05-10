import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import './index.css';
import Dropdown from './Dropdown';
import { useWindowSize } from './../../custom-hooks/useWindowSize';
import Hamburger from '../../svgs/Hamburger';
import Close from '../../svgs/Close';

const Index = () => {
  const [dropdown, setDropdown] = useState(false);
  const { theme, toggleMode, darkMode } = useContext(ThemeContext);

  const [width] = useWindowSize();

  const color = theme.text;

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="navbar" style={{ backgroundColor: theme.bg }}>
      <Link to={'/'} className="navlink logo">
        <span style={{ color }}>Tv Shows</span>
      </Link>
      <Link
        to={'/search'}
        className="navlink collapse"
        style={{ textDecorationColor: color }}
      >
        <span style={{ color }}>Search</span>
      </Link>
      <Link
        to={'/watched'}
        className="navlink collapse"
        style={{ textDecorationColor: color }}
      >
        <span style={{ color }}>Watched</span>
      </Link>
      <Link
        to={'/skipped'}
        className="navlink collapse"
        style={{ textDecorationColor: color }}
      >
        <span style={{ color }}>Skipped</span>
      </Link>
      <div className="navbar-right">
        <Link
          to={'/login'}
          className="navlink collapse"
          style={{ textDecorationColor: color }}
        >
          <span style={{ color }}>Login</span>
        </Link>
        <Link
          to={'/register'}
          className="navlink collapse"
          style={{ textDecorationColor: color }}
        >
          <span style={{ color }}>Register</span>
        </Link>
        <button
          onClick={toggleMode}
          style={{ color: theme.text }}
          className="navlink"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button onClick={toggleDropdown} className="navlink mobile">
          {!dropdown ? <Hamburger /> : <Close />}
        </button>
      </div>
      {width < 900 && dropdown && <Dropdown />}
    </nav>
  );
};

export default Index;
