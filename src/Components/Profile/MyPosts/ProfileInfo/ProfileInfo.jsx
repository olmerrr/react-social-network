import React from 'react';
import Styles from './ProfileInfo.module.css';

 

const ProfileInfo = (props) => {
  let postsData = [
    {id: 1, message: 'Give more JSX', likeCount: 5},
    {id: 2, message: 'Hello Friend!!', likeCount: 33},
    {id: 3, message: 'Why?', likeCount: 0}
  ];

  return (
    <div>
      <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="your" className={Styles.profileInfoMainImage} />
      <div className= {Styles.ProfileInfoInnerWrapper}>
       <p>ava + description</p> 
      </div>
    </div>
  )
}
export default ProfileInfo;