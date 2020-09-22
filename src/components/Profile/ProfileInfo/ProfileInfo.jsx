import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile}) => {
  return (
    <div className={style.profileInfo}>
      <div>
        <ProfileStatus status={'my status'}/>
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
