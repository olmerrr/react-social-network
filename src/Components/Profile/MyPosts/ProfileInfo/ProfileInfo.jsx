import React from 'react';
import Styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
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