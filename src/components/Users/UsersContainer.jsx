import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Loader from "../commons/Loader/Loader";
import {setCurrentPage, getUsers, follow, unfollow} from "../../redux/usersReduser";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.users.currentPage, this.props.users.sizePage);
  }

  componentDidUpdate(prevProps) {
    if (this.props.users.currentPage !== prevProps.users.currentPage) {
      this.props.getUsers(this.props.users.currentPage, this.props.users.sizePage);
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
          folowingInProgress={this.props.users.folowingInProgress}
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers
})(UsersContainer);
