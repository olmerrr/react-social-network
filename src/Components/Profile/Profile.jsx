import React from 'react';
import Styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

export default props => (

  <div className={Styles.profileWrapper}>
    <ProfileInfo/>
    <MyPosts postsData = {props.postsData}/>
</div>
)