import React from 'react';
import Avatar from './Avatar/Avatar';
import classes from './MainContent.module.css';
import AddNewPost from './MyPosts/AddNewPost/AddNewPost';
import MyPost from './MyPosts/Post/MyPost';
import ProfileDescription from './ProfileDescription/ProfileDescription';

const MainContent = () => {
  return (
    <section className={classes.mainContent}>
      <article>
        <img
          src="https://www.state.gov/wp-content/uploads/2018/11/Sweden-2109x1406.jpg"
          alt="logo"
          width="1000px"
          height="200px"
        />
      </article>
      <article>
        <Avatar />
        <ProfileDescription />
      </article>

      <AddNewPost />

      <MyPost />
    </section>
  );
};

export default MainContent;