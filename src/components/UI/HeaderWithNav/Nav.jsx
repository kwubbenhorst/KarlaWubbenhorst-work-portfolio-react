import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/about" activeClassName="active" exact>
        About Me
      </NavLink>
      <NavLink to="/portfolio" activeClassName="active">
        Portfolio
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
      <NavLink to="/resume" activeClassName="active">
        Resume
      </NavLink>
    </nav>
  );
};

export default Nav;
