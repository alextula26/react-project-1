import React from 'react';
import style from './Users.module.css';
import * as axios from "axios";
import photoUrl from '../../assets/images/default.jpg'
import _ from 'lodash';

export default class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.currentPage}&count=${this.props.users.sizePage}`)
      .then((responce) => {
        console.log(responce.data);
        this.props.setUsers(responce.data.items);
        this.props.setUsersTotalCount(responce.data.totalCount);
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.users.currentPage !== prevProps.users.currentPage) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.currentPage}&count=${this.props.users.sizePage}`)
        .then((responce) => this.props.setUsers(responce.data.items));
    }
  }

  render() {
    const countPages = Math.ceil(this.props.users.maxCountUsers / this.props.users.sizePage);
    const pages = _.range(1, countPages + 1);

    return (
      <div>
        {
          pages.map((page) => <span
            key={`page-user-${page}`}
            className={page === this.props.users.currentPage && style.active}
            onClick={() => this.props.setCurrentPage(page)}>
              {page}
            </span>)
        }
        {
          this.props.users.users.map((user) => (
              <div key={user.id}>
                <div><img src={user.photos.small || photoUrl} className={style.photo} alt={user.name}/></div>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
                <div>{user.status}</div>
                {!user.follow ? <button onClick={() => this.props.follow(user.id)}>Follow</button> :
                  <button onClick={() => this.props.unfollow(user.id)}>unFollow</button>}
              </div>
            )
          )
        }
      </div>
    );
  }
};



