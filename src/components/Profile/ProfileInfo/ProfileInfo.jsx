import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <div className={style.profileInfo}>
      <div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
      <div className={style.descriptionInfo}>
        <div><img src={props.profile.photos.small} alt={props.profile.fullName}/></div>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
      </div>
    </div>
  )
};

export default ProfileInfo;
