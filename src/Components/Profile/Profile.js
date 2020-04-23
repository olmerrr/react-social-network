import React from 'react';
import Styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

export default props => (
  <div className={Styles.profileWrapper}>
    <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="your"/>
    <h2 className={`${Styles.posts} ${Styles.main_post}`}>Main content</h2>
    <div className=""> ava + description</div>
    <MyPosts/>
</div>
)