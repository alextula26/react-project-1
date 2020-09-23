import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getStatus, getUser, updateStatus} from "../../redux/profileReduser";
import Profile from "./Profile";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId ? this.props.match.params.userId : 11536;
    this.props.getUser(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatus} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage
});

export default compose(
  connect(mapStateToProps, {getUser, getStatus, updateStatus}),
  withRouter,
  //withAuthRedirect
)(ProfileContainer);
