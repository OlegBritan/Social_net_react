import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MyPost.module.css';

const MyPost = () => {
  return (
    <article>
      <img
        src="https://image.freepik.com/free-vector/cute-purple-dragon-avatar_79416-76.jpg"
        alt="avatar"
        width="50px"
        height="50px"
      />
      {/* <Post massages='Hi ,how are you?' likesCount='0' dislikeCount='0' /> */}
      <>Text Post</>
      <div>Like</div>
      <div>Dislike</div>
    </article>
  );
};

export default MyPost;
