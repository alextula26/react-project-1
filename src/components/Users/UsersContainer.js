import {connect} from "react-redux";
import Users from "./Users";
import {
  followCreator,
  setCurrentPageCreator,
  setUsersCreator,
  unfollowCreator,
  setUsersTotalCountCreator
} from "../../redux/store";

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);