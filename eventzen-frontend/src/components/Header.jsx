import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/events">Events</Link>
      <Link to="/profile">Profile</Link>
    </header>
  );
};

export default Header;
