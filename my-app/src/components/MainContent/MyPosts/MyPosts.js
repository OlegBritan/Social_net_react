import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

function MyPosts(props) {
  console.log(props)
  let postElement = props.state.postData.map((el) => {
    return (
      <Post
        id={el.id}
        messages={el.messages}
        likesCount={el.likesCount}
        dislikesCount={el.dislikesCount}
      />
    );
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
   
    props.updateNewPostText(text)
  }

  return (
    <div>
      <h3>My Posts</h3>
      <article>
        <textarea onChange={onPostChange} 
                  ref={newPostElement} 
                  value={props.state.newPostText} />
        <div>
          <button onClick={addPost}>Add Post</button>
          <button>Clear</button>
        </div>
      </article>

      <div>{postElement}</div>
    </div>
  );
}

export default MyPosts;
