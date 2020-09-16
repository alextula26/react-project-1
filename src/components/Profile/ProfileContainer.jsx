import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/store";
import * as axios from "axios";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
    .get('https://social-network.samuraijs.com/api/1.0/profile/2')
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
