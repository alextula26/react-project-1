import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({ store }) => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <PostsContainer store={store} />
    </div>
  )
};

export default Profile;
