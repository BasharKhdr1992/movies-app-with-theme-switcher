import React, { useContext } from 'react';
import './Dropdown.css';
import { ThemeContext } from '../../context/ThemeContext';
import Divider from '../UI/Divider';
import DropdownLink from './DropdownLink';

const Dropdown = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="dropdown" style={{ backgroundColor: theme.element }}>
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
