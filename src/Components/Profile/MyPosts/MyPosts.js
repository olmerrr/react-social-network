import React from 'react';
import MyPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';
export default props => (
  <div>
    <p className={MyPostsStyle.newStylePost}> This is real post from Component</p>
    <div className = {MyPostsStyle.coment_container}>
      <textarea>Some text</textarea>
      <button>Add post</button>
    </div>
      <Post/>
      <Post/>
      <Post/>
  </div>

 
  )
