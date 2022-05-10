import React from 'react';
import Routes from './Routing';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

const index = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
};

export default index;
