import React from "react";
import {connect} from "react-redux";
import {requestUsers, follow, unfollow, onChangePage} from "../../redux/usersReduser";
import Users from "./Users";
import Loader from "../commons/Loader/Loader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.sizePage);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.requestUsers(this.props.currentPage, this.props.sizePage);
    }
  }

  render() {
    return (
      <>
        {this.props.users.isLoader ? <Loader/> : null}
        <Users
          maxCountUsers={this.props.maxCountUsers}
          sizePage={this.props.sizePage}
          currentPage={this.props.currentPage}
          users={this.props.users}
          folowingInProgress={this.props.folowingInProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onChangePage={this.props.onChangePage}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  maxCountUsers: state.usersPage.maxCountUsers,
  sizePage: state.usersPage.sizePage,
  currentPage: state.usersPage.currentPage,
  folowingInProgress: state.usersPage.folowingInProgress,
  isLoader: state.usersPage.isLoader,
});

export default compose(
  connect(mapStateToProps, {follow, unfollow, requestUsers, onChangePage}),
  withAuthRedirect
)(UsersContainer);
