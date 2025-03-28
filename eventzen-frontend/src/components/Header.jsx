import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">Event Zen</Link>
        <nav className="nav">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/create-event" className="nav-link">Create Event</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
