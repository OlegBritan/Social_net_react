import React from 'react';
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
      <div>Text Post</div>
      <div>Like</div>
      <div>Dislike</div>
    </article>
  );
};

export default MyPost;
