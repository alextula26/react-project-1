import React from "react";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getUser} from "../../redux/profileReduser";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
    this.props.getUser(userId);
  }

  render() {

    if(!this.props.isAuth) {
      return <Redirect to='/login' />
    }

    return <Profile {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage,
  isAuth: state.auth.isAuth,
});

const RouterContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUser})(RouterContainer);
