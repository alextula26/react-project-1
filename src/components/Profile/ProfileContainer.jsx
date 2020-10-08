import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  getStatus, updateStatus, getUser, savePhoto,
} from '../../redux/profileReduser';
import Profile from './Profile';
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  refreshProfile() {
    const userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : this.props.loginedUserId;
    this.props.getUser(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevprops) {
    if (this.props.match.params.userId !== prevprops.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return <Profile {...this.props}
        profile={this.props.profile}
        updateStatus={this.props.updateStatus}
        isOwner={!!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
      />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage,
  loginedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    getUser, getStatus, updateStatus, savePhoto,
  }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
