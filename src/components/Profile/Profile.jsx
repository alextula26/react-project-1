import React from 'react';
import style from './Profile.module.css';
import Posts from './Posts/Posts.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ posts, postForm, addPost, updateChangePost }) => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <Posts posts={posts} addPost={addPost} updateChangePost={updateChangePost} postForm={postForm} />
    </div>
  )
};

export default Profile;
