import {connect} from "react-redux";
import Users from "./Users";
import {followCreator, setUsersCreator, unfollowCreator} from "../../redux/store";

const mapStateToProps = (state) => (
  {
    users: state.users,
  }
);

const mapDispatchToProps = (dispach) => ({
  follow: (userId) => dispach(followCreator(userId)),
  unfollow: (userId) => dispach(unfollowCreator(userId)),
  setUsers: (users) => dispach(setUsersCreator(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);