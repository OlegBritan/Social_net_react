import React from 'react';
import classes from './ProfileDescription.module.css';

const ProfileDescription = () => {
  return (
    <article className={classes.profileDescription}>
    <article>
        <img
          src="https://www.state.gov/wp-content/uploads/2018/11/Sweden-2109x1406.jpg"
          alt="logo"
          width="1000px"
          height="200px"
        />
      </article>
    <article>
        <img
          src="https://image.freepik.com/free-vector/cute-purple-dragon-avatar_79416-76.jpg"
          alt="avatar"
          width="100px"
          height="100px"
        />
      </article>
      <div>Name and Surname</div>
      <div>Date of Birth:</div>
      <div>City:</div>
      <div>Education:</div>
      <div>Number phone:</div>
      <div>E-mail:</div>
    </article>
  );
};

export default ProfileDescription;
