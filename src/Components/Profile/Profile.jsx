import React from 'react';
import Styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
 
const Profile = (props) => {
  return(
    <div className={Styles.profileWrapper}>
    <ProfileInfo/>
    <MyPosts postsData = {props.state.postsData}/>

</div>
  )
}

export default Profile;