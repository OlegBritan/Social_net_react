import React from 'react';
import classes from './MainContent.module.css';
import MyPosts from './MyPosts/MyPosts';

import ProfileDescription from './ProfileDescription/ProfileDescription';

const MainContent = () => {
  return (
    <section className={classes.mainContent}>
     
      
        <ProfileDescription />
    <MyPosts />
      
    </section>
    );
};

export default MainContent;
