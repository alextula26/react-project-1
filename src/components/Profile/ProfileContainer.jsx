import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUser} from "../../redux/profileReduser";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
    this.props.getUser(userId);
  }

  render() {
    return <Profile {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage,
});

const RouterContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUser})(RouterContainer);
