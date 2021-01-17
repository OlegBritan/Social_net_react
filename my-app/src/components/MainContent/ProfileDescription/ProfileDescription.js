import React from 'react';
import classes from './ProfileDescription.module.css';

const ProfileDescription = () => {
  return (
    <article className={classes.profileDescription}>
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
