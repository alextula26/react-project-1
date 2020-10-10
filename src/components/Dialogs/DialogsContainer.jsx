import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Dialogs from './Dialogs';
import { setMessage } from '../../redux/dialogsReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class DialogsContainer extends React.Component {
  render() {
    return (
      <Dialogs {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  dialogs: state.dialogs,
});

export default compose(
  connect(mapStateToProps, { setMessage }),
  withAuthRedirect,
)(DialogsContainer);
