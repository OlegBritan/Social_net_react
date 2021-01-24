import React from 'react';
import AddNewPost from './AddNewPost/AddNewPost';
import MyPost from './MyPost/MyPost';
import classes from './MyPosts.module.css';

function MyPosts() {
  return (
    <div>
      <AddNewPost />
      <MyPost />
    </div>
  );
}

export default MyPosts;
