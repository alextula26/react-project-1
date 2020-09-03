import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={style.profileInfo}>
      <div>
        <img
          src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
          alt=""/>
      </div>
      <div className={style.descriptionInfo}>
        ava + description
      </div>
    </div>

  )
};

export default ProfileInfo;
