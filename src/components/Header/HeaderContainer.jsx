import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {isLoaderChanged, setAuthUserData} from "../../redux/store";
import Loader from "../commons/Loader/Loader";
import API from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.isLoaderChanged(true);
    API.auth().then((data) => {
      if (data.resultCode === 0) {
        this.props.setAuthUserData(data.data.id, data.data.email, data.data.login);
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
