import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import userPhoto from '../../../assets/images/default.jpg';
// import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length > 0) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return <div className={style.profileInfo}>
    <div>
      <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
    </div>
    <div className={style.descriptionInfo}>
      <div>
        <img
          src={props.profile.photos.large || userPhoto}
          alt={props.profile.fullName}
          style={{ width: '200px' }}
        />
      </div>
      {!props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
      <div>{props.profile.aboutMe}</div>
      <div>{props.profile.lookingForAJobDescription}</div>
    </div>
  </div>;
};

export default ProfileInfo;
