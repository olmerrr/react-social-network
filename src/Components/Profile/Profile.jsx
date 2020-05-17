import React from 'react';
import Styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return(
    <div className={Styles.profileWrapper}>
    <ProfileInfo/>
    <MyPostsContainer 
      store = {props.store}
    />

</div>
  )
}

export default Profile;