import React from 'react';
import style from './Users.module.css';
import * as axios from "axios";
import photoUrl from '../../assets/images/default.jpg'

export default class Users extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((responce) => this.props.setUsers(responce.data.items));
  }

  render() {
    return this.props.users.users.map((user) => (
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
    );
  }
};



