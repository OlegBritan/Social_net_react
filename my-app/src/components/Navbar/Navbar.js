import React from 'react';
import classes from './NavBar.module.css';
const Navbar = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>Profile</li>
        <li>Messages</li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
};

export default Navbar;
