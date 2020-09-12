import React from 'react';
import style from './Users.module.css';

const Users = (props) => {
  const {users} = props.users;
  return users.map((user) => (
      <div key={user.id}>
        <div><img src={user.photo} className={style.photo}/></div>
        <div>{user.fullName}</div>
        <div>{user.status}</div>
        <div>{user.location.country}</div>
        <div>{user.location.city}</div>
        <div>{user.status}</div>
        {!user.follow ? <button onClick={() => props.follow(user.id)}>Follow</button> :
          <button onClick={() => props.unfollow(user.id)}>unFollow</button>}
      </div>
    )
  );
};

export default Users;

