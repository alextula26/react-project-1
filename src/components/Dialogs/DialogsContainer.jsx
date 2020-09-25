import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {setMessage} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {
  render() {
    return (
      <Dialogs {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  dialogs: state.dialogs
});

export default compose(
  connect(mapStateToProps, {setMessage}),
  withAuthRedirect
)(DialogsContainer);
