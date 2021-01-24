import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
const Navbar = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li className={classes.navItems}>
          <NavLink to="/profile" activeClassName={classes.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={classes.navItems}>
          {' '}
          <NavLink to="/dialogs" activeClassName={classes.activeLink}>
            Massages
          </NavLink>
        </li>
        <li className={classes.navItems}>
          {' '}
          <NavLink to="/news" activeClassName={classes.activeLink}>
            News
          </NavLink>
        </li>
        <li className={classes.navItems}>
          {' '}
          <NavLink to="/music" activeClassName={classes.activeLink}>
            Music
          </NavLink>
        </li>
        <li className={classes.navItems}>
          {' '}
          <NavLink to="/setting" activeClassName={classes.activeLink}>
            Setting
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
