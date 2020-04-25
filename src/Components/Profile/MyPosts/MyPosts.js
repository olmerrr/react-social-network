import React from 'react';
import MyPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';


const MyPost = () =>{
  let postsData = [
    {id: 1, message: 'Give more JSX', like_count: 5},
    {id: 2, message: 'Hello Friend!!', like_count: 33},
    {id: 3, message: 'Its new component?', like_count: 0}
  ];
  let dialogsElements = [
      <Post 
        id = {postsData[0].id} 
        message = {postsData[0].message} 
        like_count = {postsData[0].like_count}
      />,
      
      <Post 
        id = {postsData[1].id} 
        message = {postsData[1].message} 
        like_count = {postsData[1].like_count}
      />,
      
      <Post 
        id = {postsData[2].id} 
        message = {postsData[2].message} 
        like_count = {postsData[2].like_count}
      />
    ];
    
return(
<div>
    <p className={MyPostsStyle.newStylePost}> This is real post from Component</p>
    <div className = {MyPostsStyle.coment_container}>
      <textarea>Some text</textarea>
      <button>Add post</button>
    </div>
    {dialogsElements}
  </div>  
  )
}
  export default MyPost;