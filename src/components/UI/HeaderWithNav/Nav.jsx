// This file contains code for the nav component. Using NavLink from react-router-dom, each link in the navbar routes to an endpoint where a different main-content section of the application is rendered. The Nav is exported from here and imported into the Header.jsx file as this component is part fo the header. 
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
