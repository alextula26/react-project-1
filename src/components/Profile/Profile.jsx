import React from 'react';
import style from './Profile.module.css';
import Posts from './Posts/Posts.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const users = [
  {name: 'Alex', age: 30, message: 'How do you do?', like: 20},
  {name: 'Inna', age: 35, message: 'Cool!!!', like: 30},
];

const Profile = () => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <Posts users={users}/>
    </div>
  )
};

export default Profile;
