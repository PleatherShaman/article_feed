import React from 'react';
import '../styles/header.css';

const Header = ({ title }) => (
  <header className="header">
    <h1>{title}</h1>
  </header>
);

export default Header;
