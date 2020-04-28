import React from 'react';
import MyPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';

const MyPost = (props) =>{
  let postsElements = props.postsData.map( (post) => 
  <Post id = {post.id}
        message = { post.message }
        likeCount = {post.likeCount}
  />
);
return(
<div>
     <p className={MyPostsStyle.newStylePost}> This is real post from Component</p>
    {/* <div className = {MyPostsStyle.coment_container}> */}
      {/* <textarea>Some text</textarea> */}
      {/* <button>Add post</button> */}
    {/* </div> */}
   {postsElements}
  </div>
  )
}
  export default MyPost;