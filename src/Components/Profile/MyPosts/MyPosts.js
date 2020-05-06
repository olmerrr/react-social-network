import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map( p=> <Post message = {p.message} likeCounts = {p.likeCounts}/>)
  
  let newPostElement = React.createRef();   //создаем ссылку на DOM элемент
  
  let addPost  = () =>{
    props.addPost();

  } ;
  let onPostChange = () => {
    let text = newPostElement.current.value; 
    props.updateNewPostText(text);
  };

  return (
    <div>
      My posts
      <div>
    <div>{props.message}</div>
         
        <textarea ref = {newPostElement} onChange = {onPostChange} value = {props.newPostText}></textarea>
        <button onClick = {addPost}>Add post</button>

      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )

}

export default MyPosts;