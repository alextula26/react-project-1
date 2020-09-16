import React from 'react';
import Header from "./Header";
import * as axios from "axios/index";
import {connect} from "react-redux";
import {isLoaderChanged, setAuthUserData} from "../../redux/store";
import Loader from "../commons/Loader/Loader";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.isLoaderChanged(true);
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
      .then((responce) => {
        if (responce.data.resultCode === 0) {
          this.props.setAuthUserData(responce.data.data.id, responce.data.data.email, responce.data.data.login);
        }
        this.props.isLoaderChanged(false);
      });
  }

  render() {
    return <>
      {this.props.auth.isLoader ? <Loader/> : null}
      <Header {...this.props}/>
    </>
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {setAuthUserData, isLoaderChanged})(HeaderContainer);
