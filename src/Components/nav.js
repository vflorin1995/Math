import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <div>MATH MAGICIANS</div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </nav>
);

export default Nav;
