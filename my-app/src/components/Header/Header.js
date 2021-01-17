import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" width='80px' height='60px' />
    </header>
  );
};

export default Header;
