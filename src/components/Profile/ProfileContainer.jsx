import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/store";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then((responce) => {
      this.props.setUserProfile(responce.data);
    });
  }

  render() {
    return <Profile {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage,
});

const RouterContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(RouterContainer);
