import React from 'react';
import style from './Profile.module.css';
import Posts from './Posts/Posts.jsx';

const Profile = () => (
    <div className={style.content}>
        <div>
            <img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <Posts />
    </div>
);

export default Profile;
