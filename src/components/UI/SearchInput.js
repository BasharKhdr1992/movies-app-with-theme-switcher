import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './SearchInput.css';

const SearchInput = ({ searchShows }) => {
  const { theme } = useContext(ThemeContext);
  const [searchKeyword, setSearchKeyword] = useState('');

  const elementStyle = {
    backgroundColor: theme.element,
    color: theme.input ? theme.input : theme.text,
  };

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode && e.keyCode === 13) {
      searchShows(searchKeyword);
    }
  };

  return (
    <input
      type="text"
      style={elementStyle}
      onKeyDown={handleKeyDown}
      onChange={handleInputChange}
      value={searchKeyword}
      className="searchInput"
      placeholder="search shows..."
      name="search"
      id="search"
    />
  );
};

export default SearchInput;
