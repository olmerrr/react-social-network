import React from 'react';
import ProfileStyle from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
export default props => (
  <div className={ProfileStyle.Profile}>
    <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="your"/>
    <h2 className={`${ProfileStyle.posts} ${ProfileStyle.main_post}`}>Main content</h2>
    <div className="profile"> ava + description</div>
    <MyPosts/>
</div>
)