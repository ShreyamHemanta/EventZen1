import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Event Zen. All rights reserved.</p>
        <p>Contact: support@eventzen.com</p>
      </div>
    </footer>
  );
};

export default Footer;
