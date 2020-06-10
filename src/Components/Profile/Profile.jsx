import React from 'react';
import Styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';


const Profile = (props) => {
     
  return (
    <div className={Styles.profileWrapper}>
      <ProfileInfo profile = {props.profile}
                   status = {props.status}
                   updateStatus = {props.updateStatus}
                   />
      <MyPostsContainer />
    </div>
  )
  
  
}


export default Profile;