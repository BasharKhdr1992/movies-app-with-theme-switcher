import React from 'react';
import Home from '../components/Home';
import ShowDetails from '../components/ShowDetails';
import ShowSeasons from '../components/ShowSeasons';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import { Routes, Route } from 'react-router-dom';
import Episode from '../components/Episodes/Episode';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seasons/:id">
        <Route path="" element={<ShowSeasons />} />
        <Route path="episodes" element={<Episode />} />
      </Route>
      <Route path="/details/:id" element={<ShowDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routing;
