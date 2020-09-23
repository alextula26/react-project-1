import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import Loader from "../commons/Loader/Loader";

const Profile = (props) => {
  if (!props.profile.profile) {
    return <Loader/>
  }
  return (
    <div className={style.profile}>
      <ProfileInfo profile={props.profile.profile} status={props.profile.status} updateStatus={props.updateStatus}/>
      <PostsContainer/>
    </div>
  )
};

export default Profile;
