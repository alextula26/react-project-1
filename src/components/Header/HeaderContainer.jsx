import React from 'react';
import {connect} from "react-redux";
import {getAuth, logout} from "../../redux/authReduser";
import Header from "./Header";
import Loader from "../commons/Loader/Loader";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
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

export default connect(mapStateToProps, {getAuth, logout})(HeaderContainer);
