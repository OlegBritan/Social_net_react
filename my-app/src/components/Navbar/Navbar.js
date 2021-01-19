import React from 'react';
import classes from './NavBar.module.css';
const Navbar = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li> <a href='/profile'>Profile</a></li>
        <li> <a href='/dialogs'>Massages</a></li>
        <li> <a href='/news'>News</a></li>
        <li> <a href='/music'>Music</a></li>
        <li> <a href='/setting'>Setting</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
