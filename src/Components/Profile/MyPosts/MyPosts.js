import React from 'react';
import MyPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';


const MyPost = () =>{
  let postsData = [
    {id: 1, message: 'Give more JSX', likeCount: 5},
    {id: 2, message: 'Hello Friend!!', likeCount: 33},
    {id: 3, message: 'Its new component?', likeCount: 0}
  ];
  let postsElements =  postsData.map( (post) => 
  <Post id = {post.id} 
            message = {post.message} 
            likeCount = {post.likeCount}
  />
);
    
return(
<div>
    <p className={MyPostsStyle.newStylePost}> This is real post from Component</p>
    <div className = {MyPostsStyle.coment_container}>
      <textarea>Some text</textarea>
      <button>Add post</button>
    </div>
    {postsElements}
  </div>  
  )
}
  export default MyPost;