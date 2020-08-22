import React from 'react';
import Posts from './Posts/Posts.jsx';

const users = [
  {name: 'Alex', age: 30, message: 'How do you do?', like: 20},
  {name: 'Inna', age: 35, message: 'Cool!!!', like: 30},
];

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
          alt=""/>
      </div>
      <div>
      ava + description
      </div>
      <Posts users={users}/>
    </div>
  )
};

export default Profile;
