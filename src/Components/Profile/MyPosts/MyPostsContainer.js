import React from 'react';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import Myposts from './MyPosts';
import storeContext from '../../../storeContext';

const MyPostsContainer = () => {

  // let state = props.store.getState();
  
  return (
    <storeContext.Consumer>{ //не должно быть пробелов между .Costumer>{
     (store) =>{
      let state = store.getState();
      
      let onAddPost  = () =>{
        store.dispatch(addPostActionCreator());
      };
      
      let onPostChange = (text) => {
        let action =  updateNewPostTextActionCreator(text); 
        store.dispatch(action);
      };
      return(
      <Myposts  updateNewPostText = {onPostChange}
                          addPost = {onAddPost}
                          posts = {store.getState().profilePage.posts}
                          newPostText = {store.getState().profilePage.newPostText}
      />
      )
    }
    }
      
    </storeContext.Consumer>
  )
}

export default MyPostsContainer;