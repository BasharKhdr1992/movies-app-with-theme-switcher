import React, { useContext, useState, useRef } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import './index.css';
import Dropdown from './Dropdown';
import { useWindowSize } from './../../custom-hooks/useWindowSize';
import Hamburger from '../../svgs/Hamburger';
import Close from '../../svgs/Close';
import { useWindowScroll } from '../../custom-hooks/useWindowScroll';

const Index = () => {
  const [dropdown, setDropdown] = useState(false);
  const { theme, toggleMode, darkMode } = useContext(ThemeContext);

  const [width] = useWindowSize();
  const [scroll] = useWindowScroll();

  const ref1 = useRef(null);

  const color = theme.text;

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const navbarHeight = ref1?.current?.scrollHeight;

  const isSticky = navbarHeight < scroll;

  return (
    <nav
      className={`navbar ${isSticky ? 'sticky' : undefined}`}
      ref={ref1}
      style={{ backgroundColor: theme.bg }}
    >
      <Link to={'/'} className="navlink logo">
        <span style={{ color }}>Tv Shows</span>
      </Link>
      <Link
        to={'/news'}
        className="navlink collapse"
        style={{ textDecorationColor: color }}
      >
        <span style={{ color }}>News</span>
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
      {width < 900 && dropdown && (
        <Dropdown isSticky={isSticky} scrollHeight={navbarHeight} />
      )}
    </nav>
  );
};

export default Index;
