import React from 'react';
import Styles from './ProfileInfo.module.css';

 

const ProfileInfo = (props) => {

  return (
    <div>
      <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="your" className={Styles.profileInfoMainImage} />
      <div className= {Styles.ProfileInfoInnerWrapper}>
      </div>
    </div>
  )
}
export default ProfileInfo;