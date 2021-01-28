import React from 'react';
import classes from './MainContent.module.css';
import MyPosts from './MyPosts/MyPosts';

import ProfileDescription from './ProfileDescription/ProfileDescription';


const MainContent = (props) => {
 
  return (
    <section className={classes.mainContent}>
      <ProfileDescription />
      <MyPosts state= {props.state} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
    </section>
  );
};

export default MainContent;
