import React from 'react';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onChangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode && <div style={{marginBottom: '15px'}}><span
          onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span></div>}
        {this.state.editMode &&
        <div style={{marginBottom: '15px'}}><input onChange={this.onChangeStatus} autoFocus={true}
                                                   onBlur={this.deactivateEditMode}
                                                   value={this.state.status}/></div>}
      </>
    )
  }
}

export default ProfileStatus;
