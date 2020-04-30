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
let newPostElement = React.createRef();

let onPostChange = () =>{
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
  //здесь я очищаю textarea от лишнего текста, который оставался от предидущего поста этот метод для сложных компонент с бизнес логикой
  props.updateNewPostText('');
  //здесь я очищаю textarea от лишнего текста, который оставался от предидущего поста этот метод для сложных компонент с бизнес логикой

}



let addPost = () => {
    props.addPost();

}
return(
<div>
     <p className={MyPostsStyle.newStylePost}> This is real post from Component</p>
    <div className = {MyPostsStyle.coment_container}>
      <textarea ref = {newPostElement} onChange = {onPostChange} value={props.newPostText}></textarea>
      <div>
          <button onClick={ addPost }>Add post</button>
      </div>
 
    </div>
   {postsElements}
  </div>
  )
}
  export default MyPost;