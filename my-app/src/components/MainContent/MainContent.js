import React from 'react';
import classes from './MainContent.module.css';
import MyPosts from './MyPosts/MyPosts';

import ProfileDescription from './ProfileDescription/ProfileDescription';


const MainContent = (props) => {
 
  return (
    <section className={classes.mainContent}>
      <ProfileDescription />
      <MyPosts state= {props.state} dispatch={props.dispatch} newPostText={props.newPostText} />
    </section>
  );
};

export default MainContent;
