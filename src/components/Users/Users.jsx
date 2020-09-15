import React from 'react';
import style from './Users.module.css';
import photoUrl from '../../assets/images/default.jpg'
import _ from 'lodash';

const Users = (props) => {
  const countPages = Math.ceil(props.maxCountUsers / props.sizePage);
  const pages = _.range(1, countPages + 1);
  return (
    <div>
      {
        pages.map((page) => (
            <span
              key={`page-user-${page}`}
              className={page === props.currentPage && style.active}
              onClick={() => props.setCurrentPage(page)}
            >
              {page} |
            </span>
          )
        )
      }
      {
        props.users.map((user) => (
            <div key={user.id}>
              <div><img src={user.photos.small || photoUrl} className={style.photo} alt={user.name}/></div>
              <div>{user.name}</div>
              <div>{user.status}</div>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
              <div>{user.status}</div>
              {!user.follow ? <button onClick={() => props.follow(user.id)}>Follow</button> :
                <button onClick={() => props.unfollow(user.id)}>unFollow</button>}
            </div>
          )
        )
      }
    </div>
  );
};

export default Users;

