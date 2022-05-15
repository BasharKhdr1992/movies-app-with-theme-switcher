import React, { useContext } from 'react';
import './Dropdown.css';
import { ThemeContext } from '../../context/ThemeContext';
import Divider from '../UI/Divider';
import DropdownLink from './DropdownLink';
import { useWindowScroll } from './../../custom-hooks/useWindowScroll';

const Dropdown = ({ navbarHeight, isSticky }) => {
  const { theme } = useContext(ThemeContext);
  const [scroll] = useWindowScroll();

  const stickyDropdown = {
    top: `${scroll}px`,
  };

  let dropdownStyle = { backgroundColor: theme.bg };

  if (isSticky) {
    dropdownStyle = { ...dropdownStyle, stickyDropdown };
  }

  return (
    <div className="dropdown" style={dropdownStyle}>
      <DropdownLink>News</DropdownLink>
      <DropdownLink>Watched</DropdownLink>
      <DropdownLink>Skipped</DropdownLink>
      <Divider />
      <DropdownLink>Register</DropdownLink>
      <DropdownLink>Login</DropdownLink>
    </div>
  );
};

export default Dropdown;
