import {connect} from "react-redux";
import Users from "./Users";
import {
  followCreator,
  setCurrentPageCreator,
  setUsersCreator,
  unfollowCreator,
  setUsersTotalCountCreator
} from "../../redux/store";
import * as axios from "axios/index";
import React from "react";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.currentPage}&count=${this.props.users.sizePage}`)
      .then((responce) => {
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
    return <Users
      maxCountUsers={this.props.users.maxCountUsers}
      sizePage={this.props.users.sizePage}
      currentPage={this.props.users.currentPage}
      setCurrentPage={this.props.setCurrentPage}
      users={this.props.users.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage,
});

const mapDispatchToProps = (dispach) => ({
  follow: (userId) => dispach(followCreator(userId)),
  unfollow: (userId) => dispach(unfollowCreator(userId)),
  setUsers: (users) => dispach(setUsersCreator(users)),
  setCurrentPage: (page) => dispach(setCurrentPageCreator(page)),
  setUsersTotalCount: (count) => dispach(setUsersTotalCountCreator(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);