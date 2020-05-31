import React from 'react';
import Styles from './ProfileInfo.module.css';
import { Preloader } from './../../../../common/Preloader/Preloader';

 

const ProfileInfo = (props) => {
  if (!props.profile) {
  return <div><Preloader/></div>
}
  return (
    <div>
      <img src = {props.profile.photos.large} alt="your_profile_avatar"  />
      <div className= {Styles.ProfileInfoInnerWrapper}>
      </div>
    </div>
  )
}
export default ProfileInfo;