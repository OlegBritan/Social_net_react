import React from 'react';
import AddNewPost from './AddNewPost/AddNewPost';
import MyPost from './MyPost/MyPost';
import classes from './MyPosts.module.css';

function MyPosts() {
  return (
    <div>
    <h3>My Posts</h3>
      <AddNewPost />
      <MyPost />
    </div>
  );
}

export default MyPosts;
