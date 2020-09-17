import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
  follow,
  setCurrentPage,
  setUsers,
  unfollow,
  setUsersTotalCount,
  isLoaderChanged
} from "../../redux/store";
import Loader from "../commons/Loader/Loader";
import API from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.isLoaderChanged(true);
    API.getUsers(this.props.users.currentPage, this.props.users.sizePage).then((data) => {
      this.props.setUsers(data.items);
      this.props.setUsersTotalCount(data.totalCount);
      this.props.isLoaderChanged(false);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.users.currentPage !== prevProps.users.currentPage) {
      this.props.isLoaderChanged(true);
      API.getUsers(this.props.users.currentPage, this.props.users.sizePage).then((data) => {
        this.props.setUsers(data.items);
        this.props.isLoaderChanged(false);
      });
    }
  }

  render() {
    return (
      <>
        {this.props.users.isLoader ? <Loader/> : null}
        <Users
          maxCountUsers={this.props.users.maxCountUsers}
          sizePage={this.props.users.sizePage}
          currentPage={this.props.users.currentPage}
          setCurrentPage={this.props.setCurrentPage}
          users={this.props.users.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage,
});

/*const mapDispatchToProps = (dispach) => ({
  follow: (userId) => dispach(followCreator(userId)),
  unfollow: (userId) => dispach(unfollowCreator(userId)),
  setUsers: (users) => dispach(setUsersCreator(users)),
  setCurrentPage: (page) => dispach(setCurrentPageCreator(page)),
  setUsersTotalCount: (count) => dispach(setUsersTotalCountCreator(count)),
  isLoaderChanged: (isLoader) => dispach(isLoaderCreator(isLoader)),
});
*/

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  isLoaderChanged,
})(UsersContainer);
