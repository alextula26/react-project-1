import React from 'react';
import style from './Users.module.css';
import photoUrl from '../../assets/images/default.jpg'
import _ from 'lodash';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
              <div><NavLink to={`/profile/${user.id}`}><img src={user.photos.small || photoUrl} className={style.photo}
                                                            alt={user.name}/></NavLink></div>
              <div>{user.name}</div>
              <div>{user.status}</div>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
              <div>{user.status}</div>
              {!user.follow ? <button onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "799f312a-7f6e-46f0-84df-18199856dcd1"
                    }
                  })
                  .then((responce) => {
                    if (responce.data.resultCode) {
                      props.follow(user.id);
                    }
                  });
                }}>Follow</button> :
                <button onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "799f312a-7f6e-46f0-84df-18199856dcd1"
                    }
                  })
                  .then((responce) => {
                    if (responce.data.resultCode) {
                      props.unfollow(user.id);
                    }
                  });
                }}>unFollow</button>}
            </div>
          )
        )
      }
    </div>
  );
};

export default Users;

