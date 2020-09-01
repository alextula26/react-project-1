import React from 'react';
import style from './Profile.module.css';
import Posts from './Posts/Posts.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ posts, postForm, dispatch }) => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <Posts posts={posts} postForm={postForm} dispatch={dispatch} />
    </div>
  )
};

export default Profile;
