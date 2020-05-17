import React from 'react';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import Myposts from './MyPosts';

const MyPostsContainer = (props) => {
debugger;

  let state = props.store.getState();
  let onAddPost  = () =>{
    props.store.dispatch(addPostActionCreator());
  };
  
  let onPostChange = (text) => {
    let action =  updateNewPostTextActionCreator(text); 
    props.store.dispatch(action);
  };
  return (
      
      <Myposts  updateNewPostText = {onPostChange}
                addPost = {onAddPost}
                posts = {state.profilePage.posts}
                newPostText = {state.profilePage.newPostText}
                />

  )
}

export default MyPostsContainer;