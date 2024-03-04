import React from 'react';
import Nav from './Nav';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>Karla Wubbenhorst</h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
