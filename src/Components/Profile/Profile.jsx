import React from 'react';
import Styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
 
const Profile = (props) => {
  return(
    <div className={Styles.profileWrapper}>
    <ProfileInfo/>
    <MyPosts 
    posts = {props.profilePage.posts}
    newPostText = {props.profilePage.newPostText}
    dispatch = {props.dispatch}
    />

</div>
  )
}

export default Profile;