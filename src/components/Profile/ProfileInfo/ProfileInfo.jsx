import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = ({profile}) => {
  return (
    <div className={style.profileInfo}>
      <div>
        <img
          src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
          alt=""/>
      </div>
      <div className={style.descriptionInfo}>
        <div><img src={profile.photos.small} alt={profile.fullName}/></div>
        <div>{profile.aboutMe}</div>
        <div>{profile.lookingForAJobDescription}</div>
      </div>
    </div>
  )
};

export default ProfileInfo;
