import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <article>
      <img
        src="https://image.freepik.com/free-vector/cute-purple-dragon-avatar_79416-76.jpg"
        alt="avatar"
        width="50px"
        height="50px"
      />
      {props.messages}
      <div>Likes {props.likesCount}</div>
      <div>Dislikes {props.dislikesCount}</div>
    
    </article>
  );
};

export default Post;
